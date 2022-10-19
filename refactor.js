const returnText = (response) => `Seu número é ${response}!`;

function returnRandomNumber() {
  return Math.round(Math.random() * 100)
}

function sumToRandomNumber(number) {
  return returnText(returnRandomNumber() + number);
}

function subtractRandomNumber(number) {
  return returnText(returnRandomNumber() - number);
}

function multiplyToRandomNumber(number) {
  return returnText(returnRandomNumber() * number);
}

function divideRandomNumber(number) {
  return returnText(returnRandomNumber() / number);
}