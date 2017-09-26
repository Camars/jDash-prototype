import { NgDashPage } from './app.po';

describe('ng-dash App', () => {
  let page: NgDashPage;

  beforeEach(() => {
    page = new NgDashPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
