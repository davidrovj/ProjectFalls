const mysql = require('mysql')

connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'proyect'
})

let modelJefe = {}

// *******************************************************
// operaciones con la tabla "jefe"
modelJefe.getJefes = (callback) => {
    if (connection) {
        connection.query(
            'SELECT * FROM jefe ORDER BY id',
            (err, rows) => {
                if(err) {
                    throw err
                } else {
                    callback(null, rows)
                }
            })
    }
}

modelJefe.insertJefe = (jefeData, callback) => {
    if (connection) {
        connection.query("INSERT INTO jefe SET ?", jefeData,
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

modelJefe.updateJefe = (jefeData, callback) => {
    if (connection) {
        const sql = `
            UPDATE jefe SET
            nombre = ${connection.escape(jefeData.nombre)},
            telefono = ${connection.escape(jefeData.telefono)},
            WHERE id = ${connection.escape(jefeData.id)} 
        `

        connection.query(sql, (err, result) => {
            if (err) {
                throw err
            } else {
                callback(null, {
                    "msg": "success"
                })
            }
        })
    }
}

modelJefe.deleteJefe = (id, callback) => {
    if(connection) {
        let sql = `
            SELECT * FROM jefe WHERE id = ${connection.escape(id)}
        `
        connection.query(sql, (err, row) => {
            if (row) {
                let sql = `
                    DELETE FROM jefe WHERE id = ${id}
                `
                connection.query(sql, (err, result) => {
                    if (err) {
                        throw err
                    } else {
                        callback(null, {
                            msg: "deleted"
                        })
                    }
                })
            } else {
                callback (null, {
                    msg: "not exists"
                })
            }
        })
    }
}

// ****************************************************************

module.exports = modelJefe