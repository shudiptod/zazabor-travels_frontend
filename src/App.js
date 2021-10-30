
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AddPackage from './components/AddPackage/AddPackage';
import AllBookings from './components/AllBookings/AllBookings';
import Booking from './components/Booking/Booking';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import MyBookings from './components/MyBookings/MyBookings';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Footer from './components/shared/Footer/Footer';
import Header from './components/shared/Header/Header';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="w-full">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/" >
              <Home></Home>
            </Route>
            <Route path="/home" >
              <Home></Home>
            </Route>
            <PrivateRoute path="/booking/:packageId" >
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/myBookings" >
              <MyBookings></MyBookings>
            </PrivateRoute>
            <PrivateRoute path="/allBookings" >
              <AllBookings></AllBookings>
            </PrivateRoute>
            <PrivateRoute path="/add-package" >
              <AddPackage></AddPackage>
            </PrivateRoute>
            <Route path="/login" >
              <Login></Login>
            </Route>
            <Route path="*" >
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
