// I haven't implemented the initialBalnce or the aloocation of stock yet

async function getDates(symbol, date_from, date_to) {
  const key = process.env.MARKETSTACK_API_KEY;
  let url = `http://api.marketstack.com/v1/eod?access_key=${key}&symbols=${symbol}&date_from=${date_from}&date_to=${date_to}`
  const res = await fetch(url, {
    method: 'GET',
  })
<<<<<<< HEAD
  const data = await res.json();
  let finalData = {
    initialBalance: initialBalance,
  };
  let symbolArray = symbol.split(',');

  const combinedObject = symbolArray.reduce((obj, key, index) => {
    obj[key] = allocation[index];
    return obj;
  }, {});


=======
  const data = await res.json()
  let finalData = {};
>>>>>>> main
  for (let i = 0; i < data.data.length; i++) {
    let eachDataPoint = data.data[i];
    let symbol = eachDataPoint.symbol;
    let date = eachDataPoint.date.slice(0, 10);
    let formatedData = {
      name: symbol,
      high: eachDataPoint.high,
      low: eachDataPoint.low,
      open: eachDataPoint.open,
      close: eachDataPoint.close,
      volume: eachDataPoint.volume,
    }
    if (finalData[symbol]) {
      finalData[symbol][date] = formatedData;
    } else {
      finalData[symbol] = {};
      finalData[symbol][date] = formatedData;
    }
  }
<<<<<<< HEAD
  // adding the allocation, initial balance, and finalBalance to the finalData object
  let portfolioAllocation = {};
  for (let i = 0; i < allocation.length; i++) {
    portfolioAllocation[symbolArray[i]] = {
      allocation : allocation[i],
      initialBalance : allocation[i] * initialBalance,
      finalBalance : allocation[i] * initialBalance * (finalData[symbolArray[i]][date_to].close / finalData[symbolArray[i]][date_from].open).toFixed(2),
    };
  };
  finalData["portfolioAllocation"] = portfolioAllocation;
  // console.log('finalData', finalData, 'stringified finalData', JSON.stringify(finalData));
  return finalData;
}

export default async function APIComponent({ symbol = 'AAPL,GOOGL', date_from = '2023-01-25', date_to = '2023-01-31', allocation = [0.5, 0.5], initialBalance = 1000 }) {
  const data = await getDates(symbol, date_from, date_to, allocation, initialBalance);
  console.log('data, this is where you would get the data from Divya', data);
=======
  console.log(data);
  console.log('finalData', finalData, 'stringified finalData', JSON.stringify(finalData));
  return data;
}

export default async function APIComponent({ symbol = 'AAPL,GOOGL', date_from = '2023-01-25', date_to = '2023-01-31'}) {
  const data = await getDates(symbol, date_from, date_to)
>>>>>>> main
  // object with keys {open, high, low, close, volume, adj_high, adj_low, adj_close, adj_open, adj_volume, split_factor, dividend, symbol, exchange, date})

  return (
    <main>
      <h1>Data visualization HERE</h1>
    </main>
  )
}