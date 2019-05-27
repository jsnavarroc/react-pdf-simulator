import React, { Fragment } from 'react';
import ButtonContent from './ButtonContent';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import Fullscreen from '@material-ui/icons/Fullscreen';
import FullscreenExit from '@material-ui/icons/FullscreenExit';
import { stylesContainerView } from '../styles/styles';

const renderAddIcon = () => (<AddIcon/>);
const renderRemoveIcon = () => (<Remove/>);
const renderCrop = (zoomModify) => (zoomModify? <FullscreenExit/> : <Fullscreen/>);

const ButtonsDefault = (props) => {
    const { classes, functionsButtonsDefault:{ zoomReset, zoomIn, zoomOut }, stateZoom:{ zoomNumInitOriginal, zoomNumInit } } = props;
    const zoomModify = zoomNumInitOriginal === zoomNumInit;

    return (
       <Fragment >
            <ButtonContent
            color="primary"
            functionPDF = {zoomReset}
            Icon = {renderCrop(zoomModify)}
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
