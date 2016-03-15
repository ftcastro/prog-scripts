// Criação das funções

function Animal(){
	this.barulhos = '';
}

function Cao(){
	Animal.call(this);
	this.barulhos =  'Au'
}

function Gato(){
	Animal.call(this);
	this.barulhos =  'Miau'
}

// Função Manada, que recebe os animais

function Manada(){
	this.manadaAnimais = [];
}

function ManadaVirgula(){
	Manada.call(this);
	
	function ManadaSustenido(){
	Manada.call(this);

// Criação dos prototypes cão e gato, subclasses de Animal

Cao.prototype = new Animal();
Gato.prototype = new Animal();

// Construtores para vírgula e sustenido

var Virgula = new Manada();
var Sustenido = new Manada();

// Iteração para a geração das strings

Virgula.barulhos = function(){
	var virgulas = '';
	for(var count = 0; count < this.manadas.length; count++){
		virgulas+=this.manadas[count].fazerbarulho();
		if (count != this.manadas.length-1){
			virgulas+=', '
		}
	}
	return virgulas;
}

Sustenido.barulhos = function(){
	var sustenidos = '';
	for(var count = 0; count < this.manadas.length; count++){
		sustenidos+='#'+this.manadas[count].fazerbarulho()+' '+'#'+this.manadas[count].fazerbarulho()+' ';
	}
	return sustenidos;
}

// Demais prototypes

Animal.prototype = {
	fazerbarulho: function(){
		return this.barulhos;
	}
}

Manada.prototype = {
	adicionar: function(animal){
		this.manadaAnimais.push(animal);
	},
	barulhos: function(){
		return 'Função barulhos';
	}
};

ManadaVirgula.prototype = Virgula;
ManadaSustenido.prototype = Sustenido;

var virgula = new Manada();
var sustenido = new Manada();

var manadaVirgula = new ManadaVirgula();
var manadaSustenidaDupla = new ManadaSustenido();
var animais = [new Cao(), new Gato()];

animais.forEach(function (animal) {
  manadaVirgula.adicionar(animal);
  manadaSustenidaDupla.adicionar(animal);
});

// Print Esperado: Au, Miau
console.log(manadaVirgula.barulhos());

// Print Esperado: Au# Au# Miau# Miau#
console.log(manadaSustenidaDupla.barulhos());
