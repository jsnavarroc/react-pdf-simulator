import React from 'react';
import Texto from './Texto';
import { withStyles } from '@material-ui/core/styles';
import { stylesDataView } from '../tools/styles/styles';
import PropTypes from 'prop-types';

const FoilView = ({ classes, textHTML, stlyleCustomContent } ) => {
        return (
            <div className={classes.marginText}>
                <div className={classes.stylesText}>
                    <Texto textHTML = {textHTML} stlyleCustomContent={stlyleCustomContent}/>
                </div>
            </div>
        );
};
Texto.propTypes = {
    textHTML:PropTypes.object,
};
export default withStyles(stylesDataView)(FoilView);

