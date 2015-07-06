var app = angular.module("MyFirstApp",[]);
app.controller("FirstController", function($scope){
    $scope.nombre = "Juandp";
    $scope.nuevoComentario = {};
    $scope.comentarios = [
        {
        comentario: "Buen tutorial",
        username: "codigo facilito"
    },
    {
        comentario: "malo el tuto",
        username: "otro usr"
    }
    ];
    
    $scope.agregarComentario = function(){
        $scope.comentarios.push($scope.nuevoComentario);
        $scope.nuevoComentario = {};
    }
    
});
