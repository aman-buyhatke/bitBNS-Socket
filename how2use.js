const socket = require('./socketBNS').coin('BTC');

socket.on('news', res => {
	try {
		const data = JSON.parse(res);
		console.log(data);
	} catch (e) {
		console.log(e);
	}
});
