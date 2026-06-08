#!/usr/bin/env node
import { readFileSync } from "node:fs";
import { defineCommand, runMain } from "citty";

const packageJson = JSON.parse(
  readFileSync(new URL("../package.json", import.meta.url), "utf8"),
) as {
  version: string;
};

const main = defineCommand({
  meta: {
    name: "regxa",
    version: packageJson.version,
    description:
      "Universal package registry client — query npm, PyPI, crates.io, RubyGems, Packagist with a single PURL-native API.",
  },
  subCommands: {
    info: () => import("./commands/info.ts").then((m) => m.default),
    versions: () => import("./commands/versions.ts").then((m) => m.default),
    deps: () => import("./commands/deps.ts").then((m) => m.default),
    maintainers: () => import("./commands/maintainers.ts").then((m) => m.default),
    cache: () => import("./commands/cache.ts").then((m) => m.default),
  },
});

runMain(main);
