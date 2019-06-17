var cors_proxy = require('cors-anywhere');

const HOST = '0.0.0.0';
const PORT = 8080;

cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: [],
    removeHeaders: []
}).listen(PORT, HOST, function () {
    console.log('Running CORS Anywhere on ' + HOST + ':' + PORT);
});