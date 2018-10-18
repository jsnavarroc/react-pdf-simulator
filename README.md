

# Flexbox playground 
[![All Contributors](https://img.shields.io/badge/all_contributors-10-orange.svg?style=flat-square)](#contributors)


# How to install yarn

## Install yarn on Windows

There are three options for installing Yarn on Windows, you can fine <a href="https://yarnpkg.com/lang/en/docs/install/#windows-stable" target="_blank">here</a> 

## Install yarn on Debian / Ubuntu

On Debian or Ubuntu Linux, you can install Yarn via our Debian package repository. You will first need to configure the repository

`curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -`
<br/>
`echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list`

Then you can simply:

`sudo apt-get update && sudo apt-get install yarn`


## Install yarn on Mac with Homebrew

You can install Yarn through the Homebrew package manager. This will also install Node.js if it is not already installed.

```
brew install yarn
```


# How to run the app - Available Scripts
In the project directory, you can run:

```
yarn start
```

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

```
yarn test
```

Launches the test runner in the interactive watch mode.

```
yarn build
```

Builds the app for production to the build folder.

```
yarn eject
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
