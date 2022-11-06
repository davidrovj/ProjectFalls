const Params = require('../models/parameters')

function restParams(app){
    app.get('/parameters', (req, res) => {
        Params.getParameters((err,data) => {
            res.status(200).json(data)
        })
    })

    app.post('/parameters', (req, res) => {
        const paramsData = {
            acc_x: req.body.acc_x,
            acc_y: req.body.acc_y,
            acc_z: req.body.acc_z,
            gyrox: req.body.gyrox,
            gyroy: req.body.gyroy,
            gyroz: req.body.gyroz
        }

        Params.insertParameters(paramsData, (err, data) => {
            if (data && data.acc_x) {
                console.log(data)
                res.json({
                    success: true,
                    msg: "Se han registrado los parámetros",
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

module.exports = restParams