<?php
include_once("config.php");
header('Access-Control-Allow-Origin: *'); 

$caloriasRegistradas = $_POST["caloriasRegistradas"];
$proteinasRegistradas = $_POST["proteinasRegistradas"];
$grasasRegistradas = $_POST["grasas"];
$carbohidratosRegistrados=$_POST["carbohidratos"];
$id = $_POST["UserId"];

$sql = "SELECT * FROM Usuario WHERE id = $id";
$result = $pdo->query($sql);

if ($result->rowCount() > 0) {
    $fila = $result->fetch(PDO::FETCH_ASSOC);
    $caloriasTotales = $fila['caloriasRegistradas'] + $caloriasRegistradas;
    $proteinasTotales = $fila['proteinasRegistradas'] + $proteinasRegistradas;
    $grasasTotales = $fila['grasas'] + $grasasRegistradas;
    $carbohidratosTotales=$fila['carbohidratos'] + $carbohidratosRegistrados;
    $sqlActualizar = "UPDATE Usuario SET caloriasRegistradas = $caloriasTotales, proteinasRegistradas = $proteinasTotales, grasas = $grasasTotales, carbohidratos = $carbohidratosTotales WHERE id = $id";
    $sentencia_actualizar = $pdo->prepare($sqlActualizar);
    
    try {
        $sentencia_actualizar->execute();
        echo json_encode(['success' => true, 'message' => 'Datos actualizados correctamente', 'redirect' => '/main']);
    } catch (PDOException $e) {
        $codigo_error = $e->getCode();
        echo json_encode(['success' => false, 'message' => 'Error al actualizar los datos: ' . $codigo_error]);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'No se recibieron datos POST']);
}
?>
