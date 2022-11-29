const { divide } = require('../lib/Math');

test('divides 10 by 2 to equal 5', () => {
    expect(divide(10, 2)).toBe(5);
});