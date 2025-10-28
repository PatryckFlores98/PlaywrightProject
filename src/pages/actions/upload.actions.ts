import { Page, expect } from '@playwright/test';
import { UploadElements as el } from '@elements/upload.elements';

export class UploadActions {
  constructor(private page: Page) {}
  async visitPage() { await this.page.goto('/upload'); }
  async uploadSampleFile() {
    await this.page.setInputFiles(el.fileInput, 'tests/support/fixtures/sample.txt');
    await this.page.click(el.submitButton);
  }
  async validateUpload() { await expect(this.page.getByText('File Uploaded!')).toBeVisible(); }
}
