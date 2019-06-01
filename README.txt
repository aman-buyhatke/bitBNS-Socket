bitBNS-socket

1. Install socket.io-client.
  npm i socket.io-client

2. require './socketBNS' as socket with calling its coin() function passing the name of the coin whose coin/inr is needed.

3. then socket.on('news', response) will give depth of the coin in response whenever it changes
