import { Given, When, Then } from '../fixtures';
import { PageManager } from '../../src/pages/pages/page.manager';

Given('que acesso a página de checkboxes', async ({ page }) => { await new PageManager(page).checkboxes.visitPage(); });
When('eu marco o primeiro checkbox', async ({ page }) => { await new PageManager(page).checkboxes.checkFirst(); });
When('eu desmarco o segundo checkbox', async ({ page }) => { await new PageManager(page).checkboxes.uncheckSecond(); });
Then('os checkboxes devem estar nas posições corretas', async ({ page }) => { await new PageManager(page).checkboxes.validateCheckboxes(); });
