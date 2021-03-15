const {obtainFieldsAndValues} = require('./helpers');

function create(body, tableName) {
    const { fields, values } = obtainFieldsAndValues(body);
    return new Promise(function (resolve, reject) {
        db.query(`INSERT INTO ${tableName} (${fields}) VALUES (${values});`, function (error, results, fields) {
            // error will be an Error if one occurred during the query
            // results will contain the results of the query
            // fields will contain information about the returned results fields (if any)
            if (error) {
                reject(error);
            }
            else {
                resolve(results);
            }
        });
    })
}
module.exports = create;
