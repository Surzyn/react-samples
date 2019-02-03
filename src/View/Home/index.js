import React from 'react';

export default class Home extends React.Component {
    goToBeer = () => {
        this.props.history.push('/beer');
    }

    render() {
        return (
            <section>
                <h2>Home</h2>
                <p>Strona dla prawdziwych alkoholików</p>
                <button onClick={() => this.goToBeer()}>Go to beer</button>
            </section>
        );
    }
}

