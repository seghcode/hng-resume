const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const router = require('./routes/router')

// init express
const app = express()

// initializing middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(express.static('images'))
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use('/', router)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))