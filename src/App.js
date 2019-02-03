import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Beer from './Beer';
import Home from './Home';
import Vodka from './Vodka';

const App = () => {
    return (
        <Router>
            <div>
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
                <Route exact path="/" component={Home} />
                <Route exact path="/Beer" component={Beer} />
                <Route exact path="/Vodka/:name" component={Vodka} />
            </div>
        </Router>
    );
};

export default App;