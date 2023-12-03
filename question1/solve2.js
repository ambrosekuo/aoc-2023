const { applyFunctionToEachLine } = require("../utils.js");

// e.g. 1ab3 = 13, 0 otherwise
function getFirstAndLastCombination(str) {
  let first = 0;
  let hasSecondLastNumberEverBeenFound = false;
  let lastNumberFound = 0;

  let i = 0;
  while (first == 0 && i < str.length) {
    if (str[i] && !isNaN(str[i])) {
      first = str[i];
    }
    i++;
  }

  while (i < str.length) {
    if (str[i] && !isNaN(str[i])) {
      hasSecondLastNumberEverBeenFound = true;
      lastNumberFound = str[i];
    }
    i++;
  }
  if (lastNumberFound == 0 && !hasSecondLastNumberEverBeenFound) {
    lastNumberFound = first;
  }
  console.log(+(first + lastNumberFound));

  return +(first + lastNumberFound);
}

async function solve() {
  const results = await applyFunctionToEachLine(
    "./question1/input.txt",
    getFirstAndLastCombination
  );
  return results.reduce((a, b) => a + b, 0);
}

solve().then((answer) => console.log(answer));
