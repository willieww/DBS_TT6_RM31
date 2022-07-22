import React from "react";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Navbar from './Navbar';


function WalletBalance() {
  const [data, getData] = useState([])
  const URL = 'http://localhost:3500/wallet';
  

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
    
    <div >
        <Navbar />
      <Table striped bordered hover variant="dark" >
        <h1>View Balance</h1>
        <tbody>
            <tr>
                <th>Wallet ID</th>
                <th>Type of Account</th>
                <th>Currency</th>
                <th>Amount</th>
            </tr>
            {data.map((Walletitem, i) => (
                <tr key={i}>
                    <td>{Walletitem.id}</td>
                    <td>{Walletitem.name}</td>
                    <td>{Walletitem.currency}</td>
                    <td>{Walletitem.amount}</td>
                </tr>
            ))}
        </tbody>
        </Table>
    </div>
    
  );
}

export default WalletBalance;