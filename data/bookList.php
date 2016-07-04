<?php

    switch ($_GET['category']) {
        case 'all':
            $arr = array(
                'status' => true,
                'data' => array(
                    array(
                        'bookcode' => '001',
                        'name' => '《JavaScript 权威指南》',
                        'author' => 'aaa',
                        'category' => 'computer'
                    ),
                    array(
                        'bookcode' => '002',
                        'name' => '《NodeJs 权威指南》',
                        'author' => 'bbb',
                        'category' => 'computer'
                    ),
                    array(
                        'bookcode' => '003',
                        'name' => '《AngularJs 权威指南》',
                        'author' => 'ccc',
                        'category' => 'computer'
                    ),
                    array(
                        'bookcode' => '004',
                        'name' => '《文化苦旅》',
                        'author' => 'ddd',
                        'category' => 'person'
                    ),
                    array(
                        'bookcode' => '005',
                        'name' => '《宇宙大爆炸》',
                        'author' => 'eee',
                        'category' => 'science'
                    ),
                    array(
                        'bookcode' => '006',
                        'name' => '《人人都能看懂科学》',
                        'author' => 'fff',
                        'category' => 'science'
                    ),
                    array(
                        'bookcode' => '007',
                        'name' => '《曾少年》',
                        'author' => 'ggg',
                        'category' => 'person'
                    ),
                    array(
                        'bookcode' => '008',
                        'name' => '《哲学的思考》',
                        'author' => 'hhh',
                        'category' => 'philosophy'
                    )
                )
            );
            break;
        case 'person':
            $arr = array(
                'status' => true,
                'data' => array(
                    array(
                        'bookcode' => '004',
                        'name' => '《文化苦旅》',
                        'author' => 'ddd',
                        'category' => 'person'
                    ),
                    array(
                        'bookcode' => '007',
                        'name' => '《曾少年》',
                        'author' => 'ggg',
                        'category' => 'person'
                    )
                )
            );
            break;
        case 'science':
            $arr = array(
                'status' => true,
                'data' => array(
                    array(
                        'bookcode' => '005',
                        'name' => '《宇宙大爆炸》',
                        'author' => 'eee',
                        'category' => 'science'
                    ),
                    array(
                        'bookcode' => '006',
                        'name' => '《人人都能看懂科学》',
                        'author' => 'fff',
                        'category' => 'science'
                    ),
                )
            );
            break;
        case 'computer':
            $arr = array(
                'status' => true,
                'data' => array(
                    array(
                        'bookcode' => '001',
                        'name' => '《JavaScript 权威指南》',
                        'author' => 'aaa',
                        'category' => 'computer'
                    ),
                    array(
                        'bookcode' => '002',
                        'name' => '《NodeJs 权威指南》',
                        'author' => 'bbb',
                        'category' => 'computer'
                    ),
                    array(
                        'bookcode' => '003',
                        'name' => '《AngularJs 权威指南》',
                        'author' => 'ccc',
                        'category' => 'computer'
                    )
                )
            );
            break;
        case 'philosophy':
            $arr = array(
                'status' => true,
                'data' => array(
                    array(
                        'bookcode' => '008',
                        'name' => '《哲学的思考》',
                        'author' => 'hhh',
                        'category' => 'philosophy'
                    )
                )
            );
            break;
        default:
            $arr = array(
                'status' => false,
                'data' => '未找到该类书籍'
            );
            break;
    }


    echo json_encode($arr);
?>
