module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb",
        "airbnb-typescript",
        "airbnb/hooks",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": ['./tsconfig.json']
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "prettier"
    ],
    "settings": {
        "import/resolver": {
            "typescript": {}
        },
    },
    "globals": {
        "cy": true,
        "describe": true,
        "it": true
    },
    "rules": {
        "no-restricted-exports": ["error", {"restrictedNamedExports": [] }],
        "react/function-component-definition": ["error", {
            "namedComponents": ["arrow-function"],
            "unnamedComponents": ["arrow-function"],
        }]
    }
}
