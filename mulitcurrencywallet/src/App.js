import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import LoginPage from './components/LoginPage/index';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WalletBalance from './components/WalletBalance';
import TransactionPage from './components/TransactionPage/Transaction';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          
          <Route path="/Home" exact element={<Home />} />
          <Route path="/" exact element={<LoginPage />} />
          <Route path="/Wallet" exact element={<WalletBalance />} />
          <Route path="/Transaction" exact element={<TransactionPage />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;