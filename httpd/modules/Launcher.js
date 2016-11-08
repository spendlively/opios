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
					correctSize('foo1');
					break;
				case 'Telegram':
					$('#foo2').css('display', 'inline-flex');
					correctSize('foo2');
					break;
				case 'WhatsApp':
					$('#foo3').css('display', 'inline-flex');
					correctSize('foo3');
					break;
				case 'Skype':
					$('#foo4').css('display', 'inline-flex');
					correctSize('foo4');
					break;
				default:
					$('#services-list').css('display', 'block');
					resize();
					break;
			}
		});
	});



	$(window).on('resize', function(e){

		resize();
	});
}

function correctSize(id){

	var wv = document.getElementById(id);
    setTimeout(function(){
        if(wv.style.height === '99%'){
            wv.style.height = '98%';
        }
        else{
            wv.style.height = '99%';
        }
    }, 500);		
}

function resize(){
  	var win = $(window),
  		width = win.width(),
  		height = win.height();
  	
  	$('.opios-webview').css('height', height - 100 + 'px').css('width', '100%');	
}

module.exports = Launcher;

	