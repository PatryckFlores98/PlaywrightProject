import { When, Then } from '../fixtures';
import { expect } from '@playwright/test';

let lastResponse: any;
When('envio os dados de um novo celular', async ({ request }) => {
  lastResponse = await request.post('https://api.restful-api.dev/objects', {
    data: { name: 'Apple MacBook Pro 16', data: { year: 2019, price: 1849.99, 'CPU model': 'Intel Core i9', 'Hard disk size': '1 TB' } }
  });
});
Then('o celular deve ser cadastrado com sucesso', async () => {
  expect(lastResponse.status()).toBe(200);
  const body = await lastResponse.json();
  expect(body).toHaveProperty('name', 'Apple MacBook Pro 16');
});
