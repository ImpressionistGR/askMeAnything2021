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
  console.log('post login:' + username)
  console.log('post login:' + password)

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
})


app.post('/signup', (req,res) => {
  const username = req.body.username
  const email = req.body.email
  const password = req.body.password


  console.log(req.body)
  console.log('post signup: ' + username)
  console.log('post signup: ' + email)
  console.log('post signup: ' + password)

  connection.query(
      'SELECT *FROM user WHERE username=?',
      [username],
      (err, result) => {
          if(err) throw err
          console.log(result)
          if(result.length > 0){
              res.send('username already exists')
          }
          else if(result.length === 0){
              console.log('username available')
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
          }

      }
  )

})


app.post('/askQuestion', (req, res)=>{
    const title = req.body.title
    const text = req.body.text
    const keywords = req.body.keywords
    const iduser = req.body.iduser
    let idQuestion = 0

    console.log('ask title: ' + title)
    console.log('ask text: ' + text)
    console.log('ask keywords: ' + keywords)
    console.log('ask iduser: ' + iduser)

    const keywordsArr = keywords.split(' ')
    console.log('ask keywordsArr: ' + keywordsArr)
    const dateTime = new Date
    console.log('ask date: ' + dateTime)

    connection.query(
        'SELECT *FROM question WHERE title=? ',
        [title],
        (err, result) => {
            if(err) throw err
            if(result.length > 0){
                res.send('question title already exists')
            }
            else{
                connection.query(
                    'INSERT INTO question VALUES(NULL, ?, ?, ?, ?)',
                    [title, text, dateTime, iduser],
                    (err, result) => {
                        if(err) throw err
                        console.log(result)
                        if(result){
                            connection.query(
                                'SELECT *FROM question WHERE title=? ',
                                [title],
                                (err, result) => {
                                    if(err) throw err
                                    console.log(result)


                                    if(result){
                                        idQuestion = parseInt(result[0].idquestion)
                                        console.log('idquestion: ' + idQuestion)
                                        keywordsArr.forEach( (value, index, array) => {
                                            if(value.trim()) {
                                                connection.query(
                                                    'INSERT INTO keyword VALUES(NULL, ?, ?, ?)',
                                                    [value, idQuestion, iduser],
                                                    (err, result) => {
                                                        if (err) throw err
                                                        console.log(result)
                                                        //res.send(result)
                                                    }
                                                )
                                            }
                                        })
                                    }

                                }
                            )


                        }
                        res.send(result)
                    }
                )
            }
        }


    )




    /*

     */

    //res.send('ok')
})

app.post('/getQuestions', (req, res) => {
    connection.query(
        'SELECT question.idquestion, question.title, question.text, question.timestamp, user.username, user.email ' +
        'FROM question ' +
        'INNER JOIN user ON question.user_iduser=user.iduser',
        (err, result) => {
            console.log(result)
            res.send(result)
        }
    )
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

