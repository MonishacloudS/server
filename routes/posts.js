import express, { request, response } from 'express';
import { getPosts } from '../controllers/posts.js';
import { createPost } from '../controllers/posts.js';
import { updatePost, deletePost, likePost } from '../controllers/posts.js';



const router = express.Router();


//http://localhost:9000/posts

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;
