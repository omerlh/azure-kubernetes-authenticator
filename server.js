const http = require('http');

const name = 'node-hello-world';
const port = process.env.PORT || 1337;

const app = new http.Server();

app.on('request', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write(JSON.stringify(req.headers["x-ms-token-aad-id-token"]));
  res.write('Hello World');
  res.end('\n');
});

app.listen(port, () => {
  console.log(`${name} is listening on port ${port}`);
});