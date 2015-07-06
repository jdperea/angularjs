angular.module("mainModule", [])
        .filter("removeHtml", function () {
            return function(texto){
                return String(texto).replace(/<[^>]+>/gm,'')
            }
        })
        .controller("FilterController", function($scope){
            $scope.mi_html = {};
            $scope.html = "<html>Hello quitando el html</html>";
            $scope.mi_html.tittle = "Hola";
            $scope.mi_html.body = "Hola Mundo";
            $scope.costo = 2;
        });