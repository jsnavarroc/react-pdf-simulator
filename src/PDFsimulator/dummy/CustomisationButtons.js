import React from 'react';
import ButtonContent from '../tools/commons/ButtonContent';
import { stylesContainerView } from '../tools/styles/styles';
import { withStyles } from '@material-ui/core/styles';

const CustomisationButtons = (props) => {
    const { classes, customisation, textHTML } = props;
    if(customisation) {
        return  customisation.map((button) => (
              <ButtonContent
              key={button.description}
              color="primary"
              functionPDF = {(e) => {
                button.functionButton?
                button.functionButton.map((fun) => {
                  return fun? fun(e):null;
                })
                :null;
                }}
              Icon = {button.icon()}
              classStyle = {classes.buttonConmon}
              textHTML={textHTML}
              />
          ));
      }
};

export default withStyles(stylesContainerView)(CustomisationButtons);
