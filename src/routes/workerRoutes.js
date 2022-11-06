const Worker = require('../models/trabajador')

function restWorkers(app){
    app.get('/workers', (req, res) => {
        Worker.getTrabajadores((err,data) => {
            res.status(200).json(data)
        })
    })

    app.post('/workers', (req, res) => {
        const workerData = {
            id: null,
            nombre: req.body.nombre,
            edad: req.body.edad,
            departamento: req.body.departamento,
            puesto: req.body.puesto,
            telefono: req.body.telefono,
            jefe: req.body.jefe,
            dispositivo: req.body.dispositivo
        }

        Worker.insertTrabajador(workerData, (err, data) => {
            if (data && data.insertId) {
                console.log(data)
                res.json({
                    success: true,
                    msg: "Se ha registrado al trabajador",
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

    app.put('/workers/:id', (req, res) => {
        const workerData = {
            id: null,
            nombre: req.body.nombre,
            edad: req.body.edad,
            departamento: req.body.departamento,
            puesto: req.body.puesto,
            telefono: req.body.telefono,
            jefe: req.body.jefe,
            dispositivo: req.body.dispositivo
        }
        
        Worker.updateTrabajador(userData, (err, data) => {
            if (data && data.msg) {
                res.json(data)
            } else {
                success: false,
                msg = "error"
            }
        })
    })

    app.delete('/workers/:id', (req, res) => {
        Worker.deleteTrabajador(req.params.id, (err, data) => {
            if (data && data.msg === 'deleted' || data.msg === 'not exists') {
                res.json ({
                    success: true,
                    data
                })
            } else {
                res.status(500).json({
                    msg: 'Error'
                })
            }
        })
    })
}

module.exports = restWorkers