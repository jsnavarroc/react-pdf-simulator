import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import FoilView from '../dummy/FoilView';
import CustomisationButtons from '../dummy/CustomisationButtons';
import { stylesContainerView, zoomCss, contentTextContent } from '../tools/styles/styles';
import ButtonsDefault from '../tools/commons/ButtonsDefault';
class ContainerView extends Component {

    constructor(props) {
        const { customisationViewpoint } = props;
        const zoomNum  = customisationViewpoint.zoomDefault? customisationViewpoint.zoomDefault.zoomNumInit:0.5;
        super(props);
        this.state ={
            zoomNumInitOriginal:zoomNum,
            zoomNumInit:zoomNum,
        };
    }

    zoomOut = () => {
        const { zoomNumInit } = this.state;
        (zoomNumInit - 0.1)>=0.1? this.setState({ zoomNumInit: zoomNumInit-0.1 }) :this.setState({ zoomNumInit: 0.1 });
    }
    zoomIn = () => this.setState({ zoomNumInit:this.state.zoomNumInit+0.1 })
    zoomReset = () => this.setState({ zoomNumInit:this.state.zoomNumInitOriginal })

    render() {
        const { props:{ classes, textHTML, customisationButtons, customisationViewpoint }, state: { zoomNumInit, zoomNumInitOriginal },
                zoomOut, zoomIn, zoomReset  } = this;
        const functionsButtonsDefault = { zoomOut, zoomIn, zoomReset };
        const stateZoom = { zoomNumInitOriginal, zoomNumInit };
        const theme = createMuiTheme({
            typography: {
                useNextVariants: true,
              },
            palette: {
              primary: {  main: '#F2F2F2' },
              secondary: { main: '#F2F2F2' },
            },

          });

        return (

            <div style = {stylesContainerView(customisationViewpoint).stylesContainerView}>
                  <Grid fluid>
                   <Row>
                        <Col xs={11} md={11} className={classes.controlMarging}>
                            <div style = {zoomCss(zoomNumInit)}   >
                                <FoilView textHTML = {textHTML} stlyleCustomContent={contentTextContent(customisationViewpoint)}/>
                            </div>
                        </Col>
                        <Col xs ={1} md={1}>
                            <div style = {stylesContainerView(customisationViewpoint).buttonContent} >
                                <MuiThemeProvider theme={theme}>
                                        <ButtonsDefault functionsButtonsDefault={functionsButtonsDefault} stateZoom = {stateZoom}/>
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
    textHTML:PropTypes.object,
    customisationButtons:PropTypes.array,
    customisationViewpoint:PropTypes.object,
};

export default withStyles(stylesContainerView)(ContainerView);
