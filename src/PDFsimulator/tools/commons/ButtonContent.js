import React from 'react';
import Fab from '@material-ui/core/Fab';
import PropTypes from 'prop-types';

function FloatingActionButtons(props) {
  const { Icon, classStyle, color, functionPDF, textHTML } = props;

  return (
    <div>
      <Fab
      size={'small'}
      color={color}
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
  color:PropTypes.string,
  functionPDF:PropTypes.func,
};

export default FloatingActionButtons;
