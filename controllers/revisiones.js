const create = require('../helpers/create');
const deleteItem = require('../helpers/delete');
const { queryBySelectedFields, queryById } = require('../helpers/query');
const update = require('../helpers/update');

function createRevision(req, res) {
    create(req.body, 'revision').then(results => {
        return res.json(req.body);
    }).catch(err => {
        res.status(400).json({
            Error: err.sqlMessage
        })
    });
}

function getRevisionesBySeletedFields(req, res) {
    queryBySelectedFields('revision', req.query, ['idRevision', 'idEmpleado', 'idZona'])
        .then(results => {
            return res.json(results);
        }).catch(err => {
            res.status(400).json({
                Error: err.sqlMessage
            })
        });
}
function getRevisionById(req, res) {
    queryById('revision', req.params.iRevision)
        .then(results => {
            return res.json(results);
        }).catch(err => {
            res.status(400).json({
                Error: err.sqlMessage
            })
        });
}

function updateRevision(req, res) {
    update('revision', req.params.idRevision, req.query, ['idEmpleado', 'idZona'])
        .then(results => {
            return res.json(results);
        }).catch(err => {
            res.status(400).json({
                Error: err.sqlMessage
            })
        });
}

function deleteRevision(req, res) {
    deleteItem('revision', req.params.idRevision)
        .then(results => {
            return res.json(results);
        }).catch(err => {
            res.status(400).json({
                Error: err.sqlMessage
            })
        });
}

module.exports = {
    createRevision,
    getRevisionesBySeletedFields,
    getRevisionById,
    updateRevision,
    deleteRevision,
}