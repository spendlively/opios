var config = require('./config');

var localization = {

	getCurrentLang: function(){

		// return 'ru-RU';
		return config.get('language');
	},

	data: {},

	components: {},

	// registerComponent: function(name, cls){

	// 	var me = this;

	// 	if(cls){
	// 		me.components[name] = cls;
	// 	}
	// },

	getData: function(name){

		if(name){
			return this.data[name];
		}

		return this.data;
	},

	getLanguages: function(){

		var config = require('electron').remote.getGlobal('config'),
		    ipcRenderer = require('electron').ipcRenderer;  

	    return config.languages;
	},

	loadLang: function(lang){

		var me = this,
			lang = lang || me.getCurrentLang();

		$.ajax({
		  	url: 'data/localization/' + lang + '.json',
		  	success: function(data){
		  		var obj = null;
				if(obj = JSON.parse(data)){
					me.data = obj;
					me.updateStates(obj);
				}
		  	},
		  	error: function(xhr, status, err){

		  	}
		});
	},

	updateStates: function(data){

		var me = this,
			cmp = null,
			components = app.componentsObserver.getComponents();

		for(var c in components){
			cmp = components[c];
			if(typeof data[c] !== 'undefined'){
				cmp.setState(data[c]);
			}
		}
	}
};

$.ajax({
  	url: 'data/localization/' + localization.getCurrentLang() + '.json',
  	success: function(data){
		localization.data = JSON.parse(data) || {};
  	},
  	error: function(xhr, status, err){
		console.log("Ошибка загрузки файла локализации");
  	}
});

// window.localization = localization;
module.exports = localization;