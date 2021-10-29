
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/shared/Header/Header';

function App() {
  return (
    <div className="container w-full">
      <Router>
        <Header></Header>
        <Switch>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
