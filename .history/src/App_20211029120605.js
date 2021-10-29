
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/shared/Footer/Footer';
import Header from './components/shared/Header/Header';

function App() {
  return (
    <div className="w-full">
      <Router>
        <Header></Header>
        <Switch>

        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
