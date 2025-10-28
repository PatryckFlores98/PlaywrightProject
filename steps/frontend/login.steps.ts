import { Given, When, Then } from '../fixtures';
import { PageManager } from '../../src/pages/pages/page.manager';

Given('que acesso a página de login', async ({ page }) => { await new PageManager(page).login.visitPage(); });
When('preencho usuário e senha corretamente', async ({ page }) => { await new PageManager(page).login.login(); });
Then('devo ver a mensagem de sucesso', async ({ page }) => { await new PageManager(page).login.validateLogin(); });
