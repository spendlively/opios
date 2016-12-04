var isSuspended = false;

function SmartResizer(){}

SmartResizer.prototype.isSuspended = function(){

	return isSuspended;
}

SmartResizer.prototype.suspend = function(){

	isSuspended	= true;
}

SmartResizer.prototype.resume = function(){
	isSuspended	= false;
}

SmartResizer.prototype.resize = function(){

	var b = document.body,
		bStyle = b.currentStyle || window.getComputedStyle(b),
		bHeight = parseInt(bStyle.height),

		article = document.getElementById("main-article"),
		articleStyle = article.currentStyle || window.getComputedStyle(article),
		articleHeight = parseInt(articleStyle.height),
		articleMarginTop = parseInt(articleStyle.marginTop),
		articleMarginBottom = parseInt(articleStyle.marginBottom),

		articleBody = document.getElementById("main-article-body"),
		articleBodyStyle = articleBody.currentStyle || window.getComputedStyle(articleBody),
		articleBodyHeight = parseInt(articleBodyStyle.height),

		newArticleHeight = 100;

	if(articleBodyHeight <= bHeight){

		newArticleHeight = bHeight - articleMarginTop - articleMarginBottom;
	}
	else{

		newArticleHeight = articleBodyHeight;
	}

console.log(bHeight,articleMarginTop,articleMarginBottom,newArticleHeight)

	$('#main-article').css('height', newArticleHeight + 'px');
	$('.content-block.opios-webview').css('height', bHeight - 85 + 'px').css('width', '100%'); 
}

export default SmartResizer;