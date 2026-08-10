import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: [".astro/**", "src/env.d.ts"],
  },
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
];
