const mysql = require('mysql')

connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'proyect'
})

let  modelDispositivo = {}

// *******************************************************
// operaciones con la tabla "dispositivo"
modelDispositivo.getDispositivos = (callback) => {
    if (connection) {
        connection.query(
            'SELECT * FROM dispositivo ORDER BY id',
            (err, rows) => {
                if(err) {
                    throw err
                } else {
                    callback(null, rows)
                }
            })
    }
}

modelDispositivo.insertDispositivo = (dispositivoData, callback) => {
    if (connection) {
        connection.query(
            'INSERT INTO trabajador SET ?', dispositivoData,
            (err, result) => {
                if (err) {
                    throw err
                } else {
                    callback(null, {
                        'insertId': result.insertId,
                    })
                }
            }
        )
    }
}

module.exports = modelDispositivo