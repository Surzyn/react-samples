import React from 'react';
import { connect } from "react-redux";
import './beer.css'

import { getBeers } from "../../services/beer-service";
import BeerDetail from './BeerDetail';

class Beers extends React.Component {
    componentDidMount() {
        this.props.getBeers();
    }

    render() {
        if (!this.props.beers) {
            return <span>No beers :(</span>;
        }

        var beerList = this.props.beers.map((beer, index) => <BeerDetail key={index} beer={beer} />)
        return (
            <section className="beers-container">
                {beerList}
            </section>
        );
    }
};

const mapStateToProps = state => {
    return { beers: state.beers, };
};

const mapDispatchToProps = dispatch => ({
    getBeers: () => dispatch(getBeers())
})

export default connect(mapStateToProps, mapDispatchToProps)(Beers);
