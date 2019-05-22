import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import FoilView from '../dummy/FoilView';
import ButtonContent from '../tools/commons/ButtonContent';
import CustomisationButtons from '../dummy/CustomisationButtons';
import { stylesContainerView, zoomCss } from '../tools/styles/styles';
class ContainerView extends Component {

    constructor(props) {
        super(props);
        this.state ={
            zoomNum:0.5,
        };
    }

    zoomOut = () => {
        const { zoomNum } = this.state;
        this.setState({ zoomNum:zoomNum-0.1 });
    }
    zoomIn = () => {
        const { zoomNum } = this.state;
        this.setState({ zoomNum:zoomNum+0.1 });
    }
    renderAddIcon = () => (<AddIcon/>)
    renderRemoveIcon = () => (<Remove/>)

    render() {
        const { classes, textHTML, customisationButtons } = this.props;        
        const { zoomNum } = this.state;
        const theme = createMuiTheme({
            typography: {
                useNextVariants: true,
              },
            palette: {
              primary: {  main: '#F2F2F2' }, // Purple and green play nicely together.
              secondary: { main: '#F2F2F2' }, // This is just green.A700 as hex.
            },

          });

        return (

            <div className={classes.stylesContainerView}>
                  <Grid fluid>
                   <Row>
                        <Col xs={11} md={11} className={classes.controlMarging}>
                            <div style = {zoomCss(zoomNum)}   >
                                <FoilView textHTML = {textHTML}/>
                            </div>
                        </Col>
                        <Col xs ={1} md={1}>
                            <div className = {classes.buttonContent} >
                            <MuiThemeProvider theme={theme}>
                                    <ButtonContent
                                     Icon = {this.renderAddIcon()}
                                     classStyle = {classes.buttonConmon}
                                     color="primary"
                                     functionPDF = {this.zoomIn}
                                    />
                                    <ButtonContent
                                    color="primary"
                                    functionPDF = {this.zoomOut}
                                    Icon = {this.renderRemoveIcon()}
                                    classStyle = {classes.buttonConmon}
                                    />
                                    <CustomisationButtons  customisation = {customisationButtons} textHTML = {textHTML}/>
                            </MuiThemeProvider>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>

        );
    }
}

ContainerView.propTypes = {
    class:PropTypes.object,
    textHTML:PropTypes.array,
    customisationButtons:PropTypes.array,
};

export default withStyles(stylesContainerView)(ContainerView);
