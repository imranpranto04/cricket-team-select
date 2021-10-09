import React from 'react';
import './Player.css';

const Player = (props) => {
    const {name, country, price, position,image} = props.player
    const handleClick = props.handleClick;
    // console.log(props);
    return (
        <div className="player-box">
            <img style={{height: '200px', width: '200px'}} src={image} alt="" />
            <h2 className="text-warning">{name}</h2>
            <div className="text-white">
                <h5>{position}</h5>
                <h6>{country}</h6>
                <p className="text-info"><small>${price}</small></p>
            </div>
            <button onClick={()=> handleClick(props.player)} className="btn btn-danger button">Select Player</button>
        </div>
    );
};

export default Player;