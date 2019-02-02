import React from 'react';
import ReactDOM from 'react-dom';

import Beer from './Beer';


const App = () => {
    return (
        <article>
            <h1>Beers</h1>
            <Beer />
        </article>
    );
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById('app')
);