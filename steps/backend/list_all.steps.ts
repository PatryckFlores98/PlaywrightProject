import { When, Then } from '../fixtures';
import { expect } from '@playwright/test';

let lastResponse: any;
When('realizo uma requisição para listar todos os celulares', async ({ request }) => {
  lastResponse = await request.get('https://api.restful-api.dev/objects');
});
Then('a resposta deve conter uma lista de celulares', async () => {
  expect(lastResponse.status()).toBe(200);
  const body = await lastResponse.json();
  expect(Array.isArray(body)).toBeTruthy();
});
