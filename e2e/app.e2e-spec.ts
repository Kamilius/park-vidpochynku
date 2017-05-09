import { TouristClubPage } from './app.po';

describe('tourist-club App', () => {
  let page: TouristClubPage;

  beforeEach(() => {
    page = new TouristClubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
