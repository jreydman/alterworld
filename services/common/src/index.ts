import http from 'node:http';
import url from 'node:url';
import { Worker } from 'worker_threads';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fib from './fibanacci';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;

// Creating http Server
const httpServer = http.createServer(async (request, response) => {
  const reqUrl = url.parse(request.url, true);

  if (reqUrl.pathname === '/fibonacci') {
    const numbers = JSON.parse(reqUrl.query.numbers);
    const results = numbers.map(n => fib(n).toString());
    response.end(JSON.stringify({ results }));
    return;
  }
  
  if (reqUrl.pathname === '/fibonacci_worker') {
    const numbers = JSON.parse(reqUrl.query.numbers);
    const results = await Promise.all(numbers.map(n => {
      return new Promise((resolve, reject) => {
        const worker = new Worker(path.resolve(__dirname, './fibanacci_worker.ts'), { workerData: n, execArgv: ['--import', '@swc-node/register/esm-register'] });
        worker.on('message', (result) => resolve(result.toString()));
        worker.on('error', reject);
      });
    }));
    response.end(JSON.stringify({ results }));
    return;
  }

  // Other code...
});

// Listening to http Server by using listen() method
httpServer.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}...`);
});