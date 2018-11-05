const http = require('http');

const name = 'node-hello-world';
const port = process.env.PORT || 1337;

const app = new http.Server();

app.on('request', (req, res) => {

  const token = req.headers["x-ms-token-aad-id-token"];

  res.writeHead(302, 
    { 
      'Content-Type': 'text/plain',
      'Authorization': `Bearer ${token}`,
      'Location': 'https://dashboard-secondary.mysoluto.com'
    }
    );
  res.write('ok');
  res.end('\n');
});

app.listen(port, () => {
  console.log(`${name} is listening on port ${port}`);
});