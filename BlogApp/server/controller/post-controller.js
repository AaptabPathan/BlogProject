
import mongoose from 'mongoose';
import Post from '../models/post.js'

export const createPost = async (req, res) => {
  try {
      const post = await new Post(req.body);
      post.save();

      return res.status(200).json('post saved successfully.')
  } catch (error) {
      return res.status(500).json(error)
  }
}

export const getAllPost = async (req, res) => {
  let category = req.query.category;
  let posts;
   try {
      if(category){
        posts = await Post.find({categories: category});
      }else{
        posts = await Post.find({});
      }
      return res.status(200).json(posts);
   } catch (error) {
      return res.status(500).json({msg: error.message});
   }
}

export const getPost = async (req, res) => {
    try {
       let id = req.params.id;
          let post = await Post.findById(id);
        return res.status(200).json(post);
    } catch (error) {
      return res.status(500).json({msg: error.message})
    }
}



export const updatePost = async (req, res) => {
  try {
      const post = await Post.findById(req.params.id);

      if (!post) {
          res.status(404).json({ msg: 'Post not found' })
      }
      
      await Post.findByIdAndUpdate( req.params.id, { $set: req.body })

      res.status(200).json('post updated successfully');
  } catch (error) {
      res.status(500).json(error);
  }
}


export const deletePost = async (req, res) => {
  try {
      const post = await Post.findById(req.params.id);
      if(!post){
        res.status(404).json({ msg: 'Post not found' })
      }
      await post.deleteOne();
      return res.status(200).json({msg: "Post deleted successfully"})
  } catch (error) {
      return res.status(500).json({msg: error.message});
  }
} 