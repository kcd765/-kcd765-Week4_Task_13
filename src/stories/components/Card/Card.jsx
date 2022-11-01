import React from 'react'
import './card.css'
import PropTypes from 'prop-types'

export const Card = ({backgroundColor, color, height, fontFamily}) => {
    const style = {
        backgroundColor,
        color,
        height,
        fontFamily
    }

    return (
        <div className="card" style={style}>
            <div className="container">
                <p>This is a card</p>
            </div>
        </div>
    )
}

Card.propTypes = {
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    height: PropTypes.string,
    fontFamily: PropTypes.string
};

Card.defaultProps = {
    backgroundColor: "yellow", 
    color: "black",
    height: "100px",
    fontFamily: "verdana"
};
