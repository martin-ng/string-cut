const cutString = require("../helper/cutString");

describe(`stringCut with a default nthChar of every "3" characters`, () => {
  let inputStr = "";
  let message = "Your input needs to have at least 3 characters.";

  test(`It should return a 'string' type`, () => {
    inputStr = "iamyourlyftdriver";
    expect(typeof cutString(inputStr)).toBe("string");
  });

  test(`It should return a message with the value of '3' if the input is empty`, () => {
    inputStr = "";
    expect(cutString(inputStr)).toBe(message);
  });

  test(`It should return a message if the input is less than '3' characters.`, () => {
    inputStr = "ab";
    expect(cutString(inputStr)).toBe(message);
  });

  test(`It should return 'muydv' if the input is 'iamyourlyftdriver'`, () => {
    inputStr = "iamyourlyftdriver";
    expect(cutString(inputStr)).toBe("muydv");
  });

  test(`It should return 'rn' if the input is 'martin'`, () => {
    inputStr = "martin";
    expect(cutString(inputStr)).toBe("rn");
  });
});

describe(`stringCut with an nthChar value of every '2' characters`, () => {
  let inputStr = "";
  let nthChar = 2;
  const message = "Your input needs to have at least 2 characters.";

  test(`It should return a 'string' type`, () => {
    expect(typeof cutString(inputStr, nthChar)).toBe("string");
  });

  test(`It should return a message with the value of '2' if the input is empty`, () => {
    expect(cutString(inputStr, nthChar)).toBe(message);
  });

  test(`It should return a message if the input is less than 2 characters`, () => {
    inputStr = "a";
    expect(cutString(inputStr, nthChar)).toBe(message);
  });

  test(`It should return 'ayulfdie' if the input is 'iamyourlyftdriver'`, () => {
    inputStr = "iamyourlyftdriver";
    expect(cutString(inputStr, nthChar)).toBe("ayulfdie");
  });

  test(`It should return 'mri' if the input is 'martin'`, () => {
    inputStr = "martin";
    expect(cutString(inputStr, nthChar)).toBe("atn");
  });
});
