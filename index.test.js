import capitalize from './capitalize.js';
import reverseString from './reverseString';

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

// reverse tests

test('function exists', () => {
  expect(reverseString('string')).toBeDefined();
});

test('returns gnirts', () => {
  expect(reverseString('string')).toBe('gnirts');
});

test('returns drow', () => {
  expect(reverseString('word')).toBe('drow');
});