import React from 'react'
import { connect } from "react-redux";

import './loading.css';

function Loading(props) {
    if (!props.isLoading) {
        return null;
    }

    return (
        <div id="loading">
            <img src="https://i.imgur.com/pKV7YwY.gif" alt="loading" />
            <strong>Loading...</strong>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
    };
};


export default connect(mapStateToProps)(Loading);