const express = require('express')
const app = express()

const morgan = require('morgan')
const bodyParser = require('body-parser')

// settings
app.set('port', process.env.PORT || 3001)

// middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())

//routes
require('./routes/bossRoutes')(app)
require('./routes/workerRoutes')(app)
require('./routes/deviceRoutes')(app)
require('./routes/paramsRoutes')(app)

// static files

app.listen(app.get('port'), ()=>{
    console.log('server on port 3001')
})