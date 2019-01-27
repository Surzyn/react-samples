const BeerComment = (props) => {
    return React.createElement('label', {}, `${props.comment} by ${props.author}`);
}

const Beer = () => {
    return React.createElement('section', {}, [
        React.createElement('h4', {}, 'Pinta'),
        React.createElement('span', {}, 'Rate: ' + 6),
        React.createElement('div', {}, [
            React.createElement(BeerComment, { comment: 'The best ale', author: 'Batman' }),
            React.createElement(BeerComment, { comment: 'Nice label', author: 'Robin' })
        ]),
    ]);
}

const App = () => {
    return React.createElement('article', {}, [
        React.createElement('h1', {}, 'Beers'),
        React.createElement(Beer)
    ]);
}

ReactDOM.render(
    React.createElement(App),
    document.getElementById('app')
);