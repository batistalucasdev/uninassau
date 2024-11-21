<?php
    $server = "localhost";
    $user = "root";
    $pass = "root";
    $bd = "empresa";

    if ($conn = mysqli_connect($server, $user, $pass, $bd)){
        echo "CONECTADO!";
    }
    else
        echo "ERRO!";
?>