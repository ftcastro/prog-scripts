  function gerarListener(){
	
	var objeto1 = {};
	var count = 0;
	var observers = [];
	
	objeto1.addObserver = function(observer){
		
		observers.push(observer);
		
	}
	
	objeto1.executarObservers = function(){
		
		var parametro = {count:count};
		for(var i = 0; i < observers.length; i++){
			observers[i](parametro);
		}
	count ++;	
	}
	return objeto1;
}

function gerarParametro(parametro){
	
	console.log(parametro.count);
}

var countObserver = gerarListener();

countObserver.addObserver(gerarParametro);

countObserver.executarObservers();
countObserver.executarObservers();
