/* eslint-disable no-undef */
const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
    const result = add(3, 5);
    expect(result).toBe(8);
});

test('should generateGreeting', () => {
    const result = generateGreeting('Edison');
    const expected = 'Hello Edison!';
    expect(expected).toBe(result);
});

test('should generateGreeting with no name', () => {
    const result = generateGreeting();
    const expected = 'Hello Anonymous!';
    expect(expected).toBe(result);
});
