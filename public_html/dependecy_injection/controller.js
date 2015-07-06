var app = angular.module("MyFirstApp",[]);
app.controller("FirstController", ["$scope", "$http" ,function(m, h){
    /*Es una buena practica comprimir el js para pasarlo a producción*/
    m.nombre = "Juandp";
    var nameu = h.toString(m.nombre);
    m.nuevoComentario = {};
    m.comentarios = [
        {
        comentario: "Buen tutorial",
        username: "codigo facilito"
    },
    {
        comentario: "malo el tuto",
        username: "otro usr"
    }
    ];
    
    m.agregarComentario = function(){
        m.comentarios.push(m.nuevoComentario);
        m.nuevoComentario = {};
    }
    
}]);
