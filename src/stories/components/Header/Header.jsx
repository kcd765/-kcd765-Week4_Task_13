import React from 'react'
import PropTypes from 'prop-types';
import './header.css'

export const Header = ({backgroundColor, color}) => {
    return (
        <div className="header" style={{backgroundColor, color}}>
            Week 4 Task 13
        </div>
    )
}

Header.propTypes = {
    backgroundColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
};

Header.defaultProps = {
    backgroundColor: "blue",
    color: "yellow"
};