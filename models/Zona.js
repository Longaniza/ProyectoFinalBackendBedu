// importamos por separado los métodos de Sequelize y los tipos de dato.
const { Sequelize, DataTypes } = require('sequelize');
// importamos sequelize con la opción de memory para forzar al gestor a almacenarla en la memoria.
const sequelize = new Sequelize('mysql::memory:');
//creamos el modelo para usuario
const Zona = sequelize.define('Zona', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey : true,
    allowNull: false, 
    autoIncrement: true,
  },
  nombreZona:{
    type:DataTypes.STRING(50),
    unique: true,
    allowNull: false  
  },
  fechaInaguracion:DataTypes.DATEONLY,
  descripcion:DataTypes.STRING(100),
  status:{
    type:DataTypes.CHAR(1),
    allowNull: false,
    defaultValue: 'A'   
  },
},{ tableName: 'zona'});

// exportamos el modelo.
module.exports = Zona;