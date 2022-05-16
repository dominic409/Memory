import express from 'express';
import {getPosts, createPost, getPost, updatePost, deletePost, likePost} from '../controllers/posts.js'


// import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';
const router= express.Router();


// https://localhost:5000/posts

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.get('/:id', getPost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;