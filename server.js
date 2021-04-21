const express= require("express");
const app= express();
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const mongoose= require('mongoose');
mongoose.connect("mongodb+srv://aamir:aamir@nestjs.ayatn.mongodb.net/LMDS-db?retryWrites=true&w=majority")
.then(()=>{console.log("Connected To mongodb")})
.catch(()=>{
    console.log("Error in mongoose connection")
});
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

const teacherSchema = new mongoose.Schema({
    firstname: String,
    lastname : String,
    location: String,
    category: String,
    password: String,
    email: String,
    covidVaccine: String,
    FireExtinguisherTrained: String,
    safeSleepClass: String,
    picture: String,
    cprCard: String,
    dcfTranscript: String,
    CDA: String,
});
const Teacher = mongoose.model('Teacher',teacherSchema);

const storage = multer.diskStorage({
    destination:(req,res,callBack)=>{
        callBack(null,'src/assets/uploads/')
    },
    filename:(req,file,callBack)=>{
        var date = new Date(); 
        var epochTicks = 621355968000000000;
        var ticksPerMillisecond = 10000;
        var ticks = epochTicks + (date.getTime() * ticksPerMillisecond);

        callBack(null,`LMDS_${ticks}_${file.originalname}`)
    }
})
const upload = multer({storage:storage})

app.use(cors({origin:"*"}))

app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname + '/dist/ecommerce-sophia-new/index.html'));
})
app.post('/insertPicture',jsonParser,upload.single('picture'),(req,res)=>{
    const file=req.file;
    res.send(file);
})
app.post('/insertDCF',jsonParser,upload.single('DCF'),(req,res)=>{
    const file=req.file;
    res.send(file);
})
app.post('/insertCPR',jsonParser,upload.single('CPR'),(req,res)=>{
    const file=req.file;
    res.send(file);
})
app.post('/insertTeacher',jsonParser,(req,res)=>{
    const teacherObj=req.body;
    const teacher= new Teacher({
        firstname: teacherObj.firstname,
        lastname: teacherObj.lastname,
        category: teacherObj.category,
        email: teacherObj.email,
        password: teacherObj.password,
        covidVaccine: teacherObj.covidVaccine,
        FireExtinguisherTrained: teacherObj.FireExtinguisherTrained,
        safeSleepClass: teacherObj.safeSleepClass,
        location: teacherObj.location,
        picture: teacherObj.picture,
        cprCard: teacherObj.cprCard,
        dcfTranscript: teacherObj.dcfTranscript,
        CDA: teacherObj.CDA 
    });
    teacher.save().then(item=>{
        res.send(item);
    });
});

app.post('/allCategories',(req,res)=>{
    Teacher.find().select({category:1}).distinct("category").then(item=>{
        console.log(item);
        res.send(item);
    });
});
app.post('/allLocations',(req,res)=>{
    Teacher.find().select({location:1}).distinct("location").then(item=>{
        console.log(item);
        res.send(item);
    });
});
app.post('/topTeachers',(req,res)=>{
    Teacher.find().sort({_id:1}).then(item=>{
        console.log(item);
        res.send(item);
    });
});

app.post('/search',jsonParser,(req,res)=>{
    const searchBody=req.body;
    let result=[];
    if(searchBody.location!=='' 
    && searchBody.category=='' && searchBody.tutorName==''){
        Teacher.find({location:searchBody.location}).then(item=>{
            res.send(item);
        });
    }
    else if(searchBody.location!=='' 
    && searchBody.category!=='' 
    && searchBody.tutorName==''){
        Teacher.find({$or:[{location:searchBody.location},{category:searchBody.category}]}).then(item=>{
            res.send(item);
        });
        
    }
    else if(searchBody.location!=='' 
    && searchBody.tutorName!==''
    && searchBody.category==''){
        Teacher.find({$or:[
        // {firstname:/searchBody.tutorName/},
        // {lastname:/searchBody.tutorName/},

        {location:searchBody.tutorName}
    ]}).then(item=>{
        res.send(item);
    });
    }
    else if(searchBody.location=='' 
    && searchBody.category!=='' 
    && searchBody.tutorName==''){
        Teacher.find({category:searchBody.category}).then(item=>{
            res.send(item);
        });
        
    }
    else if(searchBody.location!=='' 
    && searchBody.category!=='' 
    && searchBody.tutorName==''){
        Teacher.find({$or:[
            // {firstname:/searchBody.tutorName/},
            // {lastname:/searchBody.tutorName/}
        {location:searchBody.tutorName}
        ]}).then(item=>{
            res.send(item);
        });
        
    }
    else if(searchBody.location==''
    && searchBody.category!=='' 
    && searchBody.tutorName!==''  ){
        Teacher.find({$or:[
            // {firstname:/searchBody.tutorName/},
            // {lastname:/searchBody.tutorName/},
            // {category:searchBody.category}
            
        {location:searchBody.tutorName}
        ]}).then(item=>{
            res.send(item);
        });
        
    }
    else if(searchBody.location!=='' 
    && searchBody.category!==''
    && searchBody.tutorName!=='' ){
        Teacher.find({$or:[
            // {firstname:/searchBody.tutorName/},
            // {lastname:/searchBody.tutorName/},
            // {category:searchBody.category},
            
        {location:searchBody.tutorName},
        ]}).then(item=>{
            res.send(item);
        });
        
    }
    else if(searchBody.location=='' 
    && searchBody.category==''
    && searchBody.tutorName!=='' ){
        Teacher.find({$or:[
            // {firstname:/searchBody.tutorName/},
            // {lastname:/searchBody.tutorName/},
            // {category:searchBody.category},
            
        {location:searchBody.tutorName},
        ]}).then(item=>{
            res.send(item);
        });
        
    }else{
        res.send(result);
    }
});

app.listen(process.env.PORT || 4000, ()=>{console.log("Listening to 4000...")});