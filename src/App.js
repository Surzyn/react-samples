import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Loading from "./components/loading";
import Beer from './View/Beer';
import Home from './View/Home';
import Vodka from './View/Vodka';

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/Beer">Beer</Link>
                        </li>
                        <li>
                            <Link to="/Vodka/Tadeusz">Vodka</Link>
                        </li>
                    </ul>
                </nav>
                <Loading />
                <Route exact path="/" component={Home} />
                <Route exact path="/Beer" component={Beer} />
                <Route exact path="/Vodka/:name" component={Vodka} />
            </div>
        </Router>
    );
};

export default App;