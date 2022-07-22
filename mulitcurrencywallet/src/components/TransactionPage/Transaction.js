import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import './Transaction.css';
import Navbar from '../Navbar';

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
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            Select Account
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            
                        </div>
                </div>

                <div className="sep-container">
                    <label className="label-text">Currency</label>
                    
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            Select Currency
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item" href="#">SGD</a>
                            <a class="dropdown-item" href="#">MYR</a>
                            <a class="dropdown-item" href="#">USD</a>
                        </div>
                    </div>
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