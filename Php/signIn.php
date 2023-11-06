<?php
include_once("config.php");
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Verifica que se hayan enviado datos POST
if ($_POST) {
    $firstName = $_POST["firstName"];
    $lastName = $_POST["lastName"];
    $fullName = $firstName . " " . $lastName;
    $userName = $_POST["username"];
    $email = isset($_POST["email"]) ? $_POST["email"] : null; // Verifica si se envió el correo electrónico
    $password = md5($_POST["password"]);

    // Verifica que el correo electrónico no sea nulo antes de intentar la inserción
    if ($email !== null) {
        $sql = "INSERT INTO Usuario(Nombre, Correo, Contrasenia, Nickname) 
                VALUES(?,?,?,?)";
        $sentencia_agregar = $pdo->prepare($sql);

        try {
            $sentencia_agregar->execute(array($fullName, $email, $password, $userName));
            echo json_encode(['success' => true, 'message' => 'Usuario agregado correctamente', 'redirect' => '/home']);
        } catch (PDOException $e) {
            echo json_encode(['success' => false, 'message' => 'Error al agregar el usuario: ' . $e->getMessage()]);
        }
    } else {
        echo json_encode(['success' => false, 'message' => 'El correo electrónico no puede ser nulo']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'No se recibieron datos POST']);
}
?>