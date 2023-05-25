import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import Token from '../models/token.js';

dotenv.config();

export const signupController = async (req, res) =>{
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const data = {username: req.body.username, name: req.body.name, password: hashedPassword};
        const validData = new User(data);
        await validData.save();
        return res.status(200).json({msg: "signup successfull"})
    } catch (error) {
        return res.status(500).json({msg: "interal server error"});
    }
}


export const loginController = async (req, res) =>{
      try{
         const user = await User.findOne({username: req.body.username});
         if(!user){
            return res.status(400).json({msg: "Username does not match"});
         }else{
            let match = await bcrypt.compare(req.body.password, user.password);
            if(match){
                const accessToken =  jwt.sign(user.toJSON(), process.env.SECRET_ACCESS_KEY, {expiresIn: '15m'});
                const refreshToken =  jwt.sign(user.toJSON(), process.env.REFRESH_ACCESS_KEY);

                const newToken = new Token({token: refreshToken});
                await newToken.save();

                return res.status(200).json({accessToken: accessToken, refreshToken: refreshToken, name: user.name, username: user.username})
            }else{
                return res.status(400).json({msg: "Password does not match"});
            }
         }
         
      }catch(e){
           return res.status(500).json({msg: "Error while login in user"});
      }
}

