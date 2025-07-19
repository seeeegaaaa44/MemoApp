import js from "@eslint/js"
import globals from "globals"
import * as tseslint from "typescript-eslint"
import pluginReact from "eslint-plugin-react"
import { defineConfig } from "eslint-define-config"

export default defineConfig([
  // JavaScriptベースの推奨設定
  js.configs.recommended,

  // TypeScript推奨設定（配列なのでスプレッドする）
  ...tseslint.configs.recommended,

  // React推奨設定
  pluginReact.configs.flat.recommended,

  // ファイルの対象や環境設定
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.json'], // ← 型チェックを使いたいならこれが必要
        tsconfigRootDir: process.cwd()
      }
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    rules: {
      "react/react-in-jsx-scope": "off",
      "semi": ["error", "never"],
      "comma-dangle": ["error", "never"]
    }
  }
])
