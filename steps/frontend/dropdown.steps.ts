import { Given, When, Then } from '../fixtures';
import { PageManager } from '../../src/pages/pages/page.manager';

Given('que acesso a página de dropdown', async ({ page }) => { await new PageManager(page).dropdown.visitPage(); });
When('seleciono a opção 2', async ({ page }) => { await new PageManager(page).dropdown.selectOption2(); });
Then('a opção 2 deve estar selecionada', async ({ page }) => { await new PageManager(page).dropdown.validateSelection(); });
