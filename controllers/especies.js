const create = require('../helpers/create');
const deleteItem = require('../helpers/delete');
const { queryBySelectedFields, queryById } = require('../helpers/query');
const update = require('../helpers/update');

function createEspecie(req, res) {
    create(req.body, 'especie').then(results => {
        return res.json(req.body);
    }).catch(err => {
        res.status(400).json({
            Error: err.sqlMessage
        })
    });
}

function getEspeciesBySeletedFields(req, res) {
    queryBySelectedFields('especie', req.query, ['idEspecie', 'idZona'])
        .then(results => {
            return res.json(results);
        }).catch(err => {
            res.status(400).json({
                Error: err.sqlMessage
            })
        });
}
function getEspecieById(req, res) {
    queryById('especie', req.params.idEspecie)
        .then(results => {
            return res.json(results);
        }).catch(err => {
            res.status(400).json({
                Error: err.sqlMessage
            })
        });
}

function updateEspecie(req, res) {
    update('especie', req.params.idEspecie, req.query, ['idZona'])
        .then(results => {
            return res.json(results);
        }).catch(err => {
            res.status(400).json({
                Error: err.sqlMessage
            })
        });
}

function deleteEspecie(req, res) {
    deleteItem('especie', req.params.idEspecie)
        .then(results => {
            return res.json(results);
        }).catch(err => {
            res.status(400).json({
                Error: err.sqlMessage
            })
        });
}

module.exports = {
    createEspecie,
    getEspeciesBySeletedFields,
    getEspecieById,
    updateEspecie,
    deleteEspecie,
}