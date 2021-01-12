
import * as React from 'react';
import { useEffect } from 'react';
import { hot } from "react-hot-loader/root";

import ExampleComponent from 'example-component/src';
import 'example-component/dist/main.css';

const ExampleApp = () => {
  useEffect(() => {
    console.log('Hooks are working app');
  }, []);

  return (
    <div className="app">
      <h1>App</h1>
      <ExampleComponent />

      <p>
        Demo of packaging a React component and importing it into a React app. 
        Both use hooks, but React does not throw the following error:
      </p>
      <pre>
        Uncaught Error: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons: <br />
        1. You might have mismatching versions of React and the renderer (such as React DOM) <br />
        2. You might be breaking the Rules of Hooks <br />
        3. You might have more than one copy of React in the same app <br />
        See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.
      </pre>
      <p>
        See README.md for details on the solution.
      </p>
    </div>
  );
}

export default hot(ExampleApp);
