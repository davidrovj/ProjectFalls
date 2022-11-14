const Record = require('../models/historial')

function restRecord (app){
    app.get('/record', (req, res) => {
        Record.getHistorial((err,data) => {
            res.status(200).json(data)
        })
    })

    app.post('/record', (req, res) => {
        const recordData = {
            trabajador: req.body.trabajador,
            dispositivo: req.body.dispositivo,
            //macaddress: req.body.macaddress,
            hora: req.body.hora,
            fecha: req.body.fecha
        }

        Record.insertHistorial(recordData, (err, data) => {
            if (data && data.insertFecha) {
                res.json({
                    success: true,
                    msg: "Se ha registrado el dispositivo",
                    data: data
                })
            } else {
                res.status(500).json({
                    success: false,
                    msg: "Error"
                })
            }
        })
    })
}

module.exports = restRecord