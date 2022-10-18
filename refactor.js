function returnRandomNumber() {
  return Math.round(Math.random() * 100)
}

function sumToRandomNumber(num) {
  return `Seu número é ${returnRandomNumber() + num}!`;
}

function subtractRandomNumber(num) {
  return `Seu número é ${returnRandomNumber() - num}!`;
}

function multiplyToRandomNumber(num) {
  return `Seu número é ${returnRandomNumber() * num}!`;
}

function divideRandomNumber(num) {
  return `Seu número é ${returnRandomNumber() / num}!`;
}