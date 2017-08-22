import { CISPage } from './app.po';

describe('cis App', function() {
  let page: CISPage;

  beforeEach(() => {
    page = new CISPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
