const { request, response, query } = require('express');
const express = require('express');


const app = express();
const cRoutes = require('./routes/ciudades')


//JSON
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/ciudades' , cRoutes)


sequelize.sync()
    .then(
        app.listen(8080, ()=>{
            console.log('Online server. Listening on Port 8080')
        })
    )
    .catch(error=>console.log(error))
