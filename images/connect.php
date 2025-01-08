<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $username = $_POST['username'];
    

    //Database connection
    $conn = new mysqli('localhost', 'root', '', 'blog_database');
    if($conn->connect_error){
        die('Connection Failed : '.$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into registration(name, email, username) values(?, ?, ?)");
        $stmt->bind_param("sssis", $name, $email, $username);
        $stmt->execute();
        echo "You are signed up!";
        $stmt->close();
        $conn->close();
    }
?>