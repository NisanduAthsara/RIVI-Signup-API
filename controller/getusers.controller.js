const DB = require('../model/users.model')

exports.get = async (req,res)=>{
    try{
        const data = await DB.find()

        if(data){
            return res.json({users:data})
        }else{
            return res.json({message:'No users founded..!'})
        }
    }catch(err){
        console.log(err);
    }
    
}