const mysql = require('mysql')

connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'proyect'
})

let modelTrabajador = {}

// *******************************************************
// operaciones con la tabla "trabajador"
modelTrabajador.getTrabajadores = (callback) => {
    if (connection) {
        connection.query(
            'SELECT trabajador.id,trabajador.nombre,trabajador.edad,trabajador.departamento,trabajador.puesto,trabajador.telefono,jefe.nombre as jefe,dispositivo,jefe.telefono as jefe_telefono FROM trabajador INNER JOIN jefe ON trabajador.jefe=jefe.id WHERE trabajador.id=1',
            (err, rows) => {
                if(err) {
                    throw err
                } else {
                    callback(null, rows)
                }
            })
    }
}

modelTrabajador.insertTrabajador = (trabajadorData, callback) => {
    if (connection) {
        connection.query(
            'INSERT INTO trabajador SET ?', trabajadorData,
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

modelTrabajador.updateTrabajador = (trabajadorData, callback) => {
    if (connection) {
        const sql = `
            UPDATE jefe SET
            nombre = ${connection.escape(trabajadorData.nombre)},
            edad = ${connection.escape(trabajadorData.edad)},
            departamento = ${connection.escape(trabajadorData.departamento)}
            puesto = ${connection.escape(trabajadorData.puesto)},
            telefono = ${connection.escape(trabajadorData.telefono)},
            jefe = ${connection.escape(trabajadorData.jefe)},
            dispositivo = ${connection.escape(trabajadorData.dispositivo)},
            WHERE id = ${connection.escape(trabajadorData.id)}
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

modelTrabajador.deleteTrabajador = (id, callback) => {
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
}

module.exports = modelTrabajador