const brain = require('brain.js');
const data = require('./data.json');

//user recurrent and long short term memory to deal with strings
const network = new brain.recurrent.LSTM();

//map through array of data
const trainingData = data.map(item => ({
  input: item.text,
  output: item.category
}));

network.train(trainingData, { iterations: 1000 });

const output = network.run('I fixed the power supply');
console.log(`Category : ${output}`);
