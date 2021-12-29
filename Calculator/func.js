// creación de botones de número
for (let i = 1; i <= 10; i++) {
	boton = document.querySelector('.cuerpo').appendChild(document.createElement('button'))
	boton.classList.add('numero')
	boton.setAttribute("id",'numero' +i)
	boton.innerHTML = i	
	if (i == 10) boton.innerHTML = 0 ;
	
}

// tomar el dato de cada número 
let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero2");
let numero3 = document.getElementById("numero3");
let numero4 = document.getElementById("numero4");
let numero5 = document.getElementById("numero5");
let numero6 = document.getElementById("numero6");
let numero7 = document.getElementById("numero7");
let numero8 = document.getElementById("numero8");
let numero9 = document.getElementById("numero9");
let numero0 = document.getElementById("numero10");
let multiplicar = document.querySelector('.multiplicar');
let sumar = document.querySelector('.suma');
let restar = document.querySelector('.resta');
let dividir = document.querySelector('.dividir');
let igual = document.querySelector('.igual');
let resultado = document.querySelector('.resultado');
let reset = document.querySelector('.reset')
let primerNumero;
let segundoNumero;
let operacion;
let res = 0;


//Aparecer en pantalla


function procesoNumero(){
numero1.onclick =()=> resultado.value = resultado.value + 1;
numero2.onclick =()=> resultado.value = resultado.value + 2;
numero3.onclick =()=> resultado.value = resultado.value + 3;
numero4.onclick =()=> resultado.value = resultado.value + 4;
numero5.onclick =()=> resultado.value = resultado.value + 5;
numero6.onclick =()=> resultado.value = resultado.value + 6;
numero7.onclick =()=> resultado.value = resultado.value + 7;	
numero8.onclick =()=> resultado.value = resultado.value + 8;
numero9.onclick =()=> resultado.value = resultado.value + 9;
numero0.onclick =()=> resultado.value = resultado.value + 0;
sumar.onclick = function(){ 
	primerNumero = resultado.value; 
	operacion = '+';
	limpiar();
}
restar.onclick = function(){ 
	 primerNumero = resultado.value;
	 operacion = '-'; 
	 limpiar();
	}
dividir.onclick = function(){ 
	primerNumero = resultado.value; 
	operacion = '/'; 
	limpiar()
}
multiplicar.onclick = function(){ 
	primerNumero = resultado.value;
 	operacion = '*';
  	limpiar();
}
igual.onclick = function(){segundoNumero = resultado.value ;
 resolver()};

reset.onclick = function(){
	resetear();
}
};
//Operaciones 
function limpiar (){
	resultado.value = '';
};

function resetear(){
	resultado.value = '';
	primerNumero = '0';
	segundoNumero = '0';
	operacion = '0';
};

function resolver(){


	switch(operacion){
		case"+":
		res = parseFloat(primerNumero) + parseFloat(segundoNumero);
		break;

		case"-":
		res = parseFloat(primerNumero) - parseFloat(segundoNumero);
		break;

		case"*":
		res = parseFloat(primerNumero) * parseFloat(segundoNumero);
		break;

		case"/":
		res = parseFloat(primerNumero) / parseFloat(segundoNumero);
		break;
	};
	console.log(res)
	resultado.value = res;
};


//Llamar a la función
procesoNumero();
