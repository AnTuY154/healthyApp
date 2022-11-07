module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  ignorePatterns: ["dist/*"],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "react/prop-types": "off",
    "no-console": "error",
  },
};
