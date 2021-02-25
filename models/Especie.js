/* Clase que representa a una especie de la plataforma*/
class Especie {
    constructor(id, nombre, nombreCientifico, foto, longevidad, distribucionGeografica, ubicacionZona, fechaActualizacion) {
        this.id = id;
        this.nombre = nombre;
        this.nombreCientifico = nombreCientifico;
        this.foto = foto;
        this.longevidad = longevidad;
        this.distribucionGeografica = distribucionGeografica;
        this.ubicacionZona = ubicacionZona;
        this.fechaActualizacion = fechaActualizacion;
    }
}
module.exports = Especie;
