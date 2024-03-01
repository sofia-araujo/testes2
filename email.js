function verificaEmail(email) {
  const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  if (regex.test(email)) {
    return email;
  }
  return false;
}

verificaEmail('sofiiagomes34@gmail.com');
module.exports = verificaEmail;
