function Launcher(){
    this.text = "Launch";
}

Launcher.prototype.init = function(){
	
	
	$(document).ready(function(){

		smartResize();

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
			smartResize();
		});
	});

	$(window).on('resize', function(e){

		smartResize();
	});
}

function smartResize(){

	var b = document.body,
		bStyle = b.currentStyle || window.getComputedStyle(b),
		bHeight = parseInt(bStyle.height),

		article = document.getElementById("main-article"),
		articleStyle = article.currentStyle || window.getComputedStyle(article),
		articleHeight = parseInt(articleStyle.height),
		articleMarginTop = parseInt(articleStyle.marginTop),
		articleMarginBottom = parseInt(articleStyle.marginBottom),

		articleBody = document.getElementById("main-article-body"),
		articleBodyStyle = articleBody.currentStyle || window.getComputedStyle(articleBody);
		articleBodyHeight = parseInt(articleBodyStyle.height),

		newArticleHeight = 100;

	if(articleBodyHeight <= bHeight){

		newArticleHeight = bHeight - articleMarginTop - articleMarginBottom;
	}
	else{

		newArticleHeight = articleBodyHeight;
	}

	$('#main-article').css('height', newArticleHeight + 'px');
	$('.content-block.opios-webview').css('height', bHeight - 85 + 'px').css('width', '100%'); 
}

module.exports = Launcher;

	