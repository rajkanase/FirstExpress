const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const Video=require('../models/video');

const db= "mongodb://raj:raj@ds161574.mlab.com:61574/express_first"
mongoose.Promise=global.Promise;

mongoose.connect(db, function(err){
    if(err){
        console.error("Error "+err);
    }
});

router.get('/videos',function(req,res){
    console.log('Get request for all videos');
    Video.find({})
    .exec(function(err,videos){
        if (err){
            console.log('Error retrieving videos');
        }else{
            res.json(videos);
        }
    });
});


router.get('/videos/:id',function(req,res){
    console.log('Get request for single video');
    Video.findById(req.params.id)
    .exec(function(err,video){
        if (err){
            console.log('Error retrieving video');
        }else{
            res.json(video);
        }
    });
});



router.post('/video',(req,res)=>{
    console.log('Post a video');
    var newVideo=new Video();
    newVideo.title=req.body.title;
    newVideo.url=req.body.url;
    newVideo.description=req.body.description;

    newVideo.save(function(err,insertedVideo){
        if(err){
            console.log('Erroe saving video');
        }else{
            res.json(insertedVideo);
        }
    });
});


router.put('/video/:id',(req,res)=>{
    console.log('Post a video');
    Video.findByIdAndUpdate(req.params.id,
    {
        $set:{title:req.body.title,url:req.body.url,description:req.body.description}
    },
    {
        new:true
    },
    (err,updatedVideo)=>{
        if(err){
            console.log('Error updating video');
        }else{
            res.json(updatedVideo);
        }
    }
  );
    
})


router.delete('/video/:id',(req,res)=>{
    console.log('Delete a video');
    Video.findByIdAndRemove(req.params.id,(err,deletedVideo)=>{
        if(err){
            console.log('video deleted');
        }else{
            res.json(deletedVideo);
        }
    });
});


module.exports=router;