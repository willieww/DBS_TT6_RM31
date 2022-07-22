
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import LoginPage from './components/LoginPage/index';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
