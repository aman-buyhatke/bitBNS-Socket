const socket_IO = require('socket.io-client');

module.exports = {
	coin(marketName, coinName) {
		return socket_IO(`https://ws${marketName}m.bitbns.com/?coin=${coinName.toUpperCase()}`);
	}
};
