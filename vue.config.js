const { defineConfig } = require("@vue/cli-service")
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    devServer:{
        host: '0.0.0.0',
        port:8080,
        client: {
            webSocketURL: 'wss://0.0.0.0/ws',
        },
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }
})
