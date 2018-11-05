const port = process.env.PORT || 1337;

const http = require('http'),
    httpProxy = require('http-proxy');
 
//
// Create a proxy server with custom application logic
//
var proxy = httpProxy.createProxyServer({});
 
//
// Create your custom server and just call `proxy.web()` to proxy
// a web request to the target passed in the options
// also you can use `proxy.ws()` to proxy a websockets request
//
var server = http.createServer(function(req, res) {
  const token = req.headers["x-ms-token-aad-id-token"];
  req.headers.Authorization = `Bearer ${token}`;
 // req.headers.Host = 'dashboard-secondary.mysoluto.com';
  // You can define here your custom logic to handle the request
  // and then proxy the request.
  proxy.web(req, res, { target: {
    protocol: 'https:',
    host: 'dashboard-secondary.mysoluto.com',
    port: 443,
  },
  changeOrigin: true });
});
 
console.log(`listening on port ${port}`);
server.listen(port);
