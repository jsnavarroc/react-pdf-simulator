import React from 'react';
import Fab from '@material-ui/core/Fab';
import PropTypes from 'prop-types';

function FloatingActionButtons(props) {
  const { Icon, classStyle, color, functionPDF, textHTML, disabled } = props;

  return (
    <div>
      <Fab
      size={'small'}
      color={color || 'primary'}
      disabled={disabled || false}
      aria-label="Add"
      className={classStyle}
      onClick =  {(event) => functionPDF? functionPDF({ ...event, textHTML }):null}
      >
        {Icon}
      </Fab>
    </div>
  );
}

FloatingActionButtons.propTypes = {
  classStyle: PropTypes.string.isRequired,
  disabled:PropTypes.bool,
  color:PropTypes.string,
  functionPDF:PropTypes.func,
};

export default FloatingActionButtons;
