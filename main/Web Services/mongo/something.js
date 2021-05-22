const connection = require('./connection');
const defaultData = require('./defaultData.json')

let c = {};

//DB init

c.getInitDB = async () => {
    let users = await connection.findUser();
    // let admin=await connection.admin();
    // let bugs=await connection.bug();
    // let feed=await connection.feed();
    // let noti=await connection.noti();
    // users.deleteMany({});
    // admin.deleteMany({});
    // bugs.deleteMany({});
    // feed.deleteMany({});
    // noti.deleteMany({});
    users.create(defaultData)
}


//Validate User

c.validateUser = async (uid, pwd) => {
    let m = await connection.findUser();
    let data = await m.find({
        userId: uid,
        password: pwd
    });
    //console.log(data,uid,pwd);
    if (data.length > 0)
        return true;
    else
        return false;
}

//Validate Admin

c.validateAdmin = async (uid, pwd) => {
    let m = await connection.admin();
    let data = await m.find({
        userId: uid,
        password: pwd
    });
    console.log(data, uid, pwd);
    if (data.length > 0)
        return true;
    else
        return false;
}

//User last read notifiaction

c.getUnreadNotificationCount = async (uid) => {
    let m = await connection.findUser();
    let data = await m.findOne({
        userId: uid
    });
    if (data && data["lastnotify"] != -1)
    {
        
    let n = await connection.noti();

        let all = await n.find({
        });

        let count=all.length-data["lastnotify"];
        if(count>0)
            return count;
        else
            return -1;
    }
    else
        return -1;
}

//All Notificactions

c.getAllNotificactions = async () => {
    let m = await connection.noti();
    let data = await m.find({
    });

    if (data.length > 0)
        return data;
    else
        return false;
}

//Admin-Create Notification

c.createNotificactions = async (desc) => {
    let m = await connection.noti();


    var nowDate = new Date(); 
    var date = nowDate.getDate()+'/'+(nowDate.getMonth()+1)+'/'+nowDate.getFullYear(); 

    let all = await m.find({
    });

    let count = all.length;

    let data = await m.create({
        index: count + 1,
        description: desc,
        createdOn:date
    });
    console.log(data);
    if (data)
        return true;
    else
        return false;
}

//Create Bug

c.createBug = async (severity,desc,cat,uid) => {
    let m = await connection.bug();

    let data = await m.create({
        severity: severity,
        description: desc,
        category: cat,
        userId: uid,
        status:true
    });
    //console.log(data);
    if (data)
        return true;
    else
        return false;
}

//Admin-Get Bugs

c.getBugs = async (desc) => {
    let m = await connection.bug();

    let data = await m.find({
    });
    //console.log(data);
    if (data)
        return data;
    else
        return false;
}

//Admin- bug fixed

c.fixedBugs = async (uid,desc) => {
    let m = await connection.bug();

    let data = await m.updateOne({
        description: desc,
        userId: uid
    },{
        status:false
    });
    console.log(uid,desc);
    if (data.nModified>0)
        return true;
    else
        return false;
}

//create feedback

c.createFeedback = async (link,desc,cat,uid) => {
    let m = await connection.feed();

    console.log(link,desc,cat,uid);
    let data = await m.create({
        refLink: link,
        description: desc,
        category: cat,
        userId: uid
    });
    if (data)
        return true;
    else
        return false;
}

//Admin - get feedback

c.getFeedback = async (desc) => {
    let m = await connection.feed();

    let data = await m.find({
    });
    //console.log(data);
    if (data)
        return data;
    else
        return false;
}

module.exports = c;