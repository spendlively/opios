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


			$('.tnb-li.service').click(function(e){
				$('.tnb-li.service').removeClass('active-btn');
				$(this).addClass('active-btn');

				var service = $(this).children('.tnb-text').text();

				$('.content-block.opios-webview').css('visibility', 'hidden').css('position', 'absolute').css('top', '0px');
				$('#services-list').css('display', 'none');

				switch(service){
					case 'Messenger':
						$('#foo1').css('position', 'inherit').css('visibility', 'visible');
						resize();
						break;
					case 'Telegram':
						$('#foo2').css('position', 'inherit').css('visibility', 'visible');
						resize();
						break;
					case 'WhatsApp':
						$('#foo3').css('position', 'inherit').css('visibility', 'visible');
						resize();
						break;
					case 'Skype':
						$('#foo4').css('position', 'inherit').css('visibility', 'visible');
						resize();
						break;
					default:
						$('#services-list').css('display', 'block');
						break;
				}
			});
		});



		$(window).on('resize', function(e){

			resize();
		});
	}

	function resize(){
	  	var win = $(window),
	  		width = win.width(),
	  		height = win.height();
	  	
	  	$('.content-block.opios-webview').css('height', height - 100 + 'px').css('width', '100%');	
	}

	module.exports = Launcher;

		

/***/ }
/******/ ]);