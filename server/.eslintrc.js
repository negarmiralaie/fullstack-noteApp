module.exports = {
    parser: "@typescript-eslint/parser",
    extends : [
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
    ],
    parserOptions: {
        exmaVersion: 2018,
        sourceType: "module",
    },
    rules: {},
};