const events = require("events");
const fs = require("fs");
const readline = require("readline");

async function applyFunctionToEachLine(file, functionToRun) {
  const results = [];
  const rl = readline.createInterface({
    input: fs.createReadStream(file),
    crlfDelay: Infinity,
  });

  rl.on("line", (line) => {
    results.push(functionToRun(line));
  });
  await events.once(rl, "close");

  return results;
}

module.exports = { applyFunctionToEachLine };
