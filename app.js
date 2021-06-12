//52.89.204.156
const express = require('express');
const app = express();
const multer = require('multer')
const cors = require('cors');
const AWS = require('aws-sdk');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const ourWorks = require('./routes/ourWorks')
const story = require("./model/story")
const PORT = 4444;
dotenv.config();
const uploadRoute = require('./routes/fileUpload')
const addStory = require('./routes/addStory');
const { getMaxListeners } = require('./model/image');
const path = require('path');

//Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
app.use('/upload', uploadRoute) //file upload route
app.use('/addstory', addStory)
app.use('/ourworks', ourWorks)


// var credentials = new AWS.SharedIniFileCredentials({profile: 'work-account'});
// AWS.config.credentials = credentials;


// AWS.config.loadFromPath(__dirname + '/config.json');
// AWS.config.update({region: 'us-west-2'});
AWS.config = new AWS.Config();
AWS.config.accessKeyId = process.env.aws_access_key;
AWS.config.secretAccessKey = process.env.aws_secret_key;
AWS.config.region = process.env.aws_reigon;


const email="acw.dnsp@gmail.com";
var ses = new AWS.SES();
//connect to DB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("Database is connected!"));
app.use(express.static("client/build"));

// Share Rotary story section
app.post("/rotary_story",async(req,res)=>{
   const newalter = new story({
      name:req.body.name,
      email:req.body.email,
      title:req.body.title,
      story:req.body.story
  })
    // Aws ses send mail section
    var ses_mail = "From: 'Rotaract Club' <" + email + ">\n";
    ses_mail = ses_mail + "To: " + email + "\n";
    ses_mail = ses_mail + "Subject: A Rotary Story just popped up\n";
    ses_mail = ses_mail + "MIME-Version: 1.0\n";
    ses_mail = ses_mail + "Content-Type: multipart/mixed; boundary=\"NextPart\"\n\n";
    ses_mail = ses_mail + "--NextPart\n";
    ses_mail = ses_mail + "Content-Type: text/html; charset=us-ascii\n\n";
    ses_mail = ses_mail + "This is should be a html text.\n\n";
    ses_mail = ses_mail + "--NextPart\n";
    ses_mail = ses_mail + "Content-Type: text/plain;\n";
    ses_mail = ses_mail + "Content-Disposition: attachment; filename=\"Story.txt\"\n\n";
    ses_mail = ses_mail + "Name:"+req.body.name+"\n"+
    "Email:"+req.body.email+"\n"+
    "Title:"+req.body.title+"\n"+
    "Story:"+req.body.story+"\n" + "\n\n";
    ses_mail = ses_mail + "--NextPart--";
    var params = {
        RawMessage: { Data: new Buffer.from(ses_mail) },
        Destinations: [ email ],
        Source: "'Rotaract Club' <" + email + ">'"
    };
    ses.sendRawEmail(params, function(err, data) {
        if(err) {
            res.send(err);
        } 
        else {
            res.send(data);
        }           
    });
})



app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(PORT, function() {
    console.log('App running on port 4444');
});
 