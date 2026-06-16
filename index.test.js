import capitalize from './capitalize.js';

// capitalize tests

test('returns string', () => {
  expect(capitalize('string')).toBeDefined();
});

test('returns String', () => {
  expect(capitalize('string')).toBe('String');
});

test('returns Word', () => {
  expect(capitalize('word')).toBe('Word');
});

test('returns already capitalized word', () => {
  expect(capitalize('Word')).toBe('Word');
});

