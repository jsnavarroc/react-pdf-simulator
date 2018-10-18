import React from 'react';
import Texto from './Texto';
import { withStyles } from '@material-ui/core/styles';
import { stylesDataView } from '../tools/styles/styles';
import PropTypes from 'prop-types';

const FoilView = ({ classes, textHTML } ) => {
        return (
            <div className={classes.marginText}>
                <div className={classes.stylesText}>
                    <Texto textHTML = {textHTML}/>
                </div>
            </div>         
        );
}
Texto.propTypes = {
    textHTML:PropTypes.array,    
};
export default withStyles(stylesDataView)(FoilView);

