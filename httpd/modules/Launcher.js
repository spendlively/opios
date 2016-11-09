function Launcher(){
    this.text = "Launch";
}

Launcher.prototype.init = function(){
	
	
	$(document).ready(function(){

		// resizeArticle();
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
					// resize();
					break;
				case 'Telegram':
					$('#foo2').css('position', 'inherit').css('visibility', 'visible');
					// resize();
					break;
				case 'WhatsApp':
					$('#foo3').css('position', 'inherit').css('visibility', 'visible');
					// resize();
					break;
				case 'Skype':
					$('#foo4').css('position', 'inherit').css('visibility', 'visible');
					// resize();
					break;
				default:
					$('#services-list').css('display', 'block');
					break;
			}
			smartResize();
		});
	});



	$(window).on('resize', function(e){

		// resize();
		smartResize();
	});
}

function resize(){

	var win = $(window),
		width = win.width(),
		height = win.height();

	$('.content-block.opios-webview').css('height', height - 100 + 'px').css('width', '100%'); 

// 	// resizeArticle();

// if(typeof window.qwerty === 'undefined') window.qwerty = 0;

// console.log(window.qwerty++);
// debugger;
//   	var article = document.getElementById("main-article"),
// 		articleStyle = article.currentStyle || window.getComputedStyle(article);
// 		height = parseInt(articleStyle.height);

//   	$('.content-block.opios-webview').css('height', height + 'px').css('width', '100%');	
}

function resizeArticle(){

 //  	var win = $(window),
 //  		article = document.getElementById("main-article"),
	// 	articleStyle = article.currentStyle || window.getComputedStyle(article),
 //  		width = win.width(),
 //  		height = win.height();
 //  		newHeight = height - parseInt(articleStyle.marginTop) - parseInt(articleStyle.marginBottom);

	// $('#main-article').css('height', newHeight + 'px');

//   	var win = $('#main-article'),
//   		article = document.getElementById("main-article"),
// 		articleStyle = article.currentStyle || window.getComputedStyle(article),
//   		width = win.width(),
//   		height = win.height();
//   		newHeight = height - parseInt(articleStyle.marginTop) - parseInt(articleStyle.marginBottom);

// console.log(win.height());
// console.log(articleStyle.height);

	// $('#main-article').css('height', newHeight + 'px');
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

	// console.log(bHeight);
	// console.log(articleHeight);
	// console.log(articleBodyHeight);

	if(articleBodyHeight <= bHeight){

		newArticleHeight = bHeight - articleMarginTop - articleMarginBottom;
		// $('.content-block.opios-webview').css('height', newArticleHeight + 'px').css('width', '100%'); 
		// console.log('true');
	}
	else{

		newArticleHeight = articleBodyHeight;
		// console.log('false');
	}

	$('#main-article').css('height', newArticleHeight + 'px');
	// if($('#services-list').is(":visible") === false){
		// $('.content-block.opios-webview').css('height', newArticleHeight + 'px').css('width', '100%'); 
	// }

	// console.log(newArticleHeight);
	console.log("==========================================");
}

module.exports = Launcher;

	