

# Pdf Simulator

# How to run the app - Available Scripts
In the project directory, you can run:

```
yarn start
```

Runs the app in the development mode.
Open http://localhost:3001 to view it in the browser.


Launches the test runner in the interactive watch mode.

```
yarn prepublishOnly
```


Note: this is a one-way operation. Once you eject, you can’t go back!
If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.


#Como instalar el proyecto

Se instala así: 
    
    yarn add react-pdf-simulator

Se carga así: 

    import React from 'react';
    import PDFsimulator from 'react-pdf-simulator';

    const index = () => {
        return (
            <PDFsimulator>
                <h1>¡¡Hola Mundo!!</h1>
                <h2>Coloca todo tu codigo HTML o JSX aquí</h2>  
            </PDFsimulator>
        );
    };

    export default index;

Se verá así:

![alt text](https://image.ibb.co/k9w5y0/5.png)

Los atributos que se pueden modificar son:

Aún sin construir 