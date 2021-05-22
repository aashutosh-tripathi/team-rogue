const express = require('express'); 
const routing = express.Router(); 
const f=require('../mongo/something')

routing.use(express.urlencoded());
routing.use(express.json())




//Initial DB setup 

routing.get("/initDB",async(req,res,next)=>{
    await f.getInitDB();
    res.send("Database successfully Initialized");
})

//login validation

routing.post("/login",async(req,res,next)=>{
    let uid=req.body.uid;
    let pwd=req.body.pwd;
    let isValidUser=await f.validateUser(uid,pwd);
    res.send(isValidUser);
})

//admin login validation

routing.post("/adminlogin",async(req,res,next)=>{
    let uid=req.body.uid;
    let pwd=req.body.pwd;
    let isValidAdmin=await f.validateAdmin(uid,pwd);
    res.send(isValidAdmin);
})

//get user last notification

routing.get("/userLastNotify/:uid",async(req,res,next)=>{
    let uid=req.params.uid;
    let count=await f.getUnreadNotificationCount(uid);
    console.log(uid);
    if(count)
        res.json({"count":count});
    else    
        res.send("User does not exist");
})

//get all notificactions

routing.get("/notification",async(req,res,next)=>{
    let notificationList=await f.getAllNotificactions();
    res.send(notificationList);
})

//Admin - create notifications

routing.post("/createNoti",async(req,res,next)=>{
    let desc=req.body.description;
    let Response=await f.createNotificactions(desc);
    res.send(Response);
})

//create bug

routing.post("/createBug",async(req,res,next)=>{
    let severity=req.body.severity;
    let desc=req.body.description;
    let cat=req.body.category;
    let uid=req.body.uid;
    let Response=await f.createBug(severity,desc,cat,uid);
    res.send(Response);
})

//Admin - get bugs

routing.get("/getBugs",async(req,res,next)=>{
    let bugList=await f.getBugs();
    res.send(bugList);
})

//Admin - bug fixed

routing.put("/bugfixed",async(req,res,next)=>{
    let desc=req.body.description;
    let uid=req.body.userId;
    console.log(uid,desc);
    let Response=await f.fixedBugs(uid,desc);
    res.send(Response);
})

//create feedback

routing.post("/createFeedback",async(req,res,next)=>{
    let link=req.body.refLink;
    let desc=req.body.description;
    let cat=req.body.category;
    let uid=req.body.uid;
    console.log(req.body);
    let Response=await f.createFeedback(link,desc,cat,uid);
    res.send(Response);
})

//Admin - get feedback

routing.get("/getFeedback",async(req,res,next)=>{
    let feedbackList=await f.getFeedback();
    res.send(feedbackList);
})

module.exports=routing;