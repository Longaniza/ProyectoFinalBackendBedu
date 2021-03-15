const { obtainFieldsAndValueUpdate } = require('./helpers');

function update(tableName, id, selectionFields, numberValues) {
    return new Promise(function (resolve, reject) {
        db.query(`UPDATE ${tableName} SET ${obtainFieldsAndValueUpdate(selectionFields, numberValues)} WHERE id${tableName.charAt(0).toUpperCase() + tableName.slice(1)} = ${id};`, function (error, results, fields) {
            if (error) {
                reject(error);
            }
            else {
                resolve(results);
            }
        });
    })
}

module.exports = update;
