const chunk = require('./chunk');
describe('test chunk', () => {

  test('implemented basic functionality', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']]);
  });

  test('the method allocates the remaining elements into a separate array', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
  });

  test('the method splits the array if the size parameter is not specified', () => {
    expect(chunk(['a', 'b', 'c', 'd'])).toEqual([['a'], ['b'], ['c'], ['d']]);
  });

  test('the method returns an empty array with a negative size parameter', () => {
    expect(chunk(['a', 'b', 'c', 'd'], -3)).toEqual([]);
  });

  test('the method returns an empty array when the input is an empty array', () => {
    expect(chunk([], 2)).toEqual([]);
  });

  it("the method returns an empty array when the input is null", () => {
    expect(chunk(null, 2)).toEqual([]);
  });

  it("if the size parameter is a string, then it is converted to a number", () => {
    expect(chunk(['a', 'b', 'c', 'd'], '2')).toEqual([['a', 'b'], ['c', 'd']]);
  });

  it("if the size parameter is not a number, then it is returns an empty array", () => {
    expect(chunk(['a', 'b', 'c', 'd'], 'string')).toEqual([]);
  });
});
