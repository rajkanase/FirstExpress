import { ExpressFirstPage } from './app.po';

describe('express-first App', () => {
  let page: ExpressFirstPage;

  beforeEach(() => {
    page = new ExpressFirstPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
