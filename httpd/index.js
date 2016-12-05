import React from '../node_modules/react';
import ReactDOM from '../node_modules/react-dom';
import OpiosContainer from './components/OpiosContainer';
import Launcher from './modules/Launcher';
import store from './store/Store';

store.subscribe(function(){
	ReactDOM.render(
		<OpiosContainer data={store.getState()} store={store} />,
	  	document.getElementById('container')
	)
});

ReactDOM.render(
	<OpiosContainer data={store.getState()} store={store} />,
  	document.getElementById('container')
)

setTimeout(function(){
	var launcher = new Launcher();
	launcher.init();
}, 2000);



// setTimeout(function(){
// 	store.dispatch({
// 	    type: 'TEST',
// 	    payload: {name: 'Ivan'}
// 	});
// }, 5000);
