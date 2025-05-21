import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import importPlugin from "eslint-plugin-import"; // ← install this

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      import: importPlugin, // ← register it
    },
    rules: {
      // start from ESLint’s recommended baseline
      ...js.configs.recommended.rules,

      // catch any undefined variable (i.e. a symbol you never imported)
      "no-undef": "error",

      // catch modules/files you try to import that don’t actually exist
      "import/no-unresolved": "error",

      // your existing rules…
      ...reactHooks.configs.recommended.rules,
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },

    settings: {
      // so import/no-unresolved knows how to resolve your folders
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
        // if you use webpack aliases, point to your webpack.config.js here
      },
    },
  },
];
