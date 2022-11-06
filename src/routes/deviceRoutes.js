const Device = require('../models/dispositivo')

function restDevices(app){
    app.get('/devices', (req, res) => {
        Device.getDispositivos((err,data) => {
            res.status(200).json(data)
        })
    })

    app.post('/devices', (req, res) => {
        const deviceData = {
            id: null,
            address: req.body.address
        }

        Device.insertDispositivo(deviceData, (err, data) => {
            if (data && data.insertId) {
                console.log(data)
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

module.exports = restDevices