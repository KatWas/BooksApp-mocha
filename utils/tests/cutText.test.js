const cutText = require('../cutText.js');
const expect = require('chai').expect;

describe('CutText', () => {

  it('should throw an error if "content" arg is not a string', () => {
    expect(() => { cutText(undefined, 20) }).to.throw('Error');
    expect(() => { cutText(12, 20) }).to.throw('Error');
    expect(() => { cutText({}, 20) }).to.throw('Error');
    expect(() => { cutText([], 20) }).to.throw('Error');
    expect(() => { cutText(function () { }, 20) }).to.throw('Error');
  });
}