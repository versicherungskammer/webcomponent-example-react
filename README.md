# webcomponent-example-react

Install React-CLI:

	npm install -g create-react-app

Create project:

	create-react-app ...XXX...

Install dependencies:

	npm install @material-ui/core
	npm install @material-ui/icons

	(for Web Component)
	npm install react-custom-element webcomponents.js

Register App:
	
	create App.js and make your app with Material-UI
	import App.js in index.js and register your component via:
		
		registerCustomElement(App, "app")

	go into public and add your component to index.html and add:

		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
		<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">


Reference to: 

https://github.com/bspaulding/react-custom-element

https://github.com/alessandrokonrad/React-Web-Component---Material-Design

https://www.innoq.com/de/articles/2019/02/web-components/





Available Scripts

In the project directory, you can run:

	npm start
	
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.
The page will reload if you make edits.
You will also see any lint errors in the console.



	npm test
	
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.



	npm run build
	
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.
 













