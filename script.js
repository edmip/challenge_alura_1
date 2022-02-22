
/* Reglas de encriptación: 
"a" es convertido para "ai"
"e" es convertido para "enter" 
"i" es convertido para "imes"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras       
*/
function minus(e) {   //CONVERSION DE MINISCULAS A MAYUSCULAS 
    e.value = e.value.toLowerCase();
    
}

var letraA = "a";
var letraE = "e";
var letraI = "i";
var letraO = "o";
var letraU = "u";

cambioA = "ai";
cambioE = "enter";
cambioI = "imes";
cambioO = "ober";
cambioU = "ufat";


var textoIngresado = document.querySelector("#input-texto");
var btnEncrip = document.querySelector("#btn-encriptar");
var btnDSemcrip = document.querySelector("#btn-desencriptar");
var textoDos = document.querySelector("#msg");



function encriptar(){ //FUNCION PARA ENCRIPTAR EL MENSAJE
	
	var encriptacion = textoIngresado.value;
	var textoListo = " ";
	
	
    var regex = /^[a-z ]+$/;
    if(regex.test(encriptacion)){ //COMPROBAR QUE SOLO HAYA LETRAS
	    for(var i=0; i<encriptacion.length; i++){

				
				if(encriptacion[i] == letraA){
					textoListo += encriptacion[i].replace(/\a/g, cambioA);	
				}

				if(encriptacion[i] == letraE){
					textoListo += encriptacion[i].replace(/\e/g, cambioE);
							
				}
				if(encriptacion[i] == letraI){
					textoListo += encriptacion[i].replace(/\i/g, cambioI);
							
				}
				if(encriptacion[i] == letraO){
					textoListo += encriptacion[i].replace(/\o/g, cambioO);
							
				}
				if(encriptacion[i] == letraU){
					textoListo += encriptacion[i].replace(/\u/g, cambioU);
							
				}
				if((encriptacion[i]!= letraA)&&(encriptacion[i]!= letraE)&&(encriptacion[i]!= letraI)&&(encriptacion[i]!= letraO)&&(encriptacion[i]!= letraU)){
					textoListo += encriptacion[i];
					
				}

				textoDos.value = textoListo;
				textoIngresado.value = "";
			
			}

    }else{
          
    	alert("No Es Posible Encriptar: Numeros, Caracteres Especiales o Palabras con Acentuadas");
		
	}

}


function desemcriptar(){ //FUNCION DESEMCRIPTAR EL MENSAJE
	
	var encriptacion = textoIngresado.value;
	var textoListo = " ";
	var comprobar = true;
	

			
			if (encriptacion.includes(cambioA)){

				textoListo = encriptacion.replaceAll(cambioA, letraA);
				
			}
			if (encriptacion.includes(cambioE)){

				textoListo =  textoListo.replaceAll(cambioE , letraE);
			}
			if (encriptacion.includes(cambioI)){

				textoListo =  textoListo.replaceAll(cambioI , letraI);
			}
			if (encriptacion.includes(cambioO)){
				
				textoListo = textoListo.replaceAll(cambioO , letraO);
				
			}
			if (encriptacion.includes(cambioU)){

				textoListo =  textoListo.replaceAll(cambioU , letraU);
			}

		
		
		textoDos.value = textoListo;
	}

function copiar() {  //FUNCIONN COPIAR
  	
  	var copyText = document.getElementById('msg');
  	copyText.select();
  	document.execCommand("copy");
}


	

	




