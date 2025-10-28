import { Page, expect } from '@playwright/test';
import { DropdownElements as el } from '@elements/dropdown.elements';

export class DropdownActions {
  constructor(private page: Page) {}
  async visitPage() { await this.page.goto('/dropdown'); }
  async selectOption2() { await this.page.selectOption(el.dropdown, '2'); }
  async validateSelection() { await expect(this.page.locator(el.dropdown)).toHaveValue('2'); }
}
