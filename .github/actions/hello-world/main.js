const core = require("@actions/core");

const firstGreeting = core.getInput("first-greeting");
const secondGreeting = core.getInput("second-greeting");
const thirdGreeting = core.getInput("third-greeting");

console.log(`1. Hello ${firstGreeting}`);
console.log(`2. Hello ${secondGreeting}`);
if (thirdGreeting) {
    console.log(`3. Hello ${thirdGreeting}`);
}