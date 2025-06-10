import globals from "globals";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: ["js"],
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.browser
    }
  },
  globalIgnores(["webpack.config.js"])
]);