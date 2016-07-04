<?php

    if($_POST['email'] == 'admin@163.com' && $_POST['password'] == 'admin'){
        $arr = array(
            'status' => true
        );
    }else{
        $arr = array(
            'status' => false,
            'errMsg' => '邮箱或密码不正确'
        );
    }

    echo json_encode($arr);
 ?>
