import SmartResizer from './SmartResizer';

var resizer = new SmartResizer();

function Launcher(){}

Launcher.prototype.init = function(){
	
	
	$(document).ready(function(){


		//Открывание модального окна блокировки
		$('#opios-phone').click(function(){
			$('#codeModal').modal();
		});

		//Открывание модального окна добавления сервиса
		$('.service-img-container').click(function(){
			$('#addServiceModal').modal();
		});

		//Открывание модального окна настроек
		$('#opios-right-logo').click(function(){
			$('#settingsModal').modal();
		});

		//Контекстное меню сервиса
		var $contextMenu = $("#contextMenu");
		$("body").on("contextmenu", ".tnb-li-a", function(e) {
			$contextMenu.css({
				display: "block",
				left: e.pageX,
				top: e.pageY
			});
			return false;
		});
		// $contextMenu.on("click", "a", function() {
		$('body').click(function() {
			$contextMenu.hide();
		});

		resizer.resize();

		$('.tnb-li.service').click(function(e){
			$('.tnb-li.service').removeClass('active-btn');
			$(this).addClass('active-btn');

			var service = $(this).children('.tnb-text').text();

			$('.content-block.opios-webview').css('visibility', 'hidden').css('position', 'absolute').css('top', '0px');
			$('#services-list').css('display', 'none');

			switch(service){
				case 'Messenger':
					$('#foo1').css('position', 'inherit').css('visibility', 'visible');
					break;
				case 'Telegram':
					$('#foo2').css('position', 'inherit').css('visibility', 'visible');
					break;
				case 'WhatsApp':
					$('#foo3').css('position', 'inherit').css('visibility', 'visible');
					break;
				case 'Skype':
					$('#foo4').css('position', 'inherit').css('visibility', 'visible');
					break;
				default:
					$('#services-list').css('display', 'block');
					break;
			}

			resizer.resize();
		});
	});

	$(window).on('resize', function(e){

		resizer.resize();
	});
}

module.exports = Launcher;
