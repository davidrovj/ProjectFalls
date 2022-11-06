const Boss = require('../models/jefe')

function restBosses(app){
    app.get('/bosses', (req, res) => {
        Boss.getJefes((err,data) => {
            res.status(200).json(data)
        })
    })

    app.post('/bosses', (req, res) => {
        const bossData = {
            id: null,
            nombre: req.body.nombre,
            telefono: req.body.telefono
        }

        Boss.insertJefe(bossData, (err, data) => {
            if (data && data.insertId) {
                console.log(data)
                res.json({
                    success: true,
                    msg: "Se ha registrado al jefe",
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

    app.put('/bosses/:id', (req, res) => {
        const bossData = {
            id: req.params.id,
            nombre: req.body.nombre,
            telefono: req.body.telefono
        }
        
        Jefe.updateJefe(userData, (err, data) => {
            if (data && data.msg) {
                res.json(data)
            } else {
                success: false,
                msg = "error"
            }
        })
    })

    app.delete('/bosses/:id', (req, res) => {
        Jefe.deleteJefe(req.params.id, (err, data) => {
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

module.exports = restBosses