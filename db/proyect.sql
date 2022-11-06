CREATE DATABASE proyect;
USE proyect;
drop schema proyect;

CREATE TABLE jefe (
	id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(40) COLLATE utf8_unicode_ci NOT NULL,
    telefono VARCHAR(10) COLLATE utf8_unicode_ci NOT NULL,

    PRIMARY KEY(`id`)
);

CREATE TABLE dispositivo(
	id INT NOT NULL AUTO_INCREMENT,
    address VARCHAR(25),
    PRIMARY KEY (`id`)
);

CREATE TABLE trabajador(
	id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(40) COLLATE utf8_unicode_ci NOT NULL,
    edad INT NOT NULL,
    departamento VARCHAR(20) COLLATE utf8_unicode_ci NOT NULL,
    puesto VARCHAR(20) COLLATE utf8_unicode_ci NOT NULL,
    telefono VARCHAR(10) COLLATE utf8_unicode_ci NOT NULL,
    jefe INT,
    dispositivo INT,
    
    PRIMARY KEY (`id`),
    FOREIGN KEY (`jefe`) REFERENCES jefe(`id`),
    FOREIGN KEY (`dispositivo`) REFERENCES dispositivo(`id`)
);

CREATE TABLE historial(
	trabajador INT,
    dispositivo INT,
    fecha DATE NOT NULL,
    FOREIGN KEY (`trabajador`) REFERENCES trabajador(`id`),
    FOREIGN KEY (`dispositivo`) REFERENCES dispositivo(`id`)
);

CREATE TABLE parameters(
	acc_x FLOAT,
    acc_y FLOAT,
    acc_z FLOAT,
    gyro_x FLOAT,
    gyro_y FLOAT,
    gyro_z FLOAT
);

select * from trabajador;
select * from jefe;
INSERT INTO dispositivo (id, address) VALUES (742930, "98:D3:51:FD:CC:14");
INSERT INTO dispositivo (id, address) VALUES (750100, "");
INSERT INTO dispositivo (id, address) VALUES (750103, "");
INSERT INTO dispositivo (id, address) VALUES (805090, "");
INSERT INTO dispositivo (id, address) VALUES (874303, "");
INSERT INTO dispositivo (id, address) VALUES (874400, "");

insert into jefe (nombre, telefono) values ("Jose Hernandez", "8330000002");
insert into trabajador (nombre, edad, departamento, puesto, telefono, jefe, dispositivo) values ('Jesus Baez', 22, "Sistemas", "Programador", "8330000001", 1 ,742930);