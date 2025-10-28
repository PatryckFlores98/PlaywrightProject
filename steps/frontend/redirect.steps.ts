import { Given, When, Then } from '../fixtures';
import { PageManager } from '../../src/pages/pages/page.manager';

Given('que acesso a página de redirect', async ({ page }) => { await new PageManager(page).redirect.visitPage(); });
When('clico no link de redirecionamento', async ({ page }) => { await new PageManager(page).redirect.clickRedirect(); });
Then('devo ser redirecionado para nova página', async ({ page }) => { await new PageManager(page).redirect.validateRedirect(); });
