import React from 'react';
import Table from 'react-bootstrap/Table';


const Wallet = ({accounts}) => {
    
    return (
      <div>
        {/* Nav bar  goes here */}

        <h1>Welcome {/* insert name*/}</h1>
        <h3>Select your wallet</h3>

        {/* Table goes here */}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Wallet</th>
              <th>Currency</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
          {accounts.map((account) => (
            <tr key={account.id}>
                <td>{account.name}</td>
                <td>{account.curr}</td>
                <td>{account.balance}</td>
            </tr>
          ))}

          
          </tbody>
        </Table>
      </div>
    );
  }

  export default Wallet;