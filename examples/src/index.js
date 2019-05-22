import React from 'react';
import { render } from 'react-dom';
import PDFsimulator from '../../src/index';
import { CustomisationButtons } from './CustomisationButtons';
const App = () => (
    <PDFsimulator
    customisationButtons={CustomisationButtons}
    >
        <h1>¡¡Hola Mundo!!</h1>
        <h2>Coloca todo tu codigo HTML o JSX aquí</h2>
    </PDFsimulator>
);
render(<App />, document.getElementById('root'));
