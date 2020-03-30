// jshint esversion: 6
require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const https = require('https')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))

app.get('/', function(req, res){
  res.sendFile(__dirname + "/signup.html");
})

app.post('/', function(req, res){
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;
  console.log(firstName, lastName, email);

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  };

  const jsonData = JSON.stringify(data);

  console.log("Data to be sent: " + jsonData);

  const url = 'https://us19.api.mailchimp.com/3.0/lists/'+process.env.MYLISTID;
  const options = {
    method: "POST",
    auth: "jennifer1:"+ process.env.MYAPIKEY
  }

  const request = https.request(url, options, function(response){

    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }

    response.on("data", function(data){
      console.log(JSON.parse(data));
    })
  })

  request.write(jsonData);
  request.end();

});

app.post('/failure', function(req, res){
  res.redirect('/');
});

app.listen(process.env.PORT || port, () =>
console.log(`App listening on port ${port}!`))
