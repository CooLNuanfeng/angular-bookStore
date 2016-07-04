/**
    整个应用的所有的自定义 service factory
**/
define(['main'],function(myApp){
    // 获取首页的数据列表
    myApp.factory('indexData',['$http',function($http){
        return $http.get('./data/indexBook.php');
    }]);
    // 检查是否登录
    myApp.factory('checkAdmin',['$rootScope',function($rootScope){
        var checkAdmin = function(){
            if(!$rootScope.login){
                window.location = './book_index.html#/login';
            }
        }
        return {
            checkAdmin : checkAdmin
        }
    }]);
    // 获取列表页数据
    myApp.factory('getBookList',['$http',function($http){
        var listBook = function(name){
            return $http.get('./data/bookList.php',{params:{'category':name}});
        }

        return {
            getList : listBook
        }
    }]);

    //获取详情页书籍信息
    myApp.factory('getBookInfo',['$http',function($http){
        var getBookInfo = function(id){
            return $http.get('./data/article.php',{params:{'bookid':id}});
        }

        return {
            getInfo : getBookInfo
        }
    }])

    return myApp;
});
