const create = require('../helpers/create');
const deleteItem = require('../helpers/delete');
const { queryBySelectedFields, queryById } = require('../helpers/query');
const update = require('../helpers/update');

function createEmpleado(req, res) {
    create(req.body, 'empleado').then(results => {
        return res.json(req.body);
    }).catch(err => {
        res.status(400).json({
            Error: err.sqlMessage
        })
    });
}

function getEmpleadosBySeletedFields(req, res) {
    queryBySelectedFields('empleado', req.query)
        .then(results => {
            return res.json(results);
        }).catch(err => {
            res.status(400).json({
                Error: err.sqlMessage
            })
        });
}
function getEmpleadoById(req, res) {
    queryById('empleado', req.params.idEmpleado)
        .then(results => {
            return res.json(results);
        }).catch(err => {
            res.status(400).json({
                Error: err.sqlMessage
            })
        });
}

function updateEmpleado(req, res) {
    update('empleado', req.params.idEmpleado, req.query)
        .then(results => {
            return res.json(results);
        }).catch(err => {
            res.status(400).json({
                Error: err.sqlMessage
            })
        });
}

function deleteEmpleado(req, res) {
    deleteItem('empleado', req.params.idEmpleado)
        .then(results => {
            return res.json(results);
        }).catch(err => {
            res.status(400).json({
                Error: err.sqlMessage
            })
        });
}

module.exports = {
    createEmpleado,
    getEmpleadosBySeletedFields,
    getEmpleadoById,
    updateEmpleado,
    deleteEmpleado,
}