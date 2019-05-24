import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import FoilView from '../dummy/FoilView';
import CustomisationButtons from '../dummy/CustomisationButtons';
import { stylesContainerView, zoomCss } from '../tools/styles/styles';
import ButtonsDefault from '../tools/commons/ButtonsDefault';
class ContainerView extends Component {

    constructor(props) {
        super(props);
        this.state ={
            zoomNum:0.5,
        };
    }

    zoomOut = () => this.setState({ zoomNum: this.state.zoomNum-0.1 })
    zoomIn = () => this.setState({ zoomNum:this.state.zoomNum+0.1 })
    zoomReset = () => this.setState({ zoomNum:0.5 })

    render() {
        const { props:{ classes, textHTML, customisationButtons }, state: { zoomNum },
                zoomOut, zoomIn, zoomReset  } = this;
        const functionsButtonsDefault = { zoomOut, zoomIn, zoomReset };
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
                                        <ButtonsDefault functionsButtonsDefault={functionsButtonsDefault}/>
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
