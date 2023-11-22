<?php

include_once("config.php"); // Asegúrate de incluir tu archivo de configuración

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Obtener los datos del formulario
    $id = $_GET['id'];
    // Consulta SQL para insertar el nuevo alimento en la base de datos
    $sql = "SELECT * FROM Usuario WHERE id = $id";

    if (mysqli_query($mysqli, $sql)) {
        $result = mysqli_query($mysqli, $sql);
        $row = mysqli_fetch_assoc($result);
        $json = json_encode($row);
        echo $json;
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($mysqli);
    }

} else {
    echo "Solicitud no válida";
}

?>
