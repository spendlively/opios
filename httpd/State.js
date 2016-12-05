function State(){}

State.prototype.getInitialState = function(){

	var data = {
		services: [
			{id: 'foo1', name: 'messenger', text: 'Messenger!', badges: 1},
			{id: 'foo2', name: 'telegram', text: 'Telegram!', badges: 0},
			{id: 'foo3', name: 'whatsapp', text: 'WhatsApp!', badges: 4}
		],
		settings: {},
		modalCreate: {},
		modalUpdate: {},
		l12n: {},
		tags: []
	};

	return data;
}

State.prototype.getInitialState2 = function(){

	var data = {
		services: [
			{id: 'foo1', name: 'messenger', text: 'Messenger!', badges: 1},
			{id: 'foo2', name: 'telegram', text: 'Telegram!', badges: 0},
			{id: 'foo3', name: 'whatsapp', text: 'WhatsApp!', badges: 4},
			{id: 'foo4', name: 'skype', text: 'Skype1', badges: 0}
		],
		settings: {},
		modalCreate: {},
		modalUpdate: {},
		l12n: {},
		tags: []
	};

	return data;
}

export default State;
