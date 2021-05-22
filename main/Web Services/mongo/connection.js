const {Schema} = require("mongoose")
const mongoose = require("mongoose")

const userSchema = Schema({
    userId:{type:String, required: true},
    password: {type:String, required: true},
    lastnotify: {type:Number}
})

const adminSchema = Schema({
    userId:{type:String, required: true},
    password: {type:String, required: true},
})

const notiSchema = Schema({
    index:{type:Number, required: true},
    description: {type:String, required: true},
    createdOn:{type:String}
})

const bugSchema = Schema({
    severity:{type:String},
    description: {type:String},
    category: {type:String},
    userId: {type:String, required: true},
    status: {type:Boolean, required: true}
})

const feedbackSchema = Schema({
    category:{type:String},
    description: {type:String},
    refLink: {type:String},
    userId: {type:String, required: true}
})

let collection={};

const e="mongodb://localhost:27017/team-rogue";

let connectionOptions={
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}

collection.getSome = async()=>{
    try{
        let db=await mongoose.connect(e,connectionOptions);
        let aM=await db.model('stu',customerSchema);
        return aM;
    }
    catch(error){

    }
}

collection.findUser = async()=>{
    try{
        let db=await mongoose.connect(e,connectionOptions);
        let aM=await db.model('users',userSchema);
        return aM;
    }
    catch(error){
        console.log("error connecting to users db")
    }
}

collection.admin = async()=>{
    try{
        let db=await mongoose.connect(e,connectionOptions);
        let aM=await db.model('admins',adminSchema);
        return aM;
    }
    catch(error){
        console.log("error connecting to admin db")
    }
}

collection.noti = async()=>{
    try{
        let db=await mongoose.connect(e,connectionOptions);
        let aM=await db.model('notifications',notiSchema);
        return aM;
    }
    catch(error){
        console.log("error connecting to notifications db")
    }
}

collection.bug = async()=>{
    try{
        let db=await mongoose.connect(e,connectionOptions);
        let aM=await db.model('bugs',bugSchema);
        return aM;
    }
    catch(error){
        console.log("error connecting to bugs db")
    }
}

collection.feed = async()=>{
    try{
        let db=await mongoose.connect(e,connectionOptions);
        let aM=await db.model('feedbacks',feedbackSchema);
        return aM;
    }
    catch(error){
        console.log("error connecting to feedbacks db")
    }
}

module.exports=collection;