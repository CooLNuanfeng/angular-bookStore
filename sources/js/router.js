require(['main'],function(myApp){
    myApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/login');

        $stateProvider.state('login',{
            url : '/login',
            views : {
                'nav' : {
                    templateUrl : './templates/nav.html'
                },
                'main' : {
                    templateUrl : './templates/login.html'
                }
            }
        }).state('index',{
            url : '/index',
            views : {
                'nav' : {
                    templateUrl : './templates/nav.html'
                },
                'main' : {
                    templateUrl : './templates/index.html'
                }
            },
            controller : 'indexCtrl'
        }).state('list',{
            url : '/list',
            views : {
                'nav' : {
                    templateUrl : './templates/nav.html'
                },
                'main' : {
                    templateUrl : './templates/list.html'
                }
            },
            controller : 'listCtrl'
        }).state('list.table',{
            url : '/:name',
            templateUrl : './templates/table.html',
            controller : 'tableCtrl'
        }).state('article',{
            url : '/article/:bookId',
            views : {
                'nav' : {
                    templateUrl : './templates/nav.html'
                },
                'main' : {
                    templateUrl : './templates/article.html'
                }
            },
            controller : 'articleCtrl'
        });

    }]);
});
