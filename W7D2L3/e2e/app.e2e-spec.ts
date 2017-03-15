import { W7D2L3Page } from './app.po';

describe('w7-d2-l3 App', () => {
  let page: W7D2L3Page;

  beforeEach(() => {
    page = new W7D2L3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
