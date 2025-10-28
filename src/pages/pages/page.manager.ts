import { Page } from '@playwright/test';
import { LoginActions } from '@actions/login.actions';
import { CheckboxesActions } from '@actions/checkboxes.actions';
import { DropdownActions } from '@actions/dropdown.actions';
import { UploadActions } from '@actions/upload.actions';
import { RedirectActions } from '@actions/redirect.actions';

export class PageManager {
  readonly login: LoginActions;
  readonly checkboxes: CheckboxesActions;
  readonly dropdown: DropdownActions;
  readonly upload: UploadActions;
  readonly redirect: RedirectActions;

  constructor(readonly page: Page) {
    this.login = new LoginActions(page);
    this.checkboxes = new CheckboxesActions(page);
    this.dropdown = new DropdownActions(page);
    this.upload = new UploadActions(page);
    this.redirect = new RedirectActions(page);
  }
}
