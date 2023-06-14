import { HtmlToPlainTextPipe } from './html-to-plain-text.pipe';

describe('HtmlToPlainTextPipe', () => {
  it('create an instance', () => {
    const pipe = new HtmlToPlainTextPipe();
    expect(pipe).toBeTruthy();
  });
});
