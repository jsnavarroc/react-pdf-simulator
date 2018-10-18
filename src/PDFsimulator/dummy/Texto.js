import React from 'react';
import PropTypes from 'prop-types';

const Texto = ({textHTML})  => {

    
    const divStyles = {
        display: 'block',
        padding:'20px',
        fontFamily: 'Helvetica, sans-serif',
        textAlign:'justify',
        overflow: 'hidden',
    }
    
    return (
        <div style = {divStyles} >
         {textHTML}
        </div>
    );
};



Texto.propTypes = {
    textHTML:PropTypes.array,    
};

export default Texto; 
