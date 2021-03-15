const { obtainFieldsAndValueQuery, obtainFieldsForSelect } = require('./helpers');
function queryBySelectedFields(tableName, selectionFields, numberValues) {
    return new Promise(function (resolve, reject) {
        db.query(`SELECT ${Object.keys(selectionFields).length ? obtainFieldsForSelect(selectionFields) : '*'} 
        FROM ${tableName} ${obtainFieldsAndValueQuery(selectionFields, numberValues)} ${selectionFields.limit ? `LIMIT ${selectionFields.limit} ` : ''};`, function (error, results, fields) {
            if (error) {
                reject(error);
            }
            else {
                resolve(results);
            }
        });
    })
}
function queryById(tableName, id) {
    return new Promise(function (resolve, reject) {
        db.query(`SELECT * FROM ${tableName} WHERE id${tableName.charAt(0).toUpperCase() + tableName.slice(1)} = ${id}`, function (error, results, fields) {
            if (error) {
                reject(error);
            }
            else {
                resolve(results);
            }
        });
    })
}
module.exports = {
    queryBySelectedFields,
    queryById
};