// const User = require('../model/user')
const router = require('express').Router();
const User = require('../model/user')
const uploadFile = require('../model/image')
const multer = require('multer')
const fs = require('fs');

// //multer disk storage
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'public')
//     },
//     filename: function (req, file, cb) {
//       cb(null, Date.now() + '-' +file.originalname )
//     }
//   })
  
// const upload = multer({ storage: storage }).single('file')



// router.post('/', upload , async(req, res) => {
//     // console.log(req.file.path)
//    let fullpath = await req.file.path;
//    let fileData  = await fs.readFileSync(fullpath).toString('base64')
//     // console.log(fileData)
//    //checking if email exists
//    console.log(req.body)
//    const emailExist = await User.findOne({email:req.body.email});
//    console.log(emailExist)
//    if(emailExist) {
//         try{
//             User.findByIdAndUpdate(emailExist._id, 
//                 { $push: {
//                         story:{
//                             "name":req.body.name,
//                             "title":req.body.title,
//                             "story":req.body.story,
//                             "files":{
//                                 file: {
//                                 data:Buffer(fileData, 'base64'),
//                                 contentType:req.file.mimetype
//                                 }
                                
//                             }
//                         }
//                     }
//                 }).exec()
//                 return res.status(200).send("story uploaded")
//         }catch(err) {
//             res.status(400).send(err);
//         }
       
//    }
//    else {
//     //    console.log(req.body)

//        const user = new User({
//            email:req.body.email,
//            story:[
//                {
//                    name:req.body.name,
//                    title:req.body.title,
//                    story:req.body.story,
//                    files: {
//                     file:{
//                         data:Buffer(fileData, 'base64'),
//                         contentType:req.file.mimetype
//                     }
//                 }
//                }
//            ],
//        });
//        try{
//            const savedUser = await user.save();
//            return res.status(200).send("story uploaded")
//        }catch(err) {
//            res.status(400).send(err);
//        }
//    }
    
    
// })

router.get('/', (req, res) => {
    User.find({ }).then(data => res.json(data))
})



router.post('/', async(req, res) => {
   const emailExist = await User.findOne({email:req.body.email});
   if(emailExist) {
        try{
            User.findByIdAndUpdate(emailExist._id, 
                { $push: {
                        story:{
                            "name":req.body.name,
                            "title":req.body.title,
                            "story":req.body.story
                        }
                    }
                }).exec()
                return res.status(200).send("story uploaded")
        }catch(err) {
            res.status(400).send(err);
        }
       
   }
   else {
       const user = new User({
           email:req.body.email,
           story:[
               {
                   name:req.body.name,
                   title:req.body.title,
                   story:req.body.story,
               }
           ],
       });
       try{
           const savedUser = await user.save();
           return res.status(200).send("story uploaded")
       }catch(err) {
           res.status(400).send(err);
       }
   }
    
    
})

module.exports = router;