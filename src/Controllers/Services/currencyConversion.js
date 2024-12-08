function convertPrice(currency, input) {
  if (currency == "GBP") {
    let result = parseFloat(input);
    return result;
  } else if (currency == "EUR") {
    let result = input * 1.2;
    let convertedResult = result.toFixed(2);
    return parseFloat(convertedResult);
  } else if (currency == "USD") {
    let result = input * 1.27;
    let convertedResult = result.toFixed(2);
    return parseFloat(convertedResult);
  } else if (currency == "YEN") {
    let result = input * 190.79;
    let convertedResult = result.toFixed(2);
    return parseFloat(convertedResult);
  }
}

module.exports = { convertPrice };
