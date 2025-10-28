import { When, Then } from '../fixtures';
import { expect } from '@playwright/test';

let lastResponse: any;
When('realizo uma requisição para buscar o celular de id 7', async ({ request }) => {
  lastResponse = await request.get('https://api.restful-api.dev/objects/7');
});
Then('a resposta deve conter os dados do celular', async () => {
  const body = await lastResponse.json();
  expect(body).toHaveProperty('id', '7');
});
