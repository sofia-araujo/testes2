function verificaIdade(idade) {
  if (idade >= 5 && idade <= 7) {
    return 'infantil A';
  } if (idade >= 8 && idade <= 10) {
    return 'infantil B';
  } if (idade >= 11 && idade <= 13) {
    return 'juvenil A';
  } if (idade >= 8 && idade <= 17) {
    return 'juvenil B';
  }
  if (idade > 18) {
    return 'adulto';
  }
  return 'idade inválida';
}

module.exports = verificaIdade;
