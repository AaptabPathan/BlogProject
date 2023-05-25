import express from 'express';
import {signupController, loginController} from '../controller/user-controller.js'
import { uploadImage , getImage} from '../controller/image-controller.js';
import { createPost , getAllPost, getPost, updatePost, deletePost} from '../controller/post-controller.js';
import { authanticateToken } from '../controller/jwt-authanticate-token.js';
import { newComment, getAllComments, deleteComment } from '../controller/comment-controller.js';
import upload from '../utils/upload.js';


const router = express.Router();

router.post('/signup', signupController);
router.post('/login', loginController);
router.post('/file/upload', upload.single('file'), uploadImage);
router.get('/file/:filename', getImage);
router.post('/create', authanticateToken,createPost);
router.get('/posts', authanticateToken, getAllPost);
router.get('/post/:id', authanticateToken, getPost);
router.put('/update/:id', authanticateToken, updatePost);
router.delete('/delete/:id',authanticateToken, deletePost);
router.post('/comment/new', authanticateToken, newComment);
router.get('/comments/:id', authanticateToken, getAllComments);
router.delete('/comment/delete/:id', authanticateToken, deleteComment);

export default router;