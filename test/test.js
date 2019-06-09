const assert = require('assert')
const m = require('../index.js')

describe('Generate Entropy w/ no params', async () => {
	it('256 bits of combined entropy', async () => {
		let e = await m.promisedEntropy(256)
		assert(e.length !== 0)
	})
	it('512 bits of combined entropy', async () => {
		let e = await m.promisedEntropy(512)
		assert(e.length !== 0)
	})
})

describe('Generate Entropy w/ params', async () => {
	const params = {
		loop_delay: 10,        // how many milliseconds to pause between each operation loop.
		work_min: 1,           // milliseconds per loop; a higher value blocks the CPU more.
		auto_stop_bits: 4096,  // the generator prepares entropy for you before you request it.
		max_bits_per_delta: 4  // a safety cap on how much entropy it can claim per value.
	};
	it('256 bits of combined entropy', async () => {
		let e = await m.promisedEntropy(256, params)
		assert(e.length !== 0)
	})
	it('512 bits of combined entropy', async () => {
		let e = await m.promisedEntropy(512, params)
		assert(e.length !== 0)
	})
})