const path = require('path');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


function resolve(dir) {
    return path.join(__dirname, '.', dir)
}
module.exports = function override(config, env) {
    //do stuff with the webpack config...
    //config.output.path=resolve("dist")
    // console.log("GGGG:"+require.resolve('react-dev-utils/webpackHotDevClient'))
    // config.entry=[
    //     ("./src/index.js"),
    //     ("./src/index2.js")
    // ]

    
    // setTimeout(()=>{
    //     console.log(config.devServer)
    // },5000)
    // config.devServer={
    //     inline: true,
    //     port: 3000,
    //     proxy: {
    //         '/api/*': {
    //             //target: 'https://9.112.229.65:9446',
    //             //target: 'https://10.109.42.27:9451',
    //             //target: 'https://10.109.42.18:9447',
    //             target: 'http://localhost:8080',
    //             //target:'https://9.112.229.133:9447',
    //             //target:'https://9.112.229.44:9447',
    //             // target: 'https://9.112.229.89:9447',
    //             // target: 'https://9.112.229.91:9447',
    //             secure: false,
    //             pathRewrite: {"^/api": ""}
    //         }
    //     }
    // }
        
    // config.output.path=resolve('./static/js')
    // config.output.filename="[name].js"
    //config.plugins.push(new BundleAnalyzerPlugin())
    
    
    return config;
}
