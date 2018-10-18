import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from 'prop-types';

function FloatingActionButtons(props) {
  const { Icon, classStyle, color, functionPDF } = props;

  return (
    <div>
      <Button 
      variant="fab"  
      mini  
      color={color} 
      aria-label="Add"  
      className={classStyle} 
      onClick =  {() => functionPDF? functionPDF():null}
      >
        {Icon}
      </Button>
    </div>
  );
}

FloatingActionButtons.propTypes = {
  classStyle: PropTypes.string.isRequired,
  color:PropTypes.string,
  functionPDF:PropTypes.func,
};

export default FloatingActionButtons;
