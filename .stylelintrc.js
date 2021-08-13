module.exports = {
    extends: ['stylelint-config-standard'],
    ignoreFiles: ["!**/*.css"],
    rules: {
        'at-rule-no-unknown': [
        true,
        {
            // Stylelint won't flag if it finds any of these strings
            ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen', 'layer', 'extend', 'define-placeholder'],
        },
        ],
        'declaration-block-trailing-semicolon': "always", // Ensure there is a semi-colon at the end of a declaration block
        'selector-list-comma-newline-after': "always-multi-line",
    },
};