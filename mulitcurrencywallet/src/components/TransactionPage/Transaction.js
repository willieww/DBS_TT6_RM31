import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import './Transaction.css';
import Navbar from '../Navbar';
import Dropdown from 'react-bootstrap/Dropdown';


const TransactionPage = () => {
    const [Wallet, setWallet] = useState('');
    const [Amount, setAmount] = useState('');

    const onChangeWallet = (e) => {
        setWallet(e.target.value);
    }

    const onChangeAmount = (e) => {
        setAmount(e.target.value);
    }

    const exchangeCurrency = () => {
        console.log('currency exchanged')
    }




    return (
        
        <div className="Transaction-container" onsubmit="exchangeCurrency()">
            <Navbar />
            <form className="Transaction-Window">
                
                <div className="sep-container">
                    <label className="label-text">Account</label>
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            Select Account
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Wallet 1</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Wallet 2</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Wallet 3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <div className="sep-container">
                    <label className="label-text">Currency</label>
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            Select Account
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">SGD</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">USD</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">MYR</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <div className="sep-container">
                    <label className="label-text">Amount</label>
                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                        <div class="input-group-text">$</div>
                        </div>
                        <input type="number" className="form-control" onChange={onChangeAmount} value={Amount} />

                    </div>
                    
                </div>

                <button type="submit" className="btn submit-button">
                    <h2 className="submit-text">Submit</h2>
                </button>
            </form>
        </div>
        
    )
}

export default TransactionPage;