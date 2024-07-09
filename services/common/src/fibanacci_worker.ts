import { parentPort, isMainThread, workerData } from 'worker_threads';
import fib from './fibanacci';

if (!isMainThread) {
  const result = fib(workerData);
  parentPort.postMessage(result);
}