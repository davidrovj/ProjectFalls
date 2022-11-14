const mysql = require('mysql')

connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'proyect'
})

let modelHistorial = {}

// *******************************************************
// operaciones con la tabla "trabajador"
modelHistorial.getHistorial = (callback) => {
    if (connection) {
        connection.query(
            'SELECT * FROM historial ORDER BY trabajador',
            (err, rows) => {
                if(err) {
                    throw err
                } else {
                    callback(null, rows)
                }
            })
    }
}

modelHistorial.insertHistorial = (historialData, callback) => {
    if (connection) {
        connection.query(
            'INSERT INTO historial SET ?', historialData,
            (err, result) => {
                if (err) {
                    throw err
                } else {
                    callback(null, {
                        'insertFecha': result.insertFecha,
                    })
                }
            }
        )
    }
}

/*modelHistorial.updateTrabajador = (historialData, callback) => {
    if (connection) {
        const sql = `
            UPDATE jefe SET
            nombre = ${connection.escape(historialData.nombre)},
            edad = ${connection.escape(historialData.edad)},
            departamento = ${connection.escape(historialData.departamento)}
            puesto = ${connection.escape(historialData.puesto)},
            telefono = ${connection.escape(historialData.telefono)},
            jefe = ${connection.escape(historialData.jefe)},
            dispositivo = ${connection.escape(historialData.dispositivo)},
            WHERE id = ${connection.escape(historialData.id)}
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

modelHistorial.deleteTrabajador = (id, callback) => {
    if(connection) {
        let sql = `
            SELECT * FROM trabajador WHERE id = ${connection.escape(id)}
        `
        connection.query(sql, (err, row) => {
            if (row) {
                let sql = `
                    DELETE FROM trabajador WHERE id = ${id}
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
}*/

module.exports = modelHistorial