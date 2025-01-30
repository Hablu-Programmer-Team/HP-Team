import js from "@eslint/js";
import preferArrow from "eslint-plugin-prefer-arrow";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2024,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "prefer-arrow": preferArrow,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "prefer-arrow/prefer-arrow-functions": [
        "error",
        {
          disallowPrototype: true,
          singleReturnOnly: false,
          classPropertiesAllowed: false,
        },
      ],
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "prefer-arrow-callback": "warn", // Enforce arrow functions for callbacks
      "arrow-body-style": ["warn", "as-needed"], // Enforce concise arrow functions
      "no-var": "error", // Disallow `var`
      "prefer-const": "warn", // Suggest `const` where possible
      "object-shorthand": ["warn", "always"], // Enforce shorthand syntax in object literals
      "func-style": ["warn", "expression"], // Enforce arrow functions instead of function declarations
    },
  }
);
