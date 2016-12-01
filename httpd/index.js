// var Launcher = require("./modules/Launcher");
// var OpiosContainer = require("./components/OpiosContainer");

// var launcher = new Launcher();
// launcher.init();

// var React = require("../node_modules/react");
import React from '../node_modules/react';
import ReactDOM from '../node_modules/react-dom';
import OpiosContainer from './components/OpiosContainer';
import Launcher from './modules/Launcher';

ReactDOM.render(
	<OpiosContainer />,
  	document.getElementById('container')
)

setTimeout(function(){
	var launcher = new Launcher();
	launcher.init();
}, 2000);
