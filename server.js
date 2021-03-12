const express= require("express");
const app= express();
const cors = require('cors');
const multer = require('multer');
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
    picture: String,
    cprCard: String,
    dcfTranscript: String,
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

app.get('/',(req,res)=>{
    res.send("Hello Aamir");
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
        location: teacherObj.location,
        picture: teacherObj.picture,
        cprCard: teacherObj.cprCard,
        dcfTranscript: teacherObj.dcfTranscript 
    });
    teacher.save().then(item=>{
        res.send(item);
    });
});

app.get('/allCategories',(req,res)=>{
    Teacher.find().select({category:1}).distinct("category").then(item=>{
        console.log(item);
        res.send(item);
    });
});
app.get('/allLocations',(req,res)=>{
    Teacher.find().select({location:1}).distinct("location").then(item=>{
        console.log(item);
        res.send(item);
    });
});
app.get('/topTeachers',(req,res)=>{
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
    if(searchBody.location!=='' 
    && searchBody.category!=='' 
    && searchBody.tutorName==''){
        Teacher.find({$or:[{location:searchBody.location},{category:searchBody.category}]}).then(item=>{
            res.send(item);
        });
        
    }
    if(searchBody.location!=='' 
    && searchBody.tutorName!==''
    && searchBody.category==''){
        Teacher.find({$or:[
        {firstname:/searchBody.tutorName/},
        {lastname:/searchBody.tutorName/},
        {location:searchBody.location}
    ]}).then(item=>{
        res.send(item);
    });
    }
    if(searchBody.location=='' 
    && searchBody.category!=='' 
    && searchBody.tutorName==''){
        Teacher.find({category:searchBody.category}).then(item=>{
            res.send(item);
        });
        
    }
    if(searchBody.location!=='' 
    && searchBody.category!=='' 
    && searchBody.tutorName==''){
        Teacher.find({$or:[
            {firstname:/searchBody.tutorName/},
            {lastname:/searchBody.tutorName/}
        ]}).then(item=>{
            res.send(item);
        });
        
    }
    if(searchBody.location==''
    && searchBody.category!=='' 
    && searchBody.tutorName!==''  ){
        Teacher.find({$or:[
            {firstname:/searchBody.tutorName/},
            {lastname:/searchBody.tutorName/},
            {category:searchBody.category}
        ]}).then(item=>{
            res.send(item);
        });
        
    }
    if(searchBody.location!=='' 
    && searchBody.category!==''
    && searchBody.tutorName!=='' ){
        Teacher.find({$or:[
            {firstname:/searchBody.tutorName/},
            {lastname:/searchBody.tutorName/},
            {category:searchBody.category},
            {location:searchBody.location}
        ]}).then(item=>{
            res.send(item);
        });
        
    }
});

app.listen(4000, ()=>{console.log("Listening to 4000...")});