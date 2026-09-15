// Renders scripts/og-image.html to public/og-image.png (1200x630).
// Usage: pnpm og-image   (set CHROME to your Chrome/Chromium binary if needed)
import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const chrome = process.env.CHROME ?? "google-chrome";
const tmp = mkdtempSync(join(tmpdir(), "og-image-"));
const raw = join(tmp, "raw.png");

try {
  try {
    execFileSync(
      chrome,
      [
        "--headless=new",
        "--disable-gpu",
        "--hide-scrollbars",
        "--force-device-scale-factor=1",
        "--window-size=1200,630",
        // Gives the self-hosted font time to load before the capture.
        "--virtual-time-budget=5000",
        `--screenshot=${raw}`,
        `file://${join(root, "scripts/og-image.html")}`,
      ],
      // Some headless builds write the screenshot and then never exit.
      { stdio: "ignore", timeout: 30_000, killSignal: "SIGKILL" },
    );
  } catch (error) {
    if (!existsSync(raw)) throw error;
  }

  // A 256-colour palette roughly halves the file with no visible change on
  // this flat design.
  const info = await sharp(raw)
    .png({ palette: true, quality: 100, colours: 256, dither: 1, compressionLevel: 9, effort: 10 })
    .toFile(join(root, "public/og-image.png"));

  console.log(`public/og-image.png: ${info.width}x${info.height}, ${Math.round(info.size / 1024)} KB`);
} finally {
  rmSync(tmp, { recursive: true, force: true });
}
