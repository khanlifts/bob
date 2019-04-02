module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "key-spacing": ["error", { "beforeColon": false, "afterColon": true, "mode": "strict" }],
    "semi" : [2, "never"],
    "max-len": [2, 120, 2],
    "arrow-parens": [
      2,
      "as-needed"
    ],
    "no-var": "error",
    "prefer-const": "error",
    "no-trailing-spaces": ["error", { "skipBlankLines": true }],
    "space-before-function-paren": [2, "never"],
    "operator-linebreak": [2, "before"],
    "generator-star-spacing": [2, {"before": false, "after": true}],
    "no-console": 2,

    "react/jsx-no-bind": [2, { "allowArrowFunctions": true, "allowBind": true }],
    "react/display-name": 0,
    "react/no-unused-prop-types": 0,

    "jsx-quotes": [2, "prefer-double"],

    "no-unused-expressions": 0,
  }
};