module.exports = {
    root: true,
    env: {
        node: true,
    },
    parser: 'vue-eslint-parser',
    extends: [
        '@vue/typescript/recommended',
        'plugin:vue/vue3-essential',
        'plugin:vue/vue3-recommended',
        'eslint:recommended',
        '@vue/prettier',
    ],
    parserOptions: {
        ecmaVersion: 2020,
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        ecmaFeatures: {
            tsx: true,
            jsx: true,
        },
    },

    overrides: [
        {
            files: ['*.html'],
            rules: {
                'vue/comment-directive': 'off',
            },
        },
    ],

    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-undef': 'off',
        'max-params': ['warn', 4],
        'no-nested-ternary': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-explicit-any': [
            'error',
            { ignoreRestArgs: true, fixToUnknown: true },
        ],
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/ban-ts-comment': [
            'error',
            {
                'ts-ignore': 'allow-with-description',
                'ts-nocheck': 'allow-with-description',
            },
        ],
        '@typescript-eslint/no-non-null-assertion': 'off',
        'no-undefined': 'off',
        'no-redeclare': 'error',
        'no-use-before-define': 'off',
        'vue/multi-word-component-names': 'off',
        'prettier/prettier': [
            'warn',
            {
                tabWidth: 4,
                singleQuote: true,
                semi: true,
                trailingComma: 'es5',
            },
        ],
        'lines-between-class-members': [
            'error',
            'always',
            { exceptAfterSingleLine: true },
        ],
        '@typescript-eslint/explicit-member-accessibility': [
            'error',
            {
                accessibility: 'explicit',
                ignoredMethodNames: [
                    'beforeCreate',
                    'created',
                    'mounted',
                    'beforeUpdate',
                    'updated',
                    'activated',
                    'deactivated',
                    'beforeDestroy',
                    'destroyed',
                    'errorCaptured',
                    'beforeRouteEnter',
                    'beforeRouteLeave',
                    'beforeRouteUpdate',
                ],
                overrides: {
                    accessors: 'off',
                    constructors: 'no-public',
                    methods: 'explicit',
                    properties: 'off',
                    parameterProperties: 'off',
                },
            },
        ],
        'vue/component-definition-name-casing': 'off',
        'vue/no-v-model-argument': 'off',
        'vue/no-v-for-template-key': 'off',
        'vue/no-multiple-template-root': 'off',
    },
};
