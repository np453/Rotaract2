const router = require('express').Router();
const mongoose = require('mongoose')
const multer = require('multer')
const fs = require('fs');
const ourWorks = require("../model/ourWorks")
const bp = require('body-parser')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' +file.originalname )
    }
})
  
const upload = multer({ storage: storage }).single('file')

router.post('/', upload , async(req, res) => {
        let fullpath = req.file.path;
        let imgData  = fs.readFileSync(fullpath).toString('base64')
        let work = new ourWorks({
            title:req.body.title,
            file : {
                data : Buffer(imgData, 'base64'),
                contentType : req.file.mimetype
            }
        })
        const savedWork = await work.save()
        res.send(savedWork)
        
          if (err instanceof multer.MulterError) {
              return res.status(500).json(err)
          } else if (err) {
              return res.status(500).json(err)
          } 
          
          return res.status(200).send(req.file)
});

router.get('/', async(req, res) => {
  const allWorks = await ourWorks.find({ })
  const works = [];
  for(let i=0;i<allWorks.length;i++) {
    works.push( {title:allWorks[i].title, buffer:Buffer.from(allWorks[i].file.data.buffer, 'base64').toString('base64'), contentType:allWorks[i].file.contentType} )
  }
  res.send(works)
    
 });

 router.get('/img', async(req, res) => {
  const imData = await File.find({ })
  const img = [];
  for(let i=0;i<imData.length;i++) {
    img.push( {buffer:Buffer.from(imData[i].file.data.buffer, 'base64').toString('base64'), contentType:imData[i].file.contentType} )
  }

  res.send(img)
});

module.exports = router;