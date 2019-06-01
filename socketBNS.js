const socket_IO = require('socket.io-client');

module.exports = {
	coin(coinName) {
		return socket_IO(`https://wsinrm.bitbns.com/?coin=${coinName.toUpperCase()}`);
	}
};
