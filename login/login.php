<?php
    $cemail = "admin321@gmail.com";
    $cpass = "pass123";
    $email = $_POST['email'];
    $pass = $_POST['password'];
    //validate the entered name and age
    if($email==$cemail && $pass==$cpass)
    {
        // If both name and age are correct, redirect to the website
        header("Location: https://www.google.com");  // Replace with the desired website URL
        exit();
    }
    else {
        // If name or age is incorrect, display an error message
        echo "Incorrect Email or Password. Please try again.";
    }

?>