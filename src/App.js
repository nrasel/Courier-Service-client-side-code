import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import OrderPlace from './components/OrderPlace/OrderPlace';
import ManageOrders from './components/ManageOrders/ManageOrders';
import MyOrders from './components/MyOrders/MyOrders';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddService from './components/AddService/AddService';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/services">
              <Services />
            </Route>
            <PrivateRoute exact path="/manageOrders">
              <ManageOrders />
            </PrivateRoute>
            <PrivateRoute exact path="/myOrders">
              <MyOrders />
            </PrivateRoute>
            <PrivateRoute exact path="/addService">
              <AddService />
            </PrivateRoute>
            <PrivateRoute exact path="/orderPlace/:id">
              <OrderPlace />
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
