import './App.css';
import Header from './components/Header2/Header2';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";


import Home from './components/Home/Home';
import { Switch } from '@material-ui/core';
import Faysal from './components/Faysal/Faysal';



function App() {

  return (
    <div>
    <Header></Header>

    
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/faysal">
            <Faysal></Faysal>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}




export default App;
