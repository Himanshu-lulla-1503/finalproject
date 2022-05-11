const mongoose = require('mongoose');
mongoose.connect(process.env.MYDB,{useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log(err);
    
})