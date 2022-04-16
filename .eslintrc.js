const path = require("path");

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    parser: "@babel/eslint-parser",
  },
  env: {
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended", "google"],
  settings: {
    "import/resolver": {
      alias: {
        map: [["@", path.resolve(__dirname, "src")]],
      },
    },
  },
};
