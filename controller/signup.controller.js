const DB = require('../model/users.model')
const isEmailValid = require('../utils/emailVerifyer')

exports.signup = async (req,res)=>{
    try {
        const username = req.body.username
        const email = req.body.email
        const password = req.body.password
        const mobile = req.body.mobile

        if(!username || typeof username !== 'string'){
            return res.json({message:'Invalid Username'})
        }

        if(username.length < 5){
            return res.json({message:'Username must be at least 5 characters'})
        }

        if(!email || !isEmailValid(email)){
            return res.json({message:'Invalid Email'})
        }

        if(!password || typeof password !== 'string'){
            return res.json({message:'Invalid Password'})
        }

        if(password.length < 5){
            return res.json({message:'Password must be at least 5 characters'})
        }

        if(!mobile || typeof mobile !== 'string'){
            return res.json({message:'Invalid Mobile Number'})
        }

        if(mobile.length < 10){
            return res.json({message:'Mobile number must be at least 10 characters'})
        }

        const count = await DB.findOne({email:req.body.email})

        if(count){
            return res.json({message:'Email is already in use!'})
        }

        const newUser = new DB({
            username:req.body.username,
            email:req.body.email,
            password:req.body.password,
            mobile:req.body.mobile
        })

        const response = await newUser.save(newUser)

        if(response){
            return res.json({message:'User sucessfully added!'})
        }else{
            return res.json({message:'Unable to add user'})
        }
    } catch (error) {
        return res.json({message:error})
    }
    
}