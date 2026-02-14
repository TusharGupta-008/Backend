//Using HTTP
const http= require('http');

const createApplication = require('express');
const app = createApplication();

const server = http.createServer(app);
const PORT= 3002;
server.listen(PORT , ()=>{
  console.log(`Server running on address http://localhost:${PORT}`);
});
