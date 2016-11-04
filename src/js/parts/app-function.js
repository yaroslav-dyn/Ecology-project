

var app = angular.module("eco-app", ["ngRoute"]);

    app.controller('dataCtrl', function ($scope, $http) {

        $scope.siteNameF = "ENERGY";
        $scope.siteNameB = "GREEN";
        $scope.siteSlogan = "You Live More Sustainably";


        $http.get('../data/news.json').success(function(data) {
            $scope.posts = data;

        });



       $scope._Index = 0;
       $scope.showIndex = function(index){
           $scope._Index  =  index ;
       };

    });

    app.controller('mainData', function ($scope) {


    });

//routing
    app.config(function($routeProvider) {
        $routeProvider

            .when("/", {
                templateUrl : "html-parts/main.html"
            })

            .when("/aboutUs", {
                templateUrl : "html-parts/about_us.html"

            })
            .when("/contactUs", {
                templateUrl : "html-parts/contact_us.html"

            })
            .when("/news", {
                templateUrl : "html-parts/services.html"
            })
            .when("/postPage", {
                templateUrl : "html-parts/post-page.html"
                //controller  : 'dataCtrl'
            })



    });

