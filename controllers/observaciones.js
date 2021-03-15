const create = require('../helpers/create');
const deleteItem = require('../helpers/delete');
const { queryBySelectedFields, queryById } = require('../helpers/query');
const update = require('../helpers/update');

function createObservacion(req, res) {
    create(req.body, 'observacion').then(results => {
        return res.json(req.body);
    }).catch(err => {
        res.status(400).json({
            Error: err.sqlMessage
        })
    });
}

function getObservacionesBySeletedFields(req, res) {
    queryBySelectedFields('observacion', req.query, ['idObservacion', 'idEmpleado', 'idAnimal'])
        .then(results => {
            return res.json(results);
        }).catch(err => {
            res.status(400).json({
                Error: err.sqlMessage
            })
        });
}
function getObservacionById(req, res) {
    queryById('observacion', req.params.idObservacion)
        .then(results => {
            return res.json(results);
        }).catch(err => {
            res.status(400).json({
                Error: err.sqlMessage
            })
        });
}

function updateObservacion(req, res) {
    update('observacion', req.params.idObservacion, req.query,['idEmpleado', 'idAnimal'])
        .then(results => {
            return res.json(results);
        }).catch(err => {
            res.status(400).json({
                Error: err.sqlMessage
            })
        });
}

function deleteObservacion(req, res) {
    deleteItem('observacion', req.params.idObservacion)
        .then(results => {
            return res.json(results);
        }).catch(err => {
            res.status(400).json({
                Error: err.sqlMessage
            })
        });
}

module.exports = {
    createObservacion,
    getObservacionesBySeletedFields,
    getObservacionById,
    updateObservacion,
    deleteObservacion,
}