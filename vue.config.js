const path = require('path');//引入path模块
function resolve(dir) {
    return path.join(__dirname, dir)//path.join(__dirname)设置绝对路径
}
module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('./src'))
            .set('components', resolve('./src/components'))
            .set('views', resolve('src/views'))
            .set('assets', resolve('src/assets'))
            .set('network', resolve('src/network'))
            .set('common', resolve('src/common'))
        //set第一个参数：设置的别名，第二个参数：设置的路径　
    },
    lintOnSave: false,
    devServer: {
        overlay: {
            warning: false,
            errors: false
        }
    },
}
// **exports **返回的是模块函数
// **module.exports **返回的是模块对象本身，返回的是一个类
// 使用上的区别是
// exports的方法可以直接调用
// module.exports需要new对象之后才可以调用