<?php
include_once("config.php");

// Comprueba si se han recibido datos por GET
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Datos a insertar
    $Nombre = $_GET['nombre'];
    $Correo = $_GET['correo'];
    $Pass = md5($_GET['passwd']);
    $NickName = $_GET['nickname'];
    $Peso = $_GET['peso'];
    $Estatura = $_GET['estatura'];
    $Edad = $_GET['edad'];
    $Avatar = $_GET['avatar'];

    $resultado = "";

    $sql = "INSERT INTO Usuario(Nombre, Correo, Contrasenia, Nickname, Peso, Estatura, Edad, Avatar) 
            VALUES('$Nombre', '$Correo', '$Pass', '$NickName', '$Peso', '$Estatura', '$Edad', '$Avatar')";
    $query = mysqli_query($conn, $sql);

    if ($query) {
        $resultado = "Registro completado con éxito";
        echo $resultado;
    } else {
        $resultado = "Error al insertar los datos, intenta de nuevo";
        echo $resultado;
    }
} else {
    echo "Solicitud no válida"; // Opcional: mensaje de error si no se recibe una solicitud GET
}
?>
