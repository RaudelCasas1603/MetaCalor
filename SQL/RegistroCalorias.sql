CREATE TABLE `id21448825_alimentos`.`RegistroCalorias` 
(`id` INT NOT NULL AUTO_INCREMENT , `fecha` TIMESTAMP(30) NOT NULL DEFAULT CURRENT_TIMESTAMP(30),
 `caloriasRegistradas` DECIMAL(5,2) NOT NULL , `proteinasRegistradas` DECIMAL(5,2) NOT NULL , 
 `grasasRegistradas` DECIMAL(5,2) NOT NULL , `carbohidratosRegistrados` DECIMAL(5,2) NOT NULL , 
 `idUsuario` INT(6) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;
