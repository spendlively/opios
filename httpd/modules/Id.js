var counter = 1;

function Id(){
	
	return +new Date() + '' + counter++;
}

export default Id;
