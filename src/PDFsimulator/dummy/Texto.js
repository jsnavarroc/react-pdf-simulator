import React from 'react';
import PropTypes from 'prop-types';

const Texto = ({ textHTML, stlyleCustomContent })  => {
    return (
        <div style = {stlyleCustomContent} >
         {textHTML}
        </div>
    );
};

Texto.propTypes = {
    textHTML:PropTypes.array,
};

export default Texto;
