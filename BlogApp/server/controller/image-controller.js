import mongoose from 'mongoose';
import grid from 'gridfs-stream';
import dotenv from 'dotenv';
dotenv.config();

const url = `http://localhost:${process.env.PORT}`;


let gfs, gridfsBucket;
const conn = mongoose.connection;
conn.once('open', () => {
    gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'fs'
    });
    gfs = grid(conn.db, mongoose.mongo);
    gfs.collection('fs');
});


export const uploadImage = (req, res) =>{
   if(!req.file){
    return res.status(404).json({msg: "File not found"})
   }

   const imageUrl = `${url}/file/${req.file.filename}`;

   res.status(200).json(imageUrl);
}

export const getImage = async (request, response) => {
    try {   
        const file = await gfs.files.findOne({ filename: request.params.filename });
        // const readStream = gfs.createReadStream(file.filename);
        // readStream.pipe(response);
        const readStream = gridfsBucket.openDownloadStream(file._id);
        readStream.pipe(response);
    } catch (error) {
        response.status(500).json({ msg: error.message });
    }
}