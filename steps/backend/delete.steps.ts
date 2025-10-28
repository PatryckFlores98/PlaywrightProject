import { When, Then } from '../fixtures';
import { expect } from '@playwright/test';

let tempId: string; let lastResponse: any;
When('crio um celular temporário', async ({ request }) => {
  const res = await request.post('https://api.restful-api.dev/objects', { data: { name: 'Temp Cell', data: { year: 2022 } } });
  const body = await res.json(); tempId = body.id;
});
When('deleto o celular criado', async ({ request }) => {
  lastResponse = await request.delete(`https://api.restful-api.dev/objects/${tempId}`);
});
Then('o celular deve ser removido com sucesso', async () => { expect(lastResponse.status()).toBe(200); });
