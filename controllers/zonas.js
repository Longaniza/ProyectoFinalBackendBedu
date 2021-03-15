const create = require('../helpers/create');
const deleteItem = require('../helpers/delete');
const { queryBySelectedFields, queryById } = require('../helpers/query');
const update = require('../helpers/update');

function createZona(req, res) {
    create(req.body, 'zona').then(results => {
        return res.json(req.body);
    }).catch(err => {
        res.status(400).json({
            Error: err.sqlMessage
        })
    });
}

function getZonasBySeletedFields(req, res) {
    queryBySelectedFields('zona', req.query)
        .then(results => {
            return res.json(results);
        }).catch(err => {
            res.status(400).json({
                Error: err.sqlMessage
            })
        });
}
function getZonaById(req, res) {
    queryById('zona', req.params.idZona)
        .then(results => {
            return res.json(results);
        }).catch(err => {
            res.status(400).json({
                Error: err.sqlMessage
            })
        });
}

function updateZona(req, res) {
    update('zona', req.params.idZona,req.query)
        .then(results => {
            return res.json(results);
        }).catch(err => {
            res.status(400).json({
                Error: err.sqlMessage
            })
        });
}

function deleteZona(req, res) {
    deleteItem('zona', req.params.idZona)
        .then(results => {
            return res.json(results);
        }).catch(err => {
            res.status(400).json({
                Error: err.sqlMessage
            })
        });
}

module.exports = {
    createZona,
    getZonasBySeletedFields,
    getZonaById,
    updateZona,
    deleteZona,
}