const express = require('express')
const app = express()
const port = 8081
const mysql = require('mysql2')


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

connection.query('SELECT *FROM user', function (err, rows, fields) {
  if (err) throw err

  console.log('The user rows are: ', rows)
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hey', (req, res) => {
  res.send('ho')
})

app.get('/login', (req,res) => {
  //connection.query('SELECT *FROM user WHERE username=name and password=passw')
  let endPoint = req.url
  let usern = ''
  let passw = ''
  for(let i=0; i<endPoint.length; i++){
    if(endPoint[i] == '?'){
      i++
      while(endPoint[i] != '&'){
        usern += endPoint[i]
        i++
      }
    }
    if(endPoint[i] == '&'){
      i++
      while(i < endPoint.length){
        passw += endPoint[i]
        i++
      }
    }
  }

  connection.query('SELECT *FROM user WHERE username= "' + usern + '" AND password= "' + passw +'"', function (err, result) {
    if (err) throw err

    console.log('The user rows are: ', result)
  })


  res.send('id: ' + usern + ', ' + passw);
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

