import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import LoginPage from './components/LoginPage/index';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WalletBalance from './components/WalletBalance';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/Home" exact element={<Home />} />
          <Route path="/" exact element={<LoginPage />} />
          <Route path="/history" exact element={<WalletBalance />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;