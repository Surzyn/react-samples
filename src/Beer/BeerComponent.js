import React from 'react';

const BeerComment = (props) => {
    return (
        <label>
            {props.comment} by ${props.author}
        </label>
    );
};

export default BeerComment;