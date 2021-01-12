# Demo of packaging a React component and importing it into a React app


Packaging up a React component from one project and consuming it in another is suprisingly difficult.
If you try it, chances are you will encounter the following error:
```
Uncaught Error: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons: 
1. You might have mismatching versions of React and the renderer (such as React DOM) 
2. You might be breaking the Rules of Hooks 
3. You might have more than one copy of React in the same app 
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.
```

This project demonstrates how to solve it. Details of the solution are below.



## Setup
Run the following
```
cd packages/example-component
npm install
cd ../example-app
npm install
```



## Run
Run the following
```
cd packages/example-component
npm run build-prod
cd ../example-app
npm start
```
Open your browser to http://localhost:8080/



## The solution

Look at the git commit history to clearly see the differences and details of the solution.

The site https://createapp.dev/ was used to generate 2 new React + Webpack projects. This is a great site to generate new projects. They are much simpler than create-react-app, making it ideal for this demo. I chose a bunch of options that I like: 
- Webpack
- React
- Babel and Typescript
- Jest
- CSS, CSS modules, and LESS
- SVGs and PNGs
- Prettier
- MiniCssExtractPlugin, CopyWebpackPlugin, CleanWebpackPlugin
- React hot loader

Then a minimal amount of changes were applied to make it work. (Again see git commit history.)

Most important pieces
- Changes to both webpack.config.js files:
  - **Component:** the component needs to intentionally exclude React and ReactDOM, so there will only be one copy of each in the final app. This is done with the webpack "externals" option.
  - **App:** the app needs to provide React to the compnent. This is done with the webpack "alias" option.
- Changes to both package.json files:
  - **Component:** its package.json changes React and ReactDOM from "dependencies" to "peerDependencies" and "devDependencies". This tells App it must provide them but also means they are installed in Component so it can be built.
  - **App:** its packages.json lists example-component as a dependency. There are several ways to do this (e.g. npm link, Lerna, Rush), but I opted for the simplest solution for the sake of the demo.



## Additional Resources

The following links were useful to me as I was figuring this out.
- https://itnext.io/how-to-package-your-react-component-for-distribution-via-npm-d32d4bf71b4f
- https://stackoverflow.com/questions/56021112/react-hooks-in-react-library-giving-invalid-hook-call-error
- https://dev.to/iggredible/what-the-heck-are-cjs-amd-umd-and-esm-ikm
- https://flaviocopes.com/npm-peer-dependencies/
- https://www.twilio.com/blog/release-custom-react-component-hook-effect-npm-package
