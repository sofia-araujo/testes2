const verificaIdade = require('./app.js');

/* global test, expect */
test('retorna a categoria da idade', () => {
  expect(verificaIdade(5)).toBe('infantil A');
});
test('retorna a categoria da idade', () => {
  expect(verificaIdade(9)).toBe('infantil B');
});
test('retorna a categoria da idade', () => {
  expect(verificaIdade(12)).toBe('juvenil A');
});
test('retorna a categoria da idade', () => {
  expect(verificaIdade(15)).toBe('juvenil B');
});
test('retorna a categoria da idade', () => {
  expect(verificaIdade(20)).toBe('adulto');
});
test('retorna a categoria da idade', () => {
  expect(verificaIdade(-2)).toBe('idade inválida');
});
