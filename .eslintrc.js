{
  "env": {
    "node": true
  },
  "extends": ["plugin:prettier/recommended"],
  "parserOptions": {
    "ecmaVersion": 7,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}