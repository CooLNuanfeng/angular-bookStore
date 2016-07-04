<?php
    $bookCodeId = $_GET['bookid'];

    // select * from table;

    $arr = array(
        'status' => true,
        'data' => array(
            'src' => 'http://placehold.it/350x450',
            'bookName' => '《Angular JS 权威指南》',
            'athour' => 'blue',
            'time' => '2015-12',
            'publisher' => '北京工业出版社',
            'introduce' =>'深入浅出的讲解了AngularJS的开发概念和原理，并通过丰富的开发实例向读者展示了构建复杂应用的完整过程。',
            'article' => array(
                'part1' => array(
                    '认识AngularJs','AngularJs的前世今生'
                ),
                'part2'=> array(
                    'MVC','路由、模块、依赖注入','双向数据绑定','指令'
                ),
                'part3' => array(
                    'Service Provider Factory','$scope'
                ),
                'part4' => array(
                    '利用Angular实现简易的bookStore系统'
                )
            )
        )
    );

    echo json_encode($arr);
 ?>
