import React, { useState } from 'react';

const BalancePage = () => {
    const [ balances, setBalances ] = useState([]);

    const fetchWalletDetails = () => {
        const url = '' // put backend url here
        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log('data:', data)
            setBalances(data);
        })
    }
    return (
        <div style={{ color: "white" }}>
        <h1>View Balance</h1>
        <Table striped bordered hover style={{ color: "white" }}>
          <thead>
            <tr>
              <th>Account Type</th>
              <th>Account Number</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {balances.map((balance) => (
              <tr style={{ color: "white" }}>
                <td>{balance}</td>
                <td>{balance}</td>
                <td>{balance}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    )
}

export default BalancePage;