
import Comment from '../models/comment.js';

export const newComment = async (req, res) => {
     try {
        let comment = await Comment(req.body);
        await comment.save();

        res.status(200).json({msg: 'Comment saved successfully'});
     } catch (error) {
        res.status(500).json({msg: error.message});
     } 
}


export const getAllComments = async (req, res) => {
    try {
        let allComments = await Comment.find({postId: req.params.id});
        if(!allComments){
            return res.status(404).json({msg: "No comments"});
        }
        return res.status(200).json(allComments);
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const deleteComment = async (req, res) => {
    try {
         let response = await Comment.findById(req.params.id);
         if(!response){
            return res.status(404).json({msg: "no such type of comment available"});
         }
         await response.deleteOne();
         return res.status(200).json({msg: 'Comment deleted successfully..'});
    } catch (error) {
         return res.status(500).json({error: error.message});
    }
}