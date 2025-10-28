import { Given, When, Then } from '../fixtures';
import { PageManager } from '../../src/pages/pages/page.manager';

Given('que acesso a página de upload', async ({ page }) => { await new PageManager(page).upload.visitPage(); });
When('faço upload de um arquivo de teste', async ({ page }) => { await new PageManager(page).upload.uploadSampleFile(); });
Then('a mensagem de sucesso deve ser exibida', async ({ page }) => { await new PageManager(page).upload.validateUpload(); });
