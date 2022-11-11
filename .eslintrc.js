module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript"],
  overrides: [ {
    files: ['*.jsx', '*.tsx','*.js','*.ts'],
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': ['off'],
      '@typescript-eslint/strict-boolean-expressions':['off'],
      '@typescript-eslint/no-var-requires': 0,
    },
  },],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  plugins: ["react"],
  rules: {},
  ignorePatterns: ['dist','.eslintrc.js','webpack.config.js'], // <<< ignore all files in test folder

};
