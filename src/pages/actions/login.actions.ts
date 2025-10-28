import { Page, expect } from '@playwright/test';
import { LoginElements as el } from '@elements/login.elements';

export class LoginActions {
  constructor(private page: Page) {}
  async visitPage() { await this.page.goto('/login'); }
  async login() {
    await this.page.fill(el.username, 'tomsmith');
    await this.page.fill(el.password, 'SuperSecretPassword!');
    await this.page.click(el.submit);
  }
  async validateLogin() { await expect(this.page.locator(el.successMessage)).toBeVisible(); }
}
