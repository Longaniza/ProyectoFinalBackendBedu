function obtainFieldsAndValues(body) {
    const fieldsAndValues = Object.entries(body).reduce((resultObject, valuePair) => {
        resultObject['fields'].push(valuePair[0]);
        (typeof valuePair[1] === 'number') ? resultObject['values'].push(valuePair[1]) : resultObject['values'].push(`'${valuePair[1]}'`);
        return resultObject;
    }, {
        fields: [],
        values: []
    });
    return {
        fields: fieldsAndValues.fields.toString(),
        values: fieldsAndValues.values.toString()
    }
}
function obtainFieldsForSelect(body) {
    const fields = Object.entries(body).reduce((resultObject, valuePair) => {
        if (valuePair[0] !== 'limit') {
            resultObject.push(valuePair[0]);
        }
        return resultObject;
    }, []);
    return fields.toString();
}
function obtainFieldsAndValueQuery(query, numberValues) {
    if (!numberValues) {
        numberValues = [];
    }
    const sqlQuery = Object.entries(query).reduce((resultObject, valuePair) => {
        let firstQuery = true;
        if (valuePair[1].trim().length && valuePair[0] !== 'limit') {
            if (firstQuery) {
                firstQuery = false;
                if (!numberValues.includes(valuePair[0])) {
                    resultObject += `WHERE ${valuePair[0]} = '${valuePair[1]}'`;
                }
                else {
                    resultObject += `WHERE ${valuePair[0]} = ${valuePair[1]}`
                }
            }
            else {
                if (!numberValues.includes(valuePair[0])) {
                    resultObject += ` AND ${valuePair[0]} = '${valuePair[1]}'`;
                }
                else {
                    resultObject += ` AND ${valuePair[0]} = ${valuePair[1]}`;
                }

            }
        }
        return resultObject;
    }, '');
    return sqlQuery;
}
function obtainFieldsAndValueUpdate(query, numberValues) {
    if (!numberValues) {
        numberValues = [];
    }
    const sqlQuery = Object.entries(query).reduce((resultObject, valuePair,index, array) => {
        if (valuePair[1].trim().length) {
            if (index === array.length - 1) {
                if (!numberValues.includes(valuePair[0])) {
                    resultObject += `${valuePair[0]} = '${valuePair[1]}'`;
                }
                else {
                    resultObject += `${valuePair[0]} = ${valuePair[1]}`;
                }
            }
            else {
                if (!numberValues.includes(valuePair[0])) {
                    resultObject += ` ${valuePair[0]} = '${valuePair[1]}',`;
                }
                else {
                    resultObject += ` ${valuePair[0]} = ${valuePair[1]},`;
                }
            }
        }
        return resultObject;
    }, '');
    return sqlQuery;
}
module.exports = {
    obtainFieldsAndValues,
    obtainFieldsAndValueQuery,
    obtainFieldsForSelect,
    obtainFieldsAndValueUpdate
};