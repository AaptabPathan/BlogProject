import mongoose from "mongoose";

const connectToDatabase = async (username, password) =>{
    const URL = `mongodb+srv://${username}:${password}@blog-app.h6vrl4i.mongodb.net/blogRecords?retryWrites=true&w=majority`; 
    try{
        await mongoose.connect(URL, {useNewUrlParser:true});
        console.log('Database connection successfull.');
    }catch(error){
        console.log('Error while connecting to datbase', error);
    }
}

export default connectToDatabase;