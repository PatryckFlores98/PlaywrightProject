import { When, Then } from '../fixtures';
import { expect } from '@playwright/test';

let lastResponse: any;
When('realizo uma requisição para listar celulares com ids 3, 5 e 10', async ({ request }) => {
  lastResponse = await request.get('https://api.restful-api.dev/objects?id=3&id=5&id=10');
});
Then('a resposta deve conter os objetos solicitados', async () => {
  const body = await lastResponse.json();
  expect(body).toHaveLength(3);
  expect(body[0].id).toBe('3'); expect(body[1].id).toBe('5'); expect(body[2].id).toBe('10');
});
