import { spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { join } from "node:path";

describe("cli", () => {
  it("prints the package version", () => {
    const root = join(import.meta.dirname, "..", "..");
    const packageJson = JSON.parse(readFileSync(join(root, "package.json"), "utf8")) as {
      version: string;
    };

    const result = spawnSync(process.execPath, [join(root, "dist", "cli.mjs"), "--version"], {
      encoding: "utf8",
    });

    expect(result.status).toBe(0);
    expect(result.stdout.trim()).toBe(packageJson.version);
  });
});
