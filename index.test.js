import capitalize from './capitalize.js';
import reverseString from './reverseString';
import calculator from './calculator';
import caesarCipher from './caesarCipher';
import analyzeArray from './analyzeArray';

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

// calculator

test('function exists and returns', () => {
  expect(calculator.add(1, 2)).toBeDefined();
  expect(calculator.subtract(1, 2)).toBeDefined();
  expect(calculator.divide(1, 2)).toBeDefined();
  expect(calculator.multiply(1, 2)).toBeDefined();

});

test('1 + 2 returns 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('2 - 1 returns 1 and 1 - 2 = -1', () => {
  expect(calculator.subtract(2, 1)).toBe(1);
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test('1 / 2 = .5 and 4 / 2 = 2', () => {
  expect(calculator.divide(1, 2)).toBe(.5);
  expect(calculator.divide(4, 2)).toBe(2);
});

// caesarCipher

test('function exists and returns', () => {
  expect(caesarCipher('abc', 2)).toBeDefined();
});

test('abc, 3 returns def', () => {
  expect(caesarCipher('abc', 3)).toBe('def');
});

test('def, 3 returns ghi', () => {
  expect(caesarCipher('def', 3)).toBe('ghi'); 
})

test('case preserved', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('wraps from z to a', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('punctuation remains', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

// analyzeArray

const object = {
  average: 4,
  min: 1,
  max: 8,
  length: 6
};

test('exists', () => {
  expect(analyzeArray([0,1,2])).toBeDefined();
})

test('handles [1, 8, 3, 4, 2, 6]', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual(object)
})