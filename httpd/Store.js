function Store(){}

Store.prototype.getInitialState = function(){

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

Store.prototype.getInitialState2 = function(){

	var data = {
		services: [
			{id: 'foo5', name: 'vk', text: 'Вконтакте', badges: 1},
			{id: 'foo6', name: 'slack', text: 'Слак', badges: 0}
		],
		settings: {},
		modalCreate: {},
		modalUpdate: {},
		l12n: {},
		tags: []
	};

	return data;
}

export default Store;
