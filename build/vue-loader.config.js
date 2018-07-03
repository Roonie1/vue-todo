module.exports = (isDev) => {
    return {
        preserveWhitepace: true,
        extractCSS: !isDev,
        cssModules: {
            localIndentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
            camelCase: true
        },
        // // hotReload: false 
        // loaders: {
        //     // 'docs': docsLoader
        // },
        // preLoader: {

        // }
    }
}