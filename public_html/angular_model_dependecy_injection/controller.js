var app = angular.module("MyFirstApp",[]);
app.controller("FirstController", ["$scope",function(m){
    m.nombre = "Juandp";
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
