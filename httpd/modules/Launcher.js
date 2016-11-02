function Launcher(){
    this.text = "Launch";
}

Launcher.prototype.init = function(){
	
	$(document).ready(function(){

		$('.tnb-li.service').click(function(e){
			$('.tnb-li.service').removeClass('active-btn');
			$(this).addClass('active-btn');

			var service = $(this).children('.tnb-text').text();

			$('.content-block').css('display', 'none');

			switch(service){
				case 'Messenger':
					$('#foo1').css('display', 'inline-flex');
					break;
				case 'Telegram':
					$('#foo2').css('display', 'inline-flex');
					break;
				case 'WhatsApp':
					$('#foo3').css('display', 'inline-flex');
					break;
				case 'Skype':
					$('#foo4').css('display', 'inline-flex');
					break;
				default:
					$('#services-list').css('display', 'block');
					break;
			}
		});
	});
}

module.exports = Launcher;

