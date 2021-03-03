CREATE DATABASE zoo;
USE zoo;
CREATE TABLE empleado(
	idEmpleado INT NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(50) NOT NULL,
	fotoUrl VARCHAR(200), 
	fechaNacimiento DATE NOT NULL,
	apellidoPaterno VARCHAR(50) NOT NULL,
	sexo CHAR(1),
	categoriaEmpleado VARCHAR(20)NOT NULL,
	status CHAR(1) NOT NULL DEFAULT "A",
	PRIMARY KEY(idEmpleado)
	
);
describe empleado;
INSERT INTO empleado(nombre, fotoUrl, fechaNacimiento, apellidoPaterno, sexo, categoriaEmpleado) VALUES(
	"Diego",
	"https://www.online-stopwatch.com/picture-pickers/magic-mirror/",
	"1999-09-20",
	"Morales",
	"M",
	"Cuidador"
),(
	"Jose",
	"http://placekitten.com/180/200",
	"1999-07-15",
	"Ivanov",
	"M",
	"Cuidador"
),(
	"Felipe",
	"http://placekitten.com/280/320",
	"2000-01-02",
	"de Jesus Rivera",
	"M",
	"Veterinario"
),(
	"Mariano",
	"http://placekitten.com/180/200",
	"1999-09-20",
	"Mendoza",
	"M",
	"Cuidador"
);
INSERT INTO empleado(nombre, fechaNacimiento, apellidoPaterno, sexo, categoriaEmpleado) VALUES(
	"Giovanni",
	"1999-09-20",
	"Sánchez",
	"M",
	"Veterinario"
);
SELECT * from empleado;
CREATE TABLE zona (
	idZona INT NOT NULL AUTO_INCREMENT,	
	nombreZona VARCHAR(50) NOT NULL,
	fechaInauguracion DATE,
	descripcion VARCHAR(100),
	status CHAR(1) NOT NULL DEFAULT 'A',
	PRIMARY KEY (idZona)
);
CREATE TABLE especie (
	idEspecie INT NOT NULL AUTO_INCREMENT,
	idZona INT,	
	nombre VARCHAR(50) NOT NULL,
	nombreCientifico VARCHAR(100) NOT NULL,
	fotoUrl VARCHAR(200),
	longevidad INT,
	distribucionGeografica VARCHAR(100),
	status CHAR(1) NOT NULL DEFAULT 'A',
	PRIMARY KEY (idEspecie),
 	FOREIGN KEY(idZona) REFERENCES zona(idZona)
);
describe zona;
describe especie;
INSERT INTO zona (nombreZona)
VALUES ('Acuario'),
       ('Zona 1'),
       ('Zona 2');
INSERT INTO especie (idZona,nombre,nombreCientifico)
VALUES (1,'Mantarraya','Mobula birostris'),
       (1,'Delfin','Delphinidae'),
       (2,'Leon','Panthera leo'),
       (2,'Tigre','Panthera tigris');
INSERT INTO especie (idZona,nombre,nombreCientifico,distribucionGeografica)
VALUES (3,'Gorila','Gorilla','Sabanas africanas');
SELECT * FROM zona;
SELECT * FROM especie;
CREATE TABLE animal(
    idAnimal INT NOT NULL AUTO_INCREMENT,
    idEspecie INT NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    sexo CHAR(1) NOT NULL,
    fechaNacimiento DATE,
    status CHAR(1) NOT NULL DEFAULT 'A', 
    PRIMARY KEY (idAnimal),
    FOREIGN KEY (idEspecie) REFERENCES especie(idEspecie)
);
describe animal;
INSERT INTO animal (idEspecie, nombre, sexo, fechaNacimiento)
VALUES (1, 'Manta', 'H', '2000-12-09'),
       (2, 'Verdell', 'M', '2005-03-11'),
       (2, 'Flipper', 'M', '2003-12-03'),
       (5, 'Chita', 'H', '2009-08-07'),
       (5, 'Jaimico', 'M', '2012-03-06');
SELECT * FROM animal;
CREATE TABLE revision (
	idRevision INT NOT NULL AUTO_INCREMENT,
	idEmpleado INT NOT NULL,
	idZona INT NOT NULL,
	descripcion VARCHAR(300) NOT NULL,
	fecha DATETIME NOT NULL,
	status CHAR(1) NOT NULL DEFAULT 'A',
	PRIMARY KEY (idRevision),
	FOREIGN KEY (idEmpleado) REFERENCES empleado(idEmpleado),
	FOREIGN KEY (idZona) REFERENCES zona(idZona)
);
CREATE TABLE observacion (
	idObservacion INT NOT NULL AUTO_INCREMENT,
	idEmpleado INT NOT NULL,
	idAnimal INT NOT NULL,
	observaciones VARCHAR(300) NOT NULL,
	fecha DATETIME NOT NULL,
	status CHAR(1) NOT NULL DEFAULT 'A',
	PRIMARY KEY (idObservacion),
	FOREIGN KEY (idEmpleado) REFERENCES empleado(idEmpleado),
	FOREIGN KEY (idAnimal) REFERENCES animal(idAnimal)
);
describe revision;
describe observacion;
INSERT INTO revision(idEmpleado, idZona, descripcion, fecha)
VALUES (1, 1, 'Desparacitación programada', NOW()),
       (1, 1, 'Vacunas programadas', NOW()),
       (2, 1, 'Examen general programado', NOW()),
       (4, 2, 'Vacunas programadas', NOW()),
       (4, 2, 'Sin revision', NOW());
INSERT INTO observacion(idEmpleado, idAnimal, observaciones, fecha)
VALUES (2, 1, 'Sin observaciones', NOW()),
       (2, 1, 'Progrmar examen general', NOW()),
       (2, 3, 'Sin observaciones', NOW()),
       (5, 4, 'Programar desparacitación', NOW()),
       (5, 4, 'Progrmar vacunas', NOW());
SELECT * FROM revision;
SELECT * FROM observacion;