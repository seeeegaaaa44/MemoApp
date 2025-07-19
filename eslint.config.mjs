import js from "@eslint/js"
import globals from "globals"
import * as tseslint from "typescript-eslint"
import pluginReact from "eslint-plugin-react"
import { defineConfig } from "eslint-define-config"

export default defineConfig([
  // JavaScriptベースの推奨設定
  js.configs.recommended,

  // TypeScript 型チェック付き推奨設定（重要！）
  ...tseslint.configs.recommendedTypeChecked,

  // React推奨設定
  pluginReact.configs.flat.recommended,

  // カスタム設定（settings, files, plugins, rules など）
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: {
      globals: {
        ...globals.node
      },
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: process.cwd()
      }
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      react: pluginReact
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "semi": ["error", "never"],
      "comma-dangle": ["error", "never"]
    }
  }
])
