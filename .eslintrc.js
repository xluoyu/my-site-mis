module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      "experimentalObjectRestSpread": true,
      "jsx": true,
      "arrowFunctions": true,
      "classes": true,
      "modules": true,
      "defaultParams": true
    },
  },
  plugins: ["react"],
  "rules": {
    semi: 0,
    'no-unused-vars': [
        1,
        {
            vars: 'all',
            args: 'after-used',
            ignoreRestSiblings: true,
            varsIgnorePattern: '^_',
            argsIgnorePattern: '^_|^err|^ev' // _xxx, err, error, ev, event
        }
    ],
    'no-useless-escape': 2,
  }
}