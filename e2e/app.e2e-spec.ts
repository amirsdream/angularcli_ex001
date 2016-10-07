import { Ex002Page } from './app.po';

describe('ex-002 App', function() {
  let page: Ex002Page;

  beforeEach(() => {
    page = new Ex002Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
