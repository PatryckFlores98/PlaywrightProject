import { Page, expect } from '@playwright/test';
import { CheckboxesElements as el } from '@elements/checkboxes.elements';

export class CheckboxesActions {
  constructor(private page: Page) {}
  async visitPage() { await this.page.goto('/checkboxes'); }
  async checkFirst() { await this.page.locator(el.checkbox(0)).check(); }
  async uncheckSecond() { await this.page.locator(el.checkbox(1)).uncheck(); }
  async validateCheckboxes() {
    await expect(this.page.locator(el.checkbox(0))).toBeChecked();
    await expect(this.page.locator(el.checkbox(1))).not.toBeChecked();
  }
}
