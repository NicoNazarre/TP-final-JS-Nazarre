function capturar(){
    function Persona(nombre,apellido,edad){
     this.nombre=nombre;
     this.apellido=apellido;
     this.edad=edad;
 }
 var nombreCapturar = document.getElementById("nombre").value;

 var apellidoCapturar = document.getElementById("apellido").value;
 
 var edadCapturar = document.getElementById("edad").value;

 nuevoSujeto = new Persona(nombreCapturar,apellidoCapturar,edadCapturar);
 
 agregar();
}

var baseDatos= [];
function agregar(){
 baseDatos.push(nuevoSujeto);
 console.log(baseDatos);
 document.getElementById("tabla").innerHTML += '<tbody><td>'+nuevoSujeto.nombre+'</td><td>'+nuevoSujeto.apellido+'</td><td>'+nuevoSujeto.edad+'</td></tbody>';
}

