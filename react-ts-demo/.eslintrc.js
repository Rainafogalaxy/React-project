module.exports = {
    "env":{
        "browser":true,
        "es2021":true
    },
    "extends":[
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ],
    "overrides":[],
    "paeser": "@typescript-eslint/parser",
    "parserOptions":{
        "exmaVersion":"latest",
        "sourceType":"module"
    },
    "plugins":[
        "react",
        "@typescript-eslint"
    ],
    "rules":{}
}