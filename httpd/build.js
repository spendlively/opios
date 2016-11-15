/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Launcher = __webpack_require__(1);

	var launcher = new Launcher();
	launcher.init();



/***/ },
/* 1 */
/***/ function(module, exports) {

	function Launcher(){
	    this.text = "Launch";
	}

	Launcher.prototype.init = function(){
		
		
		$(document).ready(function(){



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
			$contextMenu.on("click", "a", function() {
				$contextMenu.hide();
			});

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

		

/***/ }
/******/ ]);