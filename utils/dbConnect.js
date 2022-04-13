const mongoose = require('mongoose')

//connect to mongodb
function ConnectDB(){
    try {
        mongoose.connect(process.env.MONGO,{useNewUrlParser:true},()=>{
            console.log('DB Connected');
        })
    } catch (error) {
        console.log(error);
    }    
}

module.exports = ConnectDB