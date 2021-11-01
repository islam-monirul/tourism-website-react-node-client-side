import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Common/Header";
import Home from "./Components/Pages/Home";
import Login from "./Components/Pages/Login/Login/Login";
import PrivateRoute from "./Components/Pages/Login/PrivateRoute/PrivateRoute";
import NotFound from "./Components/Pages/NotFound";
import AuthProvider from "./Context/AuthProvider";
import MyOrders from "./Components/Pages/MyOrders";
import ManageAllOrders from "./Components/Pages/ManageAllOrders";
import AddNewTourPack from "./Components/Pages/AddNewTourPack";
import PlaceOrder from "./Components/Pages/PlaceOrder";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute path="/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/manageallorders">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            <PrivateRoute path="/addnewtourpack">
              <AddNewTourPack></AddNewTourPack>
            </PrivateRoute>
            <PrivateRoute path="/placeOrder/:tourId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
