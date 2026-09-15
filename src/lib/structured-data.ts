import type { Resource } from './resources';
import { resourceKind } from './resources';
import { COURSE_OFFER_CATEGORIES } from './pricing';

type Pricing = NonNullable<Resource['pricing']>;
type Author = NonNullable<Resource['author']>;

export type SchemaOrgType = 'Course' | 'SoftwareApplication';

interface StructuredDataContext {
  categoryTitle: string;
}

export function schemaOrgType(item: Resource): SchemaOrgType {
  return resourceKind(item) === 'course' ? 'Course' : 'SoftwareApplication';
}

function offerFor(pricing: Pricing) {
  return {
    '@type': 'Offer',
    priceCurrency: 'USD',
    ...(pricing.type === 'free' && { price: '0' }),
    priceSpecification: pricing.tiers.map(tier => ({
      '@type': 'UnitPriceSpecification',
      name: tier.name,
      price: tier.price,
    })),
  };
}

function personFor(author: Author) {
  return { '@type': 'Person', name: author.name, url: author.link };
}

function commonFields(item: Resource) {
  return {
    name: item.name,
    description: item.description,
    ...(item.link && { url: item.link }),
  };
}

/**
 * JSON-LD for a resource page. It omits breadcrumbs because the page's breadcrumb
 * nav already carries them as microdata.
 */
export function resourceStructuredData(item: Resource, { categoryTitle }: StructuredDataContext) {
  const kind = resourceKind(item);

  switch (kind) {
    case 'course':
      return {
        '@context': 'https://schema.org',
        '@type': 'Course',
        ...commonFields(item),
        inLanguage: 'en',
        ...(item.author && { author: personFor(item.author) }),
        ...(item.pricing && {
          isAccessibleForFree: item.pricing.type === 'free',
          offers: { ...offerFor(item.pricing), category: COURSE_OFFER_CATEGORIES[item.pricing.type] },
        }),
        hasCourseInstance: [{ '@type': 'CourseInstance', courseMode: 'Online' }],
        ...(item.curriculum && item.curriculum.length > 0 && {
          syllabusSections: item.curriculum.map(module => ({
            '@type': 'Syllabus',
            name: module.title,
            description: module.description ?? module.lessons.join(', '),
          })),
        }),
      };
    case 'reusable':
    case 'tool':
      return {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        ...commonFields(item),
        applicationCategory: categoryTitle,
        operatingSystem: item.platforms && item.platforms.length > 0 ? item.platforms.join(', ') : 'Web',
        ...(item.highlights && item.highlights.length > 0 && {
          featureList: item.highlights.map(highlight => highlight.title).join(', '),
        }),
        ...(item.pricing && { offers: offerFor(item.pricing) }),
      };
    default: {
      const exhaustive: never = kind;
      return exhaustive;
    }
  }
}
