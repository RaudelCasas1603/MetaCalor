<?php

include_once("config.php"); // Asegúrate de incluir tu archivo de configuración

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Obtener los datos del formulario
    $name = $_GET['name'];
    $calories = $_GET['calories'];
    $carbohydrates = $_GET['carbohydrates'];
    $fats = $_GET['fats'];
    $category = $_GET['category'];

    // Consulta SQL para insertar el nuevo alimento en la base de datos
    $sql = "INSERT INTO alimentosPersonalizos (categoria, alimento, proteinas, carbohidratos, grasas) 
            VALUES ('$category', '$name', '$calories', '$carbohydrates', '$fats')";

    // Ejecutar la consulta
    if (mysqli_query($conn, $sql)) {
    echo json_encode(['success' => true, 'message' => 'Alimento registrado con éxito']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Error al registrar el alimento: ' . mysqli_error($conn)]);
    }

} else {
    echo "Solicitud no válida";
}

?>
