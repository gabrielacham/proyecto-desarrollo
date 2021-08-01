import React from "react";
import { Route, Switch, Redirect, Router } from "react-router-dom";
import Login from './views/Login';
import Admin from './views/Admin';
import Estadisticas from './views/Estadisticas';
import Docentes from './views/Docentes';
import Delegados from './views/Delegados';
// import NotFound from './views/NotFound';
// import Authorization from './Authorization';
import { history } from './helpers';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {

  render(){
    return(
      <Router history={history} forceRefresh={true}>
        <div>
          <Switch>
            <Route
              path="/admin"
              component={Admin}
              exact
            />
            <Route
              path="/estadisticas"
              component={Estadisticas}
              exact
            />
            <Route
              path="/docentes"
              component={Docentes}
              exact
            />
            <Route
              path="/delegados"
              component={Delegados}
              exact
            />
            <Route
              path="/login"
              component={Login}
              exact
            />
            <Redirect from="/" to="/login" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
