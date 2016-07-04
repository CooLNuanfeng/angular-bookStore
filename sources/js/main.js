requirejs.config({
    baseUrl : './',
    paths : {
        'jquery' : ['lib/jquery.2.2.2.min'],
        'angular' : 'lib/angular.1.5.5.min',
        'ui-router' : 'lib/angular-ui-router',
        'bootstrap' : 'lib/bootstrap.min',
        //'router' : 'sources/js/router', // 路由配置
        'controller' : 'sources/js/controller', // 应用的所有控制器
        'factory' : 'sources/js/factory', // 自定义service factory
        'main' : 'sources/js/main'  //主 入口
    },
    shim : {
        'bootstrap' : {
            deps : ['jquery']
        },
        'angular' : {
            exports : 'angular'
        },
        'ui-router' : {
            deps : ['angular']
        },
        // 'main' : {
        //     deps : ['angular']
        // },
        // 'controller' : {
        //     deps: ['angular','main']
        // },
        // 'factory' : {
        //     deps : ['angular','controller']
        // }
    }
});

define(['angular','jquery','ui-router','controller'],function(angular,$){
    var myApp = angular.module('myApp',['ui.router']);

    myApp.run(function($rootScope){
        $rootScope.login = false;
        $rootScope.admin = '';
    });
    return myApp;
});
