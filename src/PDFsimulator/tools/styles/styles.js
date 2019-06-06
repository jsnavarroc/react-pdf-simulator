
 const stylesContainerViewEdit =  {
  backgroundColor: '#525659',
  width:'68.14404432132964vh',
  height: '88vh',
 };

 const styButtonContentDefault =  {
  marginTop: '5vh', /* Se edita altura de botones */
 };
export const stylesContainerView = (customisationViewpoint ) => {

const stylesContainer = customisationViewpoint.stylesContainerView? customisationViewpoint.stylesContainerView : stylesContainerViewEdit;
const styButtonContent = customisationViewpoint.buttonContent? customisationViewpoint.buttonContent : styButtonContentDefault;
return (
{
          stylesContainerView: {
              backgroundColor: stylesContainer.backgroundColor ||  '#525659',
              width:stylesContainer.width ||  '68.14404432132964vh',
              height: stylesContainer.height || '88vh',
              // maxHeight:'88vh',
              // minHeight:'88vh',
              // maxWidth:'818px',
              // minWidth:'492px',
              margin: '8px',
              justifyContent: 'center',
              // alignItems: 'center',
              overflow: 'auto',
              // resize: 'both',
              display: 'block',
              alignItems: 'flex-start',
              WebkitBoxShadow: '0px 2px 20px -2px rgba(0,0,0,0.58)',
              MozBoxShadow: '0px 2px 20px -2px rgba(0,0,0,0.58)',
              BoxShadow: '0px 2px 20px -2px rgba(0,0,0,0.58)',
              BorderRadius: '20px',
          },
          zoom:{
            zoom: '1',
          },
          controlMarging: {
            height: '20px',
          },
          // Styles button
          buttonConmon: {
            marginBottom:'20px',
          },
          buttonContent:{
            marginTop: styButtonContent.marginTop ||'5vh', /* Se edita altura de botones */
            marginBottom: '10vh',
            position: 'fixed',
            marginLeft: '-7px',
          },
          extendedIcon: {
            marginRight: '8px',
          },
          sidebar: {
            position: 'sticky',
            top: '15px',
          },

  });
};
        //  Este es el css de la hoja
        export const stylesDataView = (  ) => ({
          marginText : {
            /*  Contenido  */
            backgroundColor: 'white',
            /*  Tamaño  */
            margin:'-30px 0 30 0',
            marginBottom:'2vh',
            minWidth:'818px',
            maxWidth:'818px',
            height: '146.1218836565097vh',
            maxHeight: '1054px',
            minHeight: '1054px',
            // maxHeight: '146.1218836565097vh',
            // /* Forma  */
            // display: 'static',
            // position: 'relative',
            // Shadow
            WebkitBoxShadow: '1px 1px 11px 1px rgba(0,0,0,0.66)',
            MozBoxShadow: '1px 1px 11px 1px rgba(0,0,0,0.66)',
            BoxShadow: '1px 1px 11px 1px rgba(0,0,0,0.66)',
            overflow: 'hidden',

          },
          stylesText : {
            /*  Contenido  */
            backgroundColor: 'white',
            /*  Tamaño  */
            marginTop:'39px',
            marginRight:'auto',
            marginBottom:'7.5vh',
            marginLeft:'auto',
            minWidth:'818px',
            maxWidth:'818px',
            height: '90%',
            maxHeight: '90%', //Esto es el alto maximo de la pagina
            // /* Forma  */
            // position: 'relative',
            // Shadow
            overflow: 'hidden',

          },
        });

export const zoomCss = (num) => (
  {
    // zoom: `${num}`,
    transform: `scale(${num})`,
    margin:'59px auto',
    /* Posicionamiento al momento de transformar */
    WebkitTransformOrigin: '0% 0',
    MozTransformOrigin: '0 0',
    TransformOrigin: '0 0',
  }
);

export const contentTextContent = (customisationViewpoint) => {
  const { styleContent } = customisationViewpoint;
  const styleContentDefault = {
    display: 'block',
    fontFamily: 'Helvetica, sans-serif',
    textAlign:'justify',
    overflow: 'hidden',
  };
  return styleContent ? {
    ...styleContentDefault,
    ...styleContent,
  }:styleContentDefault;
};
