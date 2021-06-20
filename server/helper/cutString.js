function cutString(inputStr) {
  let result = [];

  for (let i = 2; i < inputStr.length; i += 2) {
    result.push(string[i]);
  }
  return result.join("");
}

module.exports = cutString;
