const socket = require('./socketBNS').coin('BTC')

socket.on('connect', () => console.log('Connected'))

socket.on('news', res => {
	try {
		const data = JSON.parse(res)
		console.log('Data Received ', data)
	} catch (e) {
		console.log('Error in new Stream ', e)
	}
})

socket.on('disconnect', () => console.log('Disconnected'))
