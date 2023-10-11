import { turncateText } from '.';

describe('truncateText', () => {
  it('should return the original text if it is shorter than the specified length', () => {
    const text = 'Hello, world!';
    const truncatedText = turncateText(text, 20);
    expect(truncatedText).toEqual(text);
  });

  it('should truncate the text and append "..." if it is longer than the specified length', () => {
    const text = 'Lorem ipsum dolor sit amet';
    const expectedTruncatedText = 'Lorem ipsum ...';
    const truncatedText = turncateText(text, 12);
    expect(truncatedText).toEqual(expectedTruncatedText);
  });

  it('should return an empty string if the input text is empty', () => {
    const text = '';
    const truncatedText = turncateText(text, 5);
    expect(truncatedText).toEqual('');
  });
});
