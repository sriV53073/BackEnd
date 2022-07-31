const nodemailer = require("nodemailer");
var express = require('express');
var mongoose = require('mongoose');
const emailModel = require("./Model");
const app = express();
var cors = require('cors');
const port = 5000;
app.use(express.json());
app.use(cors()) 
mongoose.connect('mongodb+srv://skv3073:Srisai123@signupcluster.go51lpq.mongodb.net/?retryWrites=true&w=majority',
  {
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
app.post('/email', async (req, res)  =>{
  console.log("Got the Post");
    const mailOptions = {
        Subject: `${req.body.content.email} sent you a message`,
        Body: req.body.content.subjectValue
  }
  const email = new emailModel(mailOptions);
  try {
    await email.save();
    res.send(email);
  } catch (error) {
    res.status(500).send(error);
  }
})
app.get('/', function (req, res) {
  res.send('GET request to the homepage1')
  console.log("Hello");
})
app.listen(process.env.PORT || 3001, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});