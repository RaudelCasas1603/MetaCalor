<?php
include_once("config.php");
//datos a insertar
$Nombre = $_GET['nombre'];
$Correo = $_GET['correo'];
$Pass = md5($_GET['passwd']);
$NickName = $_GET['nickname'];
$Peso = $_GET['peso'];
$Estatura = $_GET['estatura'];
$Edad = $_GET['edad'];

$resultado="";

$sql="insert into Usuario(Nombre, Correo, Contrasenia,Nickname,
    Peso, Estatura, Edad) 
    values('$Nombre','$Correo','$Pass','$NickName', '$Peso', '$Estatura','$Edad')";
$query = mysqli_query($conn, $sql);

if($query){

    $resultado="Registro completado con exito";
    echo $resultado;
    
}
else{
    $resultado ="Error al insertar los datos, intenta de nuevo";
    echo $resultado;
}

?>