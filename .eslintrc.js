module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],

        "semi": [
            "error",
            "always"
        ],
        "react/jsx-uses-react": 1,
        "react/jsx-uses-vars": [2]
    }
};