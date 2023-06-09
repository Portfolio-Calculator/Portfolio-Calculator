// I haven't implemented the initialBalnce or the aloocation of stock yet

async function getDates(symbol, date_from, date_to) {
  const key = process.env.MARKETSTACK_API_KEY;
  let url = `http://api.marketstack.com/v1/eod?access_key=${key}&symbols=${symbol}&date_from=${date_from}&date_to=${date_to}`
  const res = await fetch(url, {
    method: 'GET',
  })
  const data = await res.json()
  let finalData = {};
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
  console.log(data);
  console.log('finalData', finalData, 'stringified finalData', JSON.stringify(finalData));
  return data;
}

export default async function APIComponent({ symbol = 'AAPL,GOOGL', date_from = '2023-01-25', date_to = '2023-01-31'}) {
  const data = await getDates(symbol, date_from, date_to)
  // object with keys {open, high, low, close, volume, adj_high, adj_low, adj_close, adj_open, adj_volume, split_factor, dividend, symbol, exchange, date})

  return (
    <main>
      <h1>This is the component for getting the data</h1>
      <p>Most likely the data visualization stuff will go here</p>
      <div>SYMBOL, OPEN PRICE, DATE</div>
      {data?.data.map((data, index) => (
        <div key={index}>{data.symbol} + {data.open} + {data.date} </div>
      ))}
    </main>
  )
}