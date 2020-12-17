const router = require('express').Router();
const mongoose = require('mongoose')
const multer = require('multer')
const fs = require('fs');
const File = require("../model/image")
// mongoose.model('file')
//multer disk storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' +file.originalname )
    }
  })
  
const upload = multer({ storage: storage }).single('file')

router.post('/',function(req, res) {

    upload(req, res, async (err) => {
      let fullpath = req.file.path;
      let imgData  = fs.readFileSync(fullpath).toString('base64')
      let file = new File()
      file.file.data = Buffer(imgData, 'base64')
      file.file.contentType = req.file.mimetype;
      const savedFile = await file.save()
      res.send(savedFile)
      
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        } 
        
        return res.status(200).send(req.file)
      })
});

router.get('/img/:imgId', async(req, res) => {
    const imData = await File.findById({_id:req.params.imgId})
    res.setHeader('content-type', imData.file.contentType);
    res.send(Buffer.from(imData.file.data.buffer, 'base64'));
    
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