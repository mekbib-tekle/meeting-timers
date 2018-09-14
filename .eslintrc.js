module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "mocha": true
  },
  "rules": {
    "no-underscore-dangle": 0,
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved" : "off",
    "import/prefer-default-export": "off",
    "no-class-assign": "off",
    "react/prop-types": "off",
    "react/prefer-stateless-function": [0, { "ignorePureComponents": true }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "max-len": [0, {"code": 200}],
    "react/jsx-max-props-per-line": [0, {"maximum": 3, "when": "always"}],
    "react/jsx-one-expression-per-line": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/label-has-for": 0,
    "react/jsx-indent": [1, 'tab'|4],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "globals" : {
      "expect": true
    },
    "comma-dangle": [1, "always-multiline"],
    "function-paren-newline": "off"
  },
  "plugins": [
    "react"
  ]
}
