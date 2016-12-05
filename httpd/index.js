import React from '../node_modules/react';
import ReactDOM from '../node_modules/react-dom';
import OpiosContainer from './components/OpiosContainer';
import Launcher from './modules/Launcher';
import Store from './Store';

var store = new Store();
var data = store.getInitialState();
// console.log(data);

ReactDOM.render(
	<OpiosContainer data={data} />,
  	document.getElementById('container')
)

setTimeout(function(){
	var launcher = new Launcher();
	launcher.init();
}, 2000);


// setTimeout(function(){
// 	console.log('update!');
// 	ReactDOM.render(
// 		<OpiosContainer data={store.getInitialState2()} />,
// 	  	document.getElementById('container')
// 	)
// }, 5000);
