/**
 * This function was designed with an nthChar parameter for extensibility. This parameter has a default value of 3 for the purpose of the string cutting exercise.
 * If a developer chooses to modify this parameter, the function can simply be invoked with the desired number value.
 * @param {*} inputStr
 * @param {*} nthChar
 * @returns
 */

function cutString(inputStr, nthChar = 3) {
  if (inputStr.length < nthChar) {
    return `Your input needs to have at least ${nthChar} characters.`;
  }
  let result = [];

  for (let i = nthChar - 1; i < inputStr.length; i += nthChar) {
    result.push(inputStr[i]);
  }
  return result.join("");
}

module.exports = cutString;
