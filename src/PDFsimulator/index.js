import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContainerView from './containers/ContainerView';

class PDFsimulate extends Component {
    /*
     *Crear la función que me genernere el paginado dependiendo el
     *deprendiendo del tamaño de las etiquetas html
    */
    render() {
        const { children, customisationButtons } = this.props;
        return (
            <ContainerView textHTML = {children} customisationButtons={customisationButtons} />
        );
    }
}

PDFsimulate.propTypes = {
    children:PropTypes.array,
    customisationButtons:PropTypes.array,
};

export default PDFsimulate;
