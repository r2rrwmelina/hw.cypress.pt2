import js from "@eslint/js";
import globals from "globals";
import {defineConfig} from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,}"],
    plugins: {js},
    extends: ["js/recommended"],
    languageOptions: {globals: globals.browser},
    rules: {
      "prefer-const": "warn",
      "no-constant-binary-expression": "error",
      "getter-return": "error",
      "no-var": "warn",
      "no-shadow": "error",
      "prefer-spread": "warn",
      "prefer-rest-params": "warn",
      "no-setter-return": "error",
      "valid-typeof": "error",
      "array-bracket-spacing": ["error", "never"],
      "no-trailing-spaces": "error",
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "no-debugger": "off",
      "no-undef": "off",
    },
  },
]);
