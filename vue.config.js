const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    lintOnSave: true,
    chainWebpack: (config) => {
        config.resolve.alias
            .set('vue$', resolve('vue/dist/vue.esm.js'))
            .set('@', resolve('src'))
            .set('styles', resolve('src/assets/styles'))
            .set('common', resolve('src/common'))
    },
    configureWebpack: {
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            }
        }
    }
};