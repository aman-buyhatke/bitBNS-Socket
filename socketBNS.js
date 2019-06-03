const socket_IO = require('socket.io-client');

module.exports = {
	coin(coinName, marketName) {
		return socket_IO(`https://ws${marketName.toLowerCase()}m.bitbns.com/?coin=${coinName.toUpperCase()}`);
	}
};
