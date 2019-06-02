const Promise = require('bluebird');
const entropy = Promise.promisifyAll(require('./lib/generator.js'));

exports.promisedEntropy = async (bits) => {
  if (!bits) {
    throw new Error('Please specify how many bits of combined entropy you would like')
  }
  const generate = new entropy.Generator({})

  // Pull requests for better solutions accepted
  try {
   let t = await generate.generateAsync(bits)
  } catch (generatedEntropy) { return generatedEntropy }
}

		

