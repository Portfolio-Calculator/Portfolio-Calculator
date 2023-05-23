import React from "react";

const PortfolioAllocationTable = (props) => {
  const { portfolioAllocation } = props;

  return (
    <div>
      <h2>Portfolio Allocation</h2>
      <table>
        <thead>
          <tr>
            <th>Stock</th>
            <th>Allocation</th>
            <th>Stock Spent</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(portfolioAllocation).map((stock) => (
            <tr key={stock}>
              <td>{stock}</td>
              <td>{portfolioAllocation[stock].allocation}%</td>
              <td>${portfolioAllocation[stock].stockSpent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PortfolioAllocationTable;
