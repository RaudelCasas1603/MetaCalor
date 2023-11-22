<?php

include_once("config.php");
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Obtener datos del ranking
// Obtener datos del ranking con nombres de usuarios
$consulta = "SELECT ranking.racha, u.nombre FROM ranking
             INNER JOIN Usuario as u ON ranking.id_usuario = u.id
             ORDER BY ranking.racha DESC";
$resultado = $conn->query($consulta);

$datosRanking = array();
while ($fila = $resultado->fetch_assoc()) {
    $datosRanking[] = $fila;
}

// Devolver datos en formato JSON
header('Content-Type: application/json');
echo json_encode($datosRanking);

?>