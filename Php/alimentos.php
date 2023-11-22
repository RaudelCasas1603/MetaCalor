<?php
include_once("config.php");

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$sql = "SELECT * FROM alimentos";
$resultado = $conn->query($sql);

$alimentos = array();
while($fila = $resultado->fetch_assoc()){
    $alimentos[] = $fila;
}

header('Content-Type: application/json');
echo json_encode($alimentos);

?>