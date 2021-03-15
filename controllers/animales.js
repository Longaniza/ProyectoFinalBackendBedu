const create = require('../helpers/create');
const deleteItem = require('../helpers/delete');
const { queryBySelectedFields, queryById } = require('../helpers/query');
const update = require('../helpers/update');

function createAnimal(req, res) {
    create(req.body, 'animal').then(results => {
        return res.json(req.body);
    }).catch(err => {
        res.status(400).json({
            Error: err.sqlMessage
        })
    });
}

function getAnimalesBySeletedFields(req, res) {
    queryBySelectedFields('animal', req.query, ['idAnimal', 'idEspecie'])
        .then(results => {
            return res.json(results);
        }).catch(err => {
            res.status(400).json({
                Error: err.sqlMessage
            })
        });
}
function getAnimalById(req, res) {
    queryById('animal', req.params.idAnimal)
        .then(results => {
            return res.json(results);
        }).catch(err => {
            res.status(400).json({
                Error: err.sqlMessage
            })
        });
}

function updateAnimal(req, res) {
    update('animal', req.params.idAnimal, req.query, ['idEspecie'])
        .then(results => {
            return res.json(results);
        }).catch(err => {
            res.status(400).json({
                Error: err.sqlMessage
            })
        });
}

function deleteAnimal(req, res) {
    deleteItem('animal', req.params.idAnimal)
        .then(results => {
            return res.json(results);
        }).catch(err => {
            res.status(400).json({
                Error: err.sqlMessage
            })
        });
}

module.exports = {
    createAnimal,
    getAnimalesBySeletedFields,
    getAnimalById,
    updateAnimal,
    deleteAnimal,
}