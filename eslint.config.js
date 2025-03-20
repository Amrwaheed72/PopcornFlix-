import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks"; // Added for hooks support
import eslintConfigPrettier from "eslint-config-prettier"; // Added for Prettier integration

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"], // Added .ts and .tsx for TypeScript
    languageOptions: {
      ecmaVersion: "latest", // Matches your "latest" parserOptions
      sourceType: "module",
      globals: { ...globals.browser },
    },
    settings: {
      react: { version: "detect" }, // Auto-detect React version
    },
  },
  pluginJs.configs.recommended, // Core JS rules
  pluginReact.configs.flat.recommended, // React rules
  {
    plugins: {
      "react-hooks": pluginReactHooks, // Explicitly add react-hooks
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules, // Recommended hooks rules
      // Ported rules from your .eslintrc.json
      "react/react-in-jsx-scope": "off", // Explicitly disable (though unnecessary)
      "react/jsx-uses-react": "off", // Complementary rule
      "react/prop-types": "off",
      "no-console": "warn",
      "no-unused-vars": "warn",
      "max-len": ["error", { code: 120 }],
      "import/no-cycle": "off",
      "import/prefer-default-export": "off",
      "jsx-a11y/click-events-have-key-events": "off",
      "jsx-a11y/alt-text": "off",
      "jsx-a11y/no-autofocus": "off",
      "jsx-a11y/no-static-element-interactions": "off",
      "react/no-array-index-key": "off",
      "no-param-reassign": "off",
      "react/jsx-props-no-spreading": "off",
    },
  },
  eslintConfigPrettier, // Disable conflicting style rules for Prettier
];