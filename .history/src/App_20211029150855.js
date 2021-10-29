
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AllPackages from './components/AllPackages/AllPackages';
import Booking from './components/Booking/Booking';
import Home from './components/Home/Home/Home';
import Packages from './components/Home/Packages/Packages';
import Login from './components/Login/Login/Login';
import MyPackages from './components/MyPackages/MyPackages';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Footer from './components/shared/Footer/Footer';
import Header from './components/shared/Header/Header';

function App() {
  return (
    <div className="w-full">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" >
            <Home></Home>
          </Route>
          <Route path="/home" >
            <Home></Home>
          </Route>
          <PrivateRoute path="/booking" >
            <Booking></Booking>
          </PrivateRoute>
          <Route path="/my-packages" >
            <MyPackages></MyPackages>
          </Route>
          <Route path="/all-packages" >
            <AllPackages></AllPackages>
          </Route>
          <Route path="/login" >
            <Login></Login>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
