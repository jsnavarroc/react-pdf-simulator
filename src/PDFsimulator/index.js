import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContainerView from './containers/ContainerView';

class PDFsimulate extends Component {
    /*
     *Crear la función que me genernere el paginado dependiendo el
     *deprendiendo del tamaño de las etiquetas html
    */
    render() {
        const { children, customisationButtons, customisationViewpoint } = this.props;
        const customisationButtonsOk = customisationButtons||[];
        const customisationViewpointOk = customisationViewpoint||{};
        return (
            <ContainerView
                textHTML = {children}
                customisationButtons={customisationButtonsOk}
                customisationViewpoint={customisationViewpointOk}
            />
        );
    }
}

PDFsimulate.propTypes = {
    children:PropTypes.object,
    customisationButtons:PropTypes.array,
    customisationViewpoint:PropTypes.object,
};

export default PDFsimulate;
