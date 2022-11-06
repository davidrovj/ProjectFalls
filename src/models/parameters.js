const mysql = require('mysql')

connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'proyect'
})

let modelParams = {}

modelParams.getParameters = (callback) => {
    if (connection) {
        connection.query(
            'SELECT * FROM parameters',
            (err, rows) => {
                if(err) {
                    throw err
                } else {
                    callback(null, rows)
                }
            })
    }
}

modelParams.insertParameters = (parametersData, callback) => {
    if (connection) {
        connection.query(
            'INSERT INTO parameters SET ?', parametersData,
            (err, result) => {
                if (err) {
                    throw err
                } else {
                    callback(null, {
                        
                    })
                }
            }
        )
    }
}

module.exports = modelParams