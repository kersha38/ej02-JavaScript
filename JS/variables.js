console.log('HOla Mundo');

var nombre = 'Kersha';
var edad = 28;
var deudas = 223.45;
var fechaNac=new Date();
var casado= false;
var vacio=null;//falso
var noDefinido=undefined;//falso
if(vacio){
    console.log('Verdadero');
}else {
    console.log('Falso');
}

//JSON
//ctrl + a  seleecionar
//ctrl +alt + l formatear
var usuario={
    "nombre":"Carlos",
    "apellido":"Gutie",
    "edad":26,
    "edadCalculada":sumarDosNumeros(10,8), //asigno ejecucion funcion
    imprimirEnConsola: function () {
        console.log(this.nombre+' '+
        this.apellido+' '+
        this.edad);
    },
    imprimirSuma: sumarDosNumeros //asigno definicion de la funcion
};

console.log(usuario.nombre);
console.log(usuario);
delete usuario.edad;
console.log(usuario);
usuario.cedula=17456465;
console.log(usuario);

console.log(typeof usuario);
console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof casado);

function sumarDosNumeros(numeroUno,numeroDos){
    return numeroUno+numeroDos;
}
console.log(sumarDosNumeros(3,5));

var sumarDosNumerosVersionDos= function noimportalNombre(numeroUno,numeroDos){
    return numeroUno+numeroDos;
}

console.log(sumarDosNumerosVersionDos(5,3));
//funcion anonima
var sumarDosNumerosVersionTres= function (numeroUno,numeroDos){
    return numeroUno+numeroDos;
}
console.log(sumarDosNumerosVersionTres(2,5)); //ejecutar funcion

usuario.imprimirEnConsola();

console.log(usuario.imprimirSuma);//definicion funcion