import React from 'react';

import BeerComment from './BeerComponent';

const Beer = () => {

    return (
        <section>
            <h2>Beer</h2>
            <h4>Pinta</h4>
            <span>Rate 6</span>
            <div>
                <BeerComment comment="The best ale" author="Batman" />
                <BeerComment comment="Nice label" author="Robin" />
            </div>
        </section>
    );
};

export default Beer;