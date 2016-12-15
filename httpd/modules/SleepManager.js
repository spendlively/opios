const period = 20000;
var timer = null;


function SleepManager(){}


SleepManager.prototype.init = function(){

	var me = this;

	window.onblur = function(){
		me.start();
	}

	window.onfocus = function(){
		me.stop();
	}

	this.start();
}


SleepManager.prototype.start = function(){

	var me = this;

    timer = setTimeout(function(){

		me.disable();
	}, period);

}


SleepManager.prototype.stop = function(){

	clearTimeout(timer);
}


SleepManager.prototype.disable = function(){

	//Открывание модального окна блокировки
	$('#codeModal').modal({
		backdrop: 'static',
		keyboard: true
	});
}

export default SleepManager;
