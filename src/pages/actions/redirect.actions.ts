import { Page, expect } from '@playwright/test';
import { RedirectElements as el } from '@elements/redirect.elements';

export class RedirectActions {
  constructor(private page: Page) {}
  async visitPage() { await this.page.goto('/redirector'); }
  async clickRedirect() { await this.page.click(el.redirectLink); }
  async validateRedirect() { await expect(this.page).toHaveURL(/\/status_codes/); }
}
