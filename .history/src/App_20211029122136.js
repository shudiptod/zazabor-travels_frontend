
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import Packages from './components/Home/Packages/Packages';
import Footer from './components/shared/Footer/Footer';
import Header from './components/shared/Header/Header';

function App() {
  return (
    <div className="w-full">
      <Router>
        <Header></Header>
        <Switch>
          <Route to='/' >
            <Home></Home>
          </Route>
          <Route exact to='/home' >
            <Home></Home>
          </Route>
          <Route to='/packages' >
            <Packages></Packages>
          </Route>
          <Route to='/my-packages' >
            <Packages></Packages>
          </Route>
          <Route to='/all-packages' >
            <Packages></Packages>
          </Route>
          <Route to='/login' >
            <Packages></Packages>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
