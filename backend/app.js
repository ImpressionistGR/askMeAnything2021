const express = require('express')
const app = express()
const port = 8080
const mysql = require('mysql2')
const cors = require('cors')
//const bodyParser = require('body-parser')
//const axios = require('axios')

app.use(express.json())
//app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())


const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'admin',
  database : 'askdb',

});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});



app.post('/login', (req,res) => {
  const username = req.body.username
  const password = req.body.password

  console.log(req.body)
  console.log(username)
  console.log(password)

  connection.query(
      "SELECT *FROM user WHERE username = ? and password = ?",
      [username, password],
      (err, result) => {
        if(err) throw err
        //if(result.length > 0){
          console.log(result)
          res.send(result)
        //}

      })
  //res.send('id: ' + username + ', ' + password);
})


app.post('/signup', (req,res) => {
  const username = req.body.username
  const email = req.body.email
  const password = req.body.password


  console.log(req.body)
  console.log(username)
  console.log(email)
  console.log(password)

  connection.query(
      "INSERT INTO user (iduser, username, email, password) VALUES (NULL, ?, ?, ?)",
      [username, email, password],
      (err, result) => {
        if(err) throw err
        //if(result.length > 0){
        console.log(result)
        res.send(result)
        //}

      })
  //res.send('id: ' + username + ', ' + password);
})


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

