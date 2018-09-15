//bring in brain.js
const brain = require('brain.js');

//create new neural network
const network = new brain.NeuralNetwork();

//train network with small simple data set
network.train([
  {
    input: [1, 2], //team 2 wins
    output: [1]
  },
  {
    input: [1, 3], //team 3 wins
    output: [1]
  },
  {
    input: [2, 3], //team 2 wins
    output: [0]
  },
  {
    input: [2, 4], //team 4 wins
    output: [1]
  },
  {
    input: [1, 2], //team 1 wins
    output: [0]
  },
  {
    input: [1, 3], //team 1 wins
    output: [0]
  },
  {
    input: [3, 4], //team 3 wins
    output: [0]
  }
]);

//probability of team 4 winning based on data
const output = network.run([1, 4]);
console.log(`Probability : ${output}`);
