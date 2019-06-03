const socket = require('./socketBNS').coin('INR', 'BTC')

socket.on('connect', () => console.log('Connected'))

socket.on('news', res => {
	try {
		const data = JSON.parse(res)
		console.log('Data Received')
		console.log(data)
	} catch (e) {
		console.log('Error in the Stream', e)
	}
})

socket.on('disconnect', () => console.log('Disconnected'))
