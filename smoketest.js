import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 3, //usando 3 virtuals users
  duration: '30s', // 30 segundos de execução do script
};

export default () => {
  const urlRes = http.get('https://amazon.com.br');
  sleep(1);
};