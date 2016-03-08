  function gerarListener(){
	
	var objeto1 = {};
	var count = 0;
	var observers = [];
	
	return objeto1;
	
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
}

function gerarParametro(parametro){
	
	console.log(parametro.count);
}

var countObserver = gerarListener();

countObserver.addObserver(gerarParametro);

countObserver.executar();
countObserver.executar();
