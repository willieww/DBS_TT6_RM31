import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';


function WalletBalance() {

    const [data, getData] = useState([])

    useEffect(() => {
        fetchBalance()
    }, [])

  const fetchBalance = () => {
    fetch("./data/db.json")
    .then((res) =>
    res.json())
    .then((data) => {
    console.log(data.wallet);
    getData(data.wallet);
})

}

  return (
    <div >
        <h1>View Balance</h1>

      <Table striped bordered hover variant="dark" >
        <h1>View Balance</h1>
        <tbody>
            <tr>
                <th>Type of Account</th>
                <th>Account ID</th>
                {/* <th>Wallet Balance</th> */}
            </tr>
            {data.map((item, i) => (
                <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.user_id}</td>
                    {/* <td>{item.rate}</td> */}
                </tr>
            ))}
        </tbody>
        </Table>
    </div>
    
  );
}

export default WalletBalance;