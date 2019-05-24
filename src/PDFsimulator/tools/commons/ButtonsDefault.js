import React, { Fragment } from 'react';
import ButtonContent from './ButtonContent';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import Crop from '@material-ui/icons/CropFree';
import { stylesContainerView } from '../styles/styles';

const renderAddIcon = () => (<AddIcon/>);
const renderRemoveIcon = () => (<Remove/>);
const renderCrop = () => (<Crop/>);

const ButtonsDefault = (props) => {
    const { classes, functionsButtonsDefault:{ zoomReset, zoomIn, zoomOut } } = props;
    return (
       <Fragment >
            <ButtonContent
            color="primary"
            functionPDF = {zoomReset}
            Icon = {renderCrop()}
            classStyle = {classes.buttonConmon}
            />
            <ButtonContent
            Icon = {renderAddIcon()}
            classStyle = {classes.buttonConmon}
            color="primary"
            functionPDF = {zoomIn}
            />
            <ButtonContent
            color="primary"
            functionPDF = {zoomOut}
            Icon = {renderRemoveIcon()}
            classStyle = {classes.buttonConmon}
            />
       </Fragment >
    );
};

export default withStyles(stylesContainerView)(ButtonsDefault);
