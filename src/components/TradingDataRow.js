import React from "react";

const TradingDataRow = (props) => {
  const { item } = props;
  const { date, stocks, profits, total } = item;

  return (
    <tr key={date}>
      <td>{date}</td>
      {Object.keys(stocks).map((stock) => (
        <React.Fragment key={stock}>
          <td>{stocks[stock]}</td>
          <td>{profits[stock]}</td>
        </React.Fragment>
      ))}
      <td>{total}</td>
    </tr>
  );
};

export default TradingDataRow;
