# BitBNS Socket

#### Installation
```
npm install
```

#### Getting started
```javascript
const socket = require('./socketBNS').coin('BTC', 'INR')
// This will configure the socket to BTC-INR
// First arguement is coinName
// Second arguement is marketName which can take either 'INR' or 'USDT' value
```

#### Socket call example
```javascript
socket.on('news', res => {
	try {
		const data = JSON.parse(res)
		console.log('Data Received')
		console.log(data)
	} catch (e) {
		console.log('Error in the Stream', e)
	}
})
```

<details>
 <summary>View Response</summary>

```js
Data Received
{ type: 'buyList',
  data:
   '[{"rate":625062.64,"btc":8839377},{"rate":625051.71,"btc":957525},{"rate":625050.19,"btc":8282895},{"rate":625050,"btc":165971},{"rate":625045,"btc":3709460},{"rate":625036,"btc":10116},{"rate":625001,"btc":1203337},{"rate":624000,"btc":10064156},{"rate":623890.99,"btc":138927},{"rate":623500,"btc":750000},{"rate":622001.71,"btc":801851},{"rate":622000,"btc":4418698},{"rate":621000,"btc":500000},{"rate":620050,"btc":169721},{"rate":620000,"btc":1370040}]' }
Data Received
{ type: 'sellList',
  data:
   '[{"rate":628850,"btc":259600},{"rate":628903.36,"btc":9387074},{"rate":630000,"btc":2714337},{"rate":630000.38,"btc":1359328},{"rate":632199,"btc":1598798},{"rate":633000,"btc":6405710},{"rate":635000,"btc":7399509},{"rate":635200,"btc":3025031},{"rate":636999,"btc":107000},{"rate":637000,"btc":16840},{"rate":637057.7,"btc":12000000},{"rate":638000,"btc":6879407},{"rate":640000,"btc":13435462},{"rate":640100,"btc":800000},{"rate":641000,"btc":161977}]' }
Data Received
{ type: 'tradeList',
  data:
   [ { btc: 1640002, rate: 628850, time: '2019-06-03T12:19:32.862Z' },
     { btc: 1586229, rate: 628850, time: '2019-06-03T12:19:02.831Z' },
     { btc: 3334303,
       rate: 628842.46,
       time: '2019-06-03T12:14:40.543Z' },
     { btc: 1427613, rate: 628850, time: '2019-06-03T12:11:55.372Z' },
     { btc: 48116, rate: 625061.62, time: '2019-06-03T12:10:27.271Z' },
     { btc: 10423783,
       rate: 625136.71,
       time: '2019-06-03T12:08:13.120Z' },
     { btc: 645521,
       rate: 626129.43,
       time: '2019-06-03T12:06:48.900Z' },
     { btc: 317246, rate: 628850, time: '2019-06-03T12:05:32.923Z' },
     { btc: 58172, rate: 628849, time: '2019-06-03T12:05:08.910Z' },
     { btc: 322482, rate: 628849, time: '2019-06-03T12:02:26.751Z' },
     { btc: 5956252,
       rate: 626165.08,
       time: '2019-06-03T11:59:59.661Z' },
     { btc: 8472600, rate: 628849, time: '2019-06-03T11:56:31.394Z' },
     { btc: 1044016, rate: 628840, time: '2019-06-03T11:56:31.374Z' },
     { btc: 2704032,
       rate: 626129.43,
       time: '2019-06-03T11:54:31.250Z' },
     { btc: 645521, rate: 628000, time: '2019-06-03T11:54:31.232Z' } ] }
```
</details>
