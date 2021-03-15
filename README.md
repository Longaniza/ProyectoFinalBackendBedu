# 🫀 Proyecto Backend Fundamentals

El equipo número 13 siente una particular admiración por los animales en todas sus formas, por lo cual se propone hacer un API basado en un zoológico. Esperamos que con este proyecto se puedan hacer ciertas acciones, las cuales serán explicadas más a detalle con ayuda de historias de usuario. De forma general se puede mencionar que esperamos que gracias a esta API, los usuarios visitantes puedan visualizar especies y sus respectivas zonas en el zoológico; así como un usuario administrador pueda controlar informes y observaciones hechas por empleados del zoo, los cuales pueden ser cuidadores o veterinarios. Estos mismos podrán registrar sus respectivos informes.

## Historias de usuario: 

1. Como administrador quiero CREAR empleados para tener un control sobre ellos.

2. Como administrador quiero CREAR animales para saber cuantos tengo para tener control en unidades de cada especie.

3. Como administrador quiero CREAR especies de animales para saber cuántas especies tengo.

4. Como administrador quiero CREAR zonas del zoológico para que mis visitantes tengan conocimiento sobre en qué zona se encuentra cada especie.

5. Como empleado cuidador quiero CREAR información de revisiones para notificar al zoológico sobre la información de una zona.

6. Como empleado veterinario quiero CREAR información de observaciones clínicas para notificar al zoológico si pasa algo malo con la salud de un animal.

7. Como administrador quiero VISUALIZAR una lista de empleados en base a uno de sus atributos para tener mejor reconocimiento de ellos.

8. Como administrador quiero VISUALIZAR una lista de revisiones hechas por los empleados para saber qué es lo que le pasó al animal.

9. Como administrador quiero VISUALIZAR una lista de observaciones clínicas hechas por los empleados para saber el progreso de salud del animal.

10. Como usuario quiero VISUALIZAR una lista de animales en base a uno de sus atributos para identificarlos de los demás.

11. Como usuario quiero VISUALIZAR una lista de especies de animales en base a uno de sus atributos para conocer más acerca de la especie.

12. Como usuario quiero VISUALIZAR una lista de zonas del zoológico con las especies que habitan en ella para diferenciarla de las demás zonas.

13. Como usuario quiero visualizar información general de cada una de las especies existentes para conocer información interesante sobre ellas.

14. Como administrador quiero EDITAR empleados para tener un control sobre ellos.

15. Como administrador quiero EDITAR animales para cambiar su información en caso de ser necesario.  

16. Como administrador quiero EDITAR especies de animales para relacionarlas con los animales.

17. Como administrador quiero EDITAR zonas del zoológico para cambiar su información en caso de ser necesario. 
 
18. Como administrador quiero ELIMINAR empleados para tener un control sobre ellos.

19. Como administrador quiero ELIMINAR animales para no tenerlos en lista en caso de ser transferidos.

20. Como administrador quiero ELIMINAR especies de animales para no tenerlos en lista en caso de que ya no haya esas especies.

21. Como administrador quiero ELIMINAR zonas del zoológico para no tenerlas en lista en caso de ser clausuradas.

## Modelo de base de datos elegido

En base a las siguientes preguntas se estableció una opinión conjunta entre todos los colaboradores, para determinar cuál sería la mejor herramienta para la creación de la API.

¿Cuáles son las ventajas de usar el modelo relacional en nuestro proyecto?
¿Cuáles son las limitantes de usar el modelo relacional en nuestro proyecto?
¿Qué ventajas ofrece el modelo no relacional a nuestro proyecto?
¿Qué desventajas tiene el uso del modelo no relacional en nuestro proyecto?
¿Qué implementación de base de datos de las que hicimos representa mejor las especificaciones de las entidades del proyecto y por qué?

Para contestar estas preguntas, primeramente el equipo se concentró en establecer el alcance de la base de datos. Se estableció entonces lo reflejado en los diseños previos. Se iba a contar con 6 entidades representando los datos de la API y un solo servidor para hostear estos mismos.

Por un lado tenemos las bases de datos no relacionales. Estas mismas ofrecen muchas ventajas, entre ellas, la versatilidad en los modelos de entidades. Esto nos permite no depender de un modelo estricto, y poder tener mucho más flexibilidad en el momento de poblar los datos. Otra ventaja a considerar con este estilo de base de datos es que crecen de forma horizontal, permitiendo el uso de clusters en lugar de depender de un solo servidor. 

Pero así como existen ventajas, existen desventajas. Bien es cierto, que una desventaja a considerar puede ser que la cantidad de recursos es mucho menor comparado a lo que se nos ofrece con SQL.Aun sea el caso, estas ventajas y desventajas que este tipo de base de datos nos ofrecen solo son características, en nuestro punto de vista, esta características no nos ofrecen nada realmente necesario y no nos dan un extra sobre el utilizar SQL.

SQL puede ser rígido al momento de establecer un diseño para una base de datos, además de solo crecer de forma vertical, dificultando el uso de clusters. Pero realmente todo ello no representa una desventaja clara. No hay problema con la rigidez, realmente  creemos que nuestro diseño es lo suficientemente robusto para no tener limitantes en sus operaciones, además que se planeó desde un principio utilizar un solo servidor para hostear la base de datos.Aunque el escalado de SQL puede ser dificultoso, como este proyecto es pequeño, no vemos necesario perder tiempo en planear un posible crecimiento en la estructura de nuestra base de datos. 

La decisión fue algo complicada, pero al final lo utilizado será un modelo de base de datos relacionales, SQL. El principal punto a favor, es que varios integrantes ya están familiarizados con esta forma de guardar datos, además de la gran cantidad de recursos en internet, debido a la cantidad de años que SQL lleva en el mercado. Creemos que SQL nos ofrece lo necesario para hacer una correcta y rápida implementación para así, poner en funcionamiento nuestra API de zoológico.

## Modelo ER
![](https://raw.githubusercontent.com/Longaniza/ProyectoFinalBackendBedu/master/assets/imgs/ER.jpg)

## Modelo Relacional
![](https://raw.githubusercontent.com/Longaniza/ProyectoFinalBackendBedu/master/assets/imgs/Relacional.jpg)

## Tablas creadas con SQL
![](https://raw.githubusercontent.com/Longaniza/ProyectoFinalBackendBedu/master/assets/imgs/tablasiniciales.png)

### +50 registros iniciales
![](https://raw.githubusercontent.com/Longaniza/ProyectoFinalBackendBedu/master/assets/imgs/registrosiniciales.png)

## Script SQL necesario para la creacion de la base de datos
El script siguiente incluye la creacion de la base de datos, el poblado de mas de 50 registros y 5 consultas complejas.
Estando ya dentro de la terminal,y asegurando que nos encontramos en el mismo directorio donde se encuentra nuestro script SQL, correr el siguiente comando:
``` 
source database.sql;
```
El script en cuestion es el llamado [database.sql](https://github.com/Longaniza/ProyectoFinalBackendBedu/blob/master/database.sql).
