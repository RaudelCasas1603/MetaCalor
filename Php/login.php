<?php

include_once("config.php");

if($_SERVER['REQUEST_METHOD'] === 'GET') {
    $Correo = $_GET['correo'];
    $Pass = md5($_GET['passwd']);

    $resultado = "";

    $sql = "SELECT * FROM Usuario WHERE Correo = '$Correo' AND Contrasenia = '$Pass'";
    $query = mysqli_query($conn, $sql);

    if(mysqli_num_rows($query) > 0) {
        $resultado = "Sesión iniciada con éxito";
        echo $resultado;
    } else {
        $resultado = "Error al iniciar sesión, intenta de nuevo";
        echo $resultado;
    }
} else {
    echo "Solicitud no válida";
}

?>