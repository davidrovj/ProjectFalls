const express = require('express')
const app = express()

const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

// settings
app.set('port', process.env.PORT || 3001)

// middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

//routes
require('./routes/bossRoutes')(app)
require('./routes/workerRoutes')(app)
require('./routes/deviceRoutes')(app)
require('./routes/paramsRoutes')(app)
require('./routes/recordRoutes')(app)

// static files

app.listen(app.get('port'), ()=>{
    console.log('server on port 3001')
})