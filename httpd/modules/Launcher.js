function Launcher(){
    this.text = "Launch";
}

Launcher.prototype.init = function(){
	
	$(document).ready(function(){

		$('.tnb-li.service').click(function(e){
			$('.tnb-li.service').removeClass('active-btn');
			$(this).addClass('active-btn');
			// console.log(123);
			// alert(1);
		});
	});
}

module.exports = Launcher;

