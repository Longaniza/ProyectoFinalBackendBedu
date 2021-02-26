/* Clase que representa a un empleado de la plataforma*/
class Empleado {
  constructor(id, nombre_empleado, foto_empleado, edad, apellido_paterno, sexo, categoria_empleado) {
    this.id = id;
    this.nombre_empleado = nombre_empleado;
    this.foto = foto_empleado;
    this.edad = edad;
    this.apellido_paterno = apellido_paterno;
    this.sexo = sexo;
    this.categoria_empleado = categoria_empleado;
  }
}
module.exports = Empleado;