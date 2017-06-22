import { ColorpalletePage } from './app.po';

describe('colorpallete App', () => {
  let page: ColorpalletePage;

  beforeEach(() => {
    page = new ColorpalletePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
