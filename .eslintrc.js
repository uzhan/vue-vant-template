module.exports = {
  root: true,
  globals: {
    process: true,
  },
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module",
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ["plugin:vue/recommended", "eslint:recommended"],
  plugins: ["babel", "prettier"],
  rules: {
    // 校验规则此处略
  },
};
