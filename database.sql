CREATE DATABASE zoo;
USE zoo;
CREATE TABLE empleado(
	idEmpleado INT NOT NULL AUTO_INCREMENT,
	nombreEmpleado VARCHAR(50) NOT NULL,
	fotoUrlEmpleado VARCHAR(200), 
	fechaNacimientoEmpleado DATE NOT NULL,
	apellidoPaterno VARCHAR(50) NOT NULL,
	sexoEmpleado CHAR(1),
	categoriaEmpleado VARCHAR(20)NOT NULL,
	PRIMARY KEY(idEmpleado)
	
);
CREATE TABLE zona (
	idZona INT NOT NULL AUTO_INCREMENT,	
	nombreZona VARCHAR(50) NOT NULL UNIQUE,
	fechaInauguracion DATE,
	descripcionZona VARCHAR(100),
	PRIMARY KEY (idZona)
);
CREATE TABLE especie (
	idEspecie INT NOT NULL AUTO_INCREMENT,
	idZona INT,	
	nombreEspecie VARCHAR(50) NOT NULL UNIQUE,
	nombreCientifico VARCHAR(100) NOT NULL UNIQUE,
	fotoUrlEspecie VARCHAR(200),
	longevidad INT,
	distribucionGeografica VARCHAR(100),
	PRIMARY KEY (idEspecie),
 	FOREIGN KEY(idZona) REFERENCES zona(idZona)
);
CREATE TABLE animal(
    idAnimal INT NOT NULL AUTO_INCREMENT,
    idEspecie INT NOT NULL,
    nombreAnimal VARCHAR(50) NOT NULL UNIQUE,
    sexoAnimal CHAR(1) NOT NULL,
    fechaNacimientoAnimal DATE,
    PRIMARY KEY (idAnimal),
    FOREIGN KEY (idEspecie) REFERENCES especie(idEspecie)
);
CREATE TABLE revision (
	idRevision INT NOT NULL AUTO_INCREMENT,
	idEmpleado INT NOT NULL,
	idZona INT NOT NULL,
	descripcionRevision VARCHAR(300) NOT NULL,
	fechaRevision DATETIME NOT NULL,
	PRIMARY KEY (idRevision),
	FOREIGN KEY (idEmpleado) REFERENCES empleado(idEmpleado),
	FOREIGN KEY (idZona) REFERENCES zona(idZona)
);
CREATE TABLE observacion (
	idObservacion INT NOT NULL AUTO_INCREMENT,
	idEmpleado INT NOT NULL,
	idAnimal INT NOT NULL,
	observaciones VARCHAR(300) NOT NULL,
	fechaObservacion DATETIME NOT NULL,
	PRIMARY KEY (idObservacion),
	FOREIGN KEY (idEmpleado) REFERENCES empleado(idEmpleado),
	FOREIGN KEY (idAnimal) REFERENCES animal(idAnimal)
);
describe empleado;
describe zona;
describe especie;
describe animal;
describe revision;
describe observacion;
INSERT INTO zona (nombreZona,fechaInauguracion,descripcionZona)
VALUES ('Acuario','2000-01-02','Zona de animales marinos'),
       ('Cascada','2000-01-02','Zona basada en Oaxaca'),
       ('Safari','2000-01-02','Zona basada en la sabana Africana'),
       ('Lago','2000-01-02','Zona de animales de agua dulce'),
       ('Pastizales','2000-01-02','Zona de animales de pastizal'),
       ('Desiertos','2000-01-02','Animales de desierto'),
       ('Bosques templados','2000-01-02','Basado en el norte de America'),
       ('Granja','2000-01-02','Zona con animales de granja'),
       ('Mundo reptilia','2000-01-02','Zona de reptiles');
INSERT INTO especie (idZona,nombreEspecie,nombreCientifico, fotoUrlEspecie, longevidad, distribucionGeografica)
VALUES (1,'Mantarraya','Mobula birostris', 'https://bit.ly/38ejdrS', 12, 'Oceano pasifico'),
       (1,'Delfin','Delphinidae', 'https://bit.ly/38groDL', 35, 'Regiones marinas tropicales '),
       (2,'Leon','Panthera leo', 'https://bit.ly/3sWiuU1', 29, 'Africa central y oriental'),
       (3,'Tigre','Panthera tigris','https://bit.ly/3ejoty2', 30 , 'Sumatra, Java y Bali'),
       (7,'Gorila','Gorilla', 'https://bit.ly/3rnh8Bq', 43, 'Sumatra y Borneo'),
       (1, 'Oso polar', 'Ursus maritimus', 'https://bit.ly/2NZN7Jx', 35, 'Eurasia y norteamérica'),
       (3, 'Jirafa', 'Giraffa camelopardalis', 'https://bit.ly/3sQlqBm', 40, 'Zonas abiertas de África al sur'),
       (6, 'Escorpión', 'Heloderma horridum horridum', 'https://bit.ly/3ccpKUS', 23, 'Desde el sur de Sinaloa hasta Chiapas'),
       (4, 'Pez cirujano', 'Pez cirujano', 'https://bit.ly/3c9lp4N', 12, 'Regiones marinas tropicales y subtropicales');
INSERT INTO empleado(nombreEmpleado, fotoUrlEmpleado, fechaNacimientoEmpleado, apellidoPaterno, sexoEmpleado, categoriaEmpleado) VALUES(
    "Diego",
    "http://placekitten.com/180/123",
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
    "http://placekitten.com/180/124",
    "1999-09-20",
    "Mendoza",
    "M",
    "Cuidador"
),(
    "Luis",
    "http://placekitten.com/180/125",
    "1997-03-20",
    "Robles",
    "M",
    "Cuidador"
),(
    "Paulina",
    "http://placekitten.com/180/126",
    "1995-05-12",
    "Lopez",
    "F",
    "Veterinario"
),(
    "Angel",
    "http://placekitten.com/180/126",
    "1989-12-11",
    "Ruiz",
    "M",
    "Veterinario"
),(
    "Daniela",
    "http://placekitten.com/180/127",
    "1992-03-14",
    "Cruz",
    "F",
    "Cuidador"
),(
    "Perla",
    "http://placekitten.com/180/128",
    "1993-05-15",
    "Rangel",
    "F",
    "Cuidador"
);
INSERT INTO animal (idEspecie, nombreAnimal, sexoAnimal, fechaNacimientoAnimal)
VALUES (1, 'Manta', 'H', '2000-12-09'),
       (2, 'Verdell', 'M', '2005-03-11'),
       (2, 'Flipper', 'M', '2003-12-03'),
       (5, 'Chita', 'H', '2009-08-07'),
       (7, 'Syrka', 'H', '2012-03-05'),
       (5, 'Blacky', 'M', '2012-01-12'),
       (6, 'Heiko', 'M', '2012-02-21'),
       (4, 'Grass', 'M', '2012-09-15'),
       (4, 'Sen', 'M', '2012-07-19');
INSERT INTO revision(idEmpleado, idZona, descripcionRevision, fechaRevision)
VALUES (3, 1, 'Desparacitación programada', NOW()),
       (3, 1, 'Vacunas programadas', NOW()),
       (3, 1, 'Examen general programado', NOW()),
       (6, 2, 'Vacunas programadas', NOW()),
       (7, 2, 'Revición mensual completa', NOW()),
       (7, 2, 'Chequeo general', NOW()),
       (7, 2, 'Cambiar alimentación', NOW()),
       (6, 2, 'Vacunación finalizada', NOW()),
       (3, 2, 'Revición completa', NOW()),
       (7, 2, 'Medicamento asignado', NOW());

INSERT INTO observacion(idEmpleado, idAnimal, observaciones, fechaObservacion)
VALUES (2, 8, 'Sin observaciones', NOW()),
       (1, 5, 'Progrmar examen general', NOW()),
       (5, 3, 'Sin observaciones', NOW()),
       (4, 9, 'Programar desparacitación', NOW()),
       (3, 4, 'Comportamiento extraño', NOW()),
       (9, 6, 'Come muy poco', NOW()),
       (8, 1, 'Esta muy inquieta', NOW()),
       (1, 2, 'Se lastimó una pata', NOW()),
       (5, 7, 'Se le cae mucho pelo', NOW());
SELECT * FROM empleado;
SELECT * FROM zona;
SELECT * FROM especie;
SELECT * FROM animal;
SELECT * FROM revision;
SELECT * FROM observacion;
SELECT nombreEspecie,nombreCientifico,fotoUrlEspecie,longevidad,distribucionGeografica,nombreZona FROM especie JOIN zona ON especie.idZona = zona.idZona;
SELECT nombreZona,COUNT(*) AS cantidadEspeciesPorZona  FROM (SELECT nombreEspecie,nombreCientifico,fotoUrlEspecie,longevidad,distribucionGeografica,nombreZona FROM especie LEFT JOIN zona ON especie.idZona = zona.idZona) AS selec GROUP BY nombreZona;
SELECT observaciones,fechaObservacion,nombreAnimal,nombreEmpleado,apellidoPaterno FROM observacion JOIN empleado ON observacion.idEmpleado = empleado.idEmpleado JOIN animal ON observacion.idAnimal = animal.idAnimal;
SELECT descripcionRevision,fechaRevision,nombreZona,nombreEmpleado,apellidoPaterno FROM revision JOIN empleado ON revision.idEmpleado = empleado.idEmpleado JOIN zona ON revision.idZona = zona.idZona;
SELECT nombreAnimal,nombreEspecie,nombreCientifico,sexoAnimal,fechaNacimientoAnimal FROM animal JOIN especie ON especie.idEspecie = animal.idEspecie;