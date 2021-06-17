import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "./Navbar.css";

export default function Navbar(props) {
    return (
      
        <Router>
            <div className="navbar">

                <div>
                    <Link to="/">HOME</Link>
                </div>

                <div className="nav-links">
                    <div>
                        <Link to="/fetch">Repositories</Link>
                    </div>
                    <div>
                        <Link to="/counter">Codes Samples</Link>
                    </div>
                    <div>
                        <a href="https://yilmazme.github.io" target="#">Old Site</a>
                    </div>
                    <div>
                        <Link to="/contact">Contact</Link>
                    </div>
                </div>

            </div>
            <Switch>
                <Route path="/fetch">
                    fetch
                </Route>
                <Route path="/counter">
                    counter
                </Route>
                <Route path="/coun">
                    Old Site
                </Route>
            </Switch>

        </Router>
   
    );
  }
  