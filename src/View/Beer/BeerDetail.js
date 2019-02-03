import React from 'react';

const BeerDetail = ({ beer }) => {
    return (
        <div className="item">
            <div><strong>name:</strong> <span>{beer.name}</span></div>
            <div><strong>IBU:</strong> <span>{beer.IBU}</span></div>
            <div><img src={beer.imgSrc} alt="beer" /></div>
        </div>
    );
};

export default BeerDetail;