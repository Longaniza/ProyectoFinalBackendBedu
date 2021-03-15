function deleteItem(tableName,id) {
    return new Promise(function (resolve, reject) {
        db.query(`DELETE FROM ${tableName} WHERE id${tableName.charAt(0).toUpperCase() + tableName.slice(1)} = ${id}`, function (error, results, fields) {
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
module.exports = deleteItem;
