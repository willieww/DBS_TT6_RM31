import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import WalletBalance from './WalletBalance.js';
import Navbar from './Navbar';

function TableData() {
  const [data, getData] = useState([])
  const URL = 'http://localhost:3500/exchange_rate';
  

  useEffect(() => {
      fetchData()
  }, [])


  const fetchData = () => {
      fetch(URL)
          .then((res) =>
              res.json())

          .then((response) => {
              console.log(response);
              getData(response);
          })

  }

  return (
    <>
    <Navbar />
      <Table striped bordered hover variant="dark" >
        <h1>Exchange Rate</h1>
        <tbody>
            <tr>
                <th>Base Currency</th>
                <th>Exchange Currency</th>
                <th>Rate</th>
            </tr>
            {data.map((item, i) => (
                <tr key={i}>
                    <td>{item.base_currency}</td>
                    <td>{item.exchange_currency}</td>
                    <td>{item.rate}</td>
                </tr>
            ))}
        </tbody>
        </Table>
        
        <WalletBalance />

    </>
);
}

export default TableData;