const nodemailer = require("nodemailer");
var express = require('express');
const app = express();
var cors = require('cors');
const port = 5000;
app.use(express.json());
app.use(cors()) 
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'svemugunta@gmail.com',
        pass: 'Srikris123'
    }
})
app.post('/email', (req, res) =>{
    const mailOptions = {
        from: 'svemugunta@gmail.com',
        to: 'svemugunta@gmail.com',
        subject: `${req.body.content.email} sent you a message`,
        text: req.body.content.subjectValue
  }
  console.log(mailOptions);
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          res.send({error: 'error'});
        } else {
          res.send({email: 'email Sent'});
        }
        res.end()
      });
})
app.get('/', (req,res) =>
{
  res.send("Hello");
})
app.listen(port, () => {
   console.log(`Your lstining on ${port}`)
})