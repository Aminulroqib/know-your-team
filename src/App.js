import './App.css';
import Detail from './components/Detail/Detail';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/info/:idTeam">
              <Detail />
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </Router>


    </div>
  );
}

export default App;
