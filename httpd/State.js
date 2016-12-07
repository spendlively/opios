const {ipcRenderer} = require('electron');

function State(){}

State.prototype.getInitialState = function(){

	var initialState = ipcRenderer.sendSync('read-opios-state', null);

	if(!initialState){
		initialState = this.getInitialStateTemplate();
	}

	return initialState;
}

State.prototype.getInitialStateTemplate = function(){

	var data = {
		services: [],
		settings: {},
		modalCreate: {},
		modalUpdate: {},
		l12n: {},
		tags: [],
		contextMenu: {}
	};

	return data;	
}

State.prototype.getInitialState2 = function(){

	var data = {
		services: [
			{id: 'foo1', name: 'messenger', text: 'Мессенджер', badges: 1},
			{id: 'foo2', name: 'telegram', text: 'Телеграм', badges: 0},
			{id: 'foo3', name: 'whatsapp', text: 'Ватсап', badges: 4},
			{id: 'foo4', name: 'skype', text: 'Скайп', badges: 0}
		],
		settings: {},
		modalCreate: {
			service: 'vk'
		},
		modalUpdate: {},
		l12n: {},
		tags: [],
		contextMenu: {
			serviceId: '1'	
		}
	};

	return data;
}

export default State;
