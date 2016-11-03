

$(".menu ul li").on("click", function(){

    $(this).parent().find('li').removeClass("current");

    $(this).addClass("current");

});


    var app = angular.module("eco-app", ["ngRoute"]);

     app.controller('dataCtrl', function ($scope) {

    });


//routing
    app.config(function($routeProvider) {
        $routeProvider

            .when("/", {
                templateUrl : "html-parts/main.html",
                controller  : 'dataCtrl'
            })
            .when("/aboutUs", {
                templateUrl : "html-parts/about_us.html",
                controller  : 'dataCtrl'
            })
            .when("/contactUs", {
                templateUrl : "html-parts/contact_us.html",
                controller  : 'dataCtrl'
            })
            .when("/services", {
                templateUrl : "html-parts/services.html",
                controller  : 'dataCtrl'
            })



    });

