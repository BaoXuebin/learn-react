module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "indent": ["error", 4, {"SwitchCase": 1}],
        "comma-dangle": ["error", "never"],
        "react/jsx-indent": ["error", 'tab'|4],
        "max-len": ["error", 180],
        "react/jsx-boolean-value": ["error", "always"]
        // "react/prefer-stateless-function": [0, { "ignorePureComponents": true }]
    },
    "env": {
        "browser": true,
        "node": true,
        "jasmine": true
    }
};
