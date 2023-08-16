module.exports = {
    plugins: {
        "postcss-preset-env": {
            stage: 0,
            features: {
                "nesting-rules": true
            }
        },
        "tailwindcss/nesting": {},
        "postcss-import": {},
        tailwindcss: {},
        autoprefixer: {},
        // "postcss-nesting": {},
    }
}