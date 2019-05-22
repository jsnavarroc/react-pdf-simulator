import CloudDownload from '@material-ui/icons/CloudDownload';
import React from 'react';
import { renderToString } from 'react-dom/server';
import jsPDF from 'jspdf';
const renderCloudDownload = () => (<CloudDownload/>);

const printPDF = (event) => {
    const string = renderToString(event.textHTML);
    const pdf = new jsPDF();
    pdf.fromHTML(string);
    pdf.save('format');
};

export const CustomisationButtons  = [{
                    icon: renderCloudDownload,
                    functionButton: printPDF,
                    description: 'imprimir',
                }];
