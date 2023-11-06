<?php

$link = 'mysql:host=localhost;dbname=id21448825_alimentos'; //Pones los datos de la bd
$usuario = "id21448825_estrellitasthelma";
$contasena = "Thelma2023%";

try {
    $pdo = new PDO($link, $usuario, $contasena); //Intentas establecer conexion con los datos dados

     //echo 'conectado'; //Imprime conectado si se logro
    // foreach($pdo->query('SELECT * from tutor') as $fila) { //Imprime los datos de la tabla tutor
    //     print_r($fila);} //una query son las sentencias sql

} catch (PDOException $e) {
    print "¡Error!: " . $e->getMessage() . "<br/>"; //Devuelve un mensaje de error
    die(); //Mata a la conexion
}
// No es necesario cerarlo cuando lo de dentro es puro php, si ponemos sql o html si tenemos que cerrar
?>