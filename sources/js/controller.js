/**
    整个应用的所有控制器
**/

require(['factory'],function(myApp){

    //导航登录显示控制
    myApp.controller('navCtrl',['$scope','$rootScope',function($scope,$rootScope){
        $scope.login = $rootScope.login;
        $scope.admin = $rootScope.admin;
        $scope.logout = function(){
            $rootScope.login = false;
            $rootScope.admin = '';
        }
    }]);


    //登录控制器
    myApp.controller('loginFormCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
        $scope.notice ='提示:邮箱：admin@163.com,密码：admin';
        //登录
        $scope.doLogin = function(){
            // GET 请求写法
            // $http({
            //     url : './data/adminLogin.php',
            //     method : 'GET',
            //     params : {
            //         email : $scope.myEmail,
            //         password : $scope.myPassword
            //     }
            // }).then(function(res){
            //     console.log(res.data);
            //     if(res.status){
            //         //window.location = '/index';
            //     }else{
            //         $scope.notice = res.errMsg;
            //     }
            // },function(){
            //     $scope.notice = '网络异常请重试'
            // })

            // POST 请求写法 data 默认为 json格式传递 , 注意两点 headers 和 $.param()
            var sendData = $.param({
                email: $scope.myEmail,
                password: $scope.myPassword
            });
            $http({
                url : './data/adminLogin.php',
                method : 'POST',
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                },
                data : sendData
            }).then(function(res){
                if(res.data.status){
                    $rootScope.admin = 'admin';
                    $rootScope.login = true;
                    window.location = './book_index.html#/index';
                }else{
                    $scope.notice = res.data.errMsg;
                }
            },function(){
                $scope.notice = '网络异常请重试';
            })

        }
    }]);

    // 首页数据渲染控制器
    myApp.controller('indexCtrl',['$scope','$http','checkAdmin','indexData',function($scope,$http,checkAdmin,indexData){
        // 只有登录才能进入
        checkAdmin.checkAdmin();

        // 获取首页 热门书籍书籍
        indexData.success(function(res){
            //console.log(res);
            $scope.bookLists = res;
        }).error(function() {
            window.location = './book_index.html#/404';
        });
    }]);

    //自定义指令 activeSelect  左侧列表的选择控制
    // myApp.directive('activeSelect',['$scope',function($scope){
    //     return {
    //         restrict : 'AE',
    //         link : function(scope,element,attr){
    //
    //         }
    //     }
    // }]);

    myApp.controller('listCtrl',['$scope','$stateParams','checkAdmin','getBookList',function($scope,$stateParams,checkAdmin,getBookList){
        // 只有登录才能进入
        checkAdmin.checkAdmin();

        $scope.listJson =  {
            'all' : {name : '全部', code : 0},
            'person' : {name : '人文', code : 1},
            'science' : {name : '科学', code : 2},
            'computer' : {name : '计算机', code : 3},
            'philosophy' : {name : '哲学', code : 4}
        };
        $scope.selected = $scope.listJson[$stateParams.name].code||0;
        $scope.currentSpecies = $scope.listJson[$stateParams.name].name + '书籍';
        $scope.show = function(id){
            $scope.selected = id;
        }
    }]);

    myApp.controller('tableCtrl',['$scope','$stateParams','getBookList','checkAdmin',function($scope,$stateParams,getBookList,checkAdmin){
        // 只有登录才能进入
        checkAdmin.checkAdmin();

        getBookList.getList($stateParams.name).success(function(res){
            $scope.bookItems = res.data;
            $scope.pages = [];
            var length = Math.floor($scope.bookItems.length / 5) + 1;
            for(var i=0; i< length;i++){
                $scope.pages.push(i);
            }
        })
    }]);

    // angular js 实现分页 参考 http://www.html-js.com/article/The-AngulaJS-instance

    myApp.controller('articleCtrl',['$scope','$stateParams','getBookInfo','checkAdmin',function($scope,$stateParams,getBookInfo,checkAdmin){
        // 只有登录才能进入
        checkAdmin.checkAdmin();

        getBookInfo.getInfo($stateParams.bookId).success(function(res){
            if(res.status){
                $scope.bookInfo = res.data;
            }
        });
    }]);
})
