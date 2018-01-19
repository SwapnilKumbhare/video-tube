import { HarrysTubePage } from './app.po';

describe('harrys-tube App', () => {
  let page: HarrysTubePage;

  beforeEach(() => {
    page = new HarrysTubePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
