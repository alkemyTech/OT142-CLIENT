module.exports = {
  env: {
    browser: false,
    es2021: false,
  },
  extends: ["plugin:react/recommended", "standard"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "single"],
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/no-children-prop": "off",
  },
};
