module.exports = {
    extends: [
        "stylelint-config-recommended-vue",
    ],

    overrides: [
        {
            files: ["**/*.less"],
            customSyntax: "postcss-less"
        },
        {
            files: ["**/*.vue"],
            customSyntax: "postcss-html"
        }
    ],

    rules: {
        "no-descending-specificity": null,
        "font-family-no-missing-generic-family-keyword": null,
        "property-no-unknown": [
            true,
            {
                ignoreProperties: ["font-icon"],
            },
        ],
        "function-no-unknown": [
            true,
            {
                ignoreFunctions: ["constant", "fade", "v-bind"]
            }
        ],
        "selector-pseudo-element-no-unknown": [null],
        "selector-pseudo-class-no-unknown": [
            null,
            { ignorePseudoElements: ["deep"] },
        ],
        "length-zero-no-unit": true,
        "shorthand-property-no-redundant-values": true,
        "color-hex-case": "lower",
        "color-hex-length": "short",
        "max-empty-lines": 1,
        "no-empty-first-line": true,
    }
};
