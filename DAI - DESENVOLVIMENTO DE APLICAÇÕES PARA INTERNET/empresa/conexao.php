<?php
    $server = "localhost";
    $user = "root";
    $pass = "";
    $bd = "empresa";

    if ($conn = mysqli_connect($server, $user, $pass, $bd)){
        echo "CONECTADO!\n";
    }
    else
        echo "ERRO!\n";
?>