module.exports = function(api) {
    api.cache(true)
    return {
        plugins: [
            ['import', {
                libraryName: 'vant',
                libraryDirectory: 'es',
                style: true
            }, 'vant'],
            "@babel/plugin-transform-flow-strip-types",
            "@babel/plugin-transform-modules-commonjs",
            "@babel/plugin-transform-regenerator",
            "@babel/plugin-transform-async-to-generator",
            "@babel/plugin-proposal-async-generator-functions",
            "@babel/plugin-transform-strict-mode",
            "@babel/plugin-transform-runtime"
        ]
    }
}