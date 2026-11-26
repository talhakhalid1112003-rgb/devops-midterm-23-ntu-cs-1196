const { test } = require('node:test');
const assert = require('node:assert');
const { grade } = require('../src/grade');

test('85 is the lowest A', () => assert.strictEqual(grade(85), 'A'));

test('84 is a B', () => assert.strictEqual(grade(84), 'B'));

test('50 is the lowest pass', () => assert.strictEqual(grade(50), 'D'));

test('49 fails', () => assert.strictEqual(grade(49), 'F'));

test('out-of-range marks are rejected', () => {
  assert.throws(() => grade(101), RangeError);
  assert.throws(() => grade(-1), RangeError);
});
