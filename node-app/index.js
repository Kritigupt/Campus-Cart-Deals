// create api of login and 
// signup api : username and password frontend se fetch krega and database me store krlega
//post method takes url and method includes request and response
//npm i mongoose package installed
//username and passwords are columns
//Install npm i nodemon
//Make changes in package.json , write dev: "nodemon index.js"    , use npm run dev for starting

const express = require('express')
const app = express()
const port = 4000
const mongoose = require('mongoose');
const multer = require('multer')

mongoose.connect('mongodb://localhost:27017');   //database connection // connect method takes 2 things url and callback

const Users = mongoose.model('Users', { username: String , password: String });    //creating a table model


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/signup'), (req , res) =>{
   // const username = req.body.username;
   // const password = req.body.password;
    const user = new Users({username : "Kriti" , password: "pass"});             //new user entry
    user.save().then(() => console.log('saved'));                              //entry saved
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})