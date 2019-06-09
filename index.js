const Promise = require('bluebird');
const entropy = Promise.promisifyAll(require('./src/generator.js'));

exports.promisedEntropy = async (bits, params) => {
  if (!bits) {
    throw new Error('Please specify how many bits of combined entropy you would like')
  }

  const generate = new entropy.Generator(params || {})

  // Pull requests for better solutions accepted
  try {
   let t = await generate.generateAsync(bits)
  } catch (generatedEntropy) { return generatedEntropy }
}

		

