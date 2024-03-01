const verificaEmail = require('./email.js');

/* global test, expect */
test('verifica se o email está correto', () => {
  expect(verificaEmail('sofiiagomes34@gmail.com')).toBe('sofiiagomes34@gmail.com');
});
test('verifica se o email está correto', () => {
  expect(verificaEmail('sofiiagomes34gmail.com')).toBe(false);
});
test('verifica se o email está correto com matchs', () => {
  expect(verificaEmail('sofiiagomes34@gmail.com')).toMatch('@gmail.com');
});
