//Crear una instancia de SocketIO, recibe como parámetro el url del servidor al que se conectará
var socket = io.connect('192.168.20.59:8080');
var list = document.querySelector('#not');
var notificaciones = [];
let mensaje = document.getElementById('mensaje');

let usuario = document.getElementById('usuario');

let salida = document.getElementById('salida');

let notificaciones = document.getElementById('notificaciones');

let boton = document.getElementById('enviar');

boton.addEventListener('click', function(){
  var data = {
    mensaje: mensaje.value,
    usuario: usuario.value,

  };

  if(mensaje.value === '' || usuario.value === ''){
    alert('Se requiere de un mensaje y un usuario para acceder al chat')
  }else{
    mensaje.value = '',
    docket.emit('chat:mensaje',data);
  }
});

mensaje.addEventListener('keydown',()=>{
  socket.emit('chat',usuario.value);
})
//Escuchar al evento 'hola' y realizar cierta accion, recibe como parámetro el id del evento y un callback con la información recibida
socket.on('socket_conectado', function (data) {
  //Notificar al usuario el evento hola
  console.log(data);

});

socket.on('socket_desconectado', function (data) {
  //Notificar al usuario el evento hola
  console.log(data);
  clientes = clientes.filter(function(data){
    console.log(cliente);
    return cliente.id != data.id;
  })
});

