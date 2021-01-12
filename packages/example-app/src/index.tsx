import * as React from 'react';
import * as ReactDOM from "react-dom";

import ExampleApp from './example-app';
import "./styles.less";

var mountNode = document.getElementById("app");
ReactDOM.render(<ExampleApp />, mountNode);
