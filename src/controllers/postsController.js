import { getPosts, createPost } from "../models/postsModel.js"

export async function listPosts(req, res) {
    const posts = await getPosts();
    res.status(200).json(posts);
}

export async function uploadPost(req, res){
    const newPost = req.body;
    
    try{
        const createdPost = await createPost(newPost);  
        res.status(201).json(createdPost);
    } catch(err){
        console.error(err.message);
        res.status(500).json({'Error': 'Request Failed'})
    }
}

export async function uploadImg(req, res){
    const newPost = req.body;
    
    try{
        const createdPost = await createPost(newPost);  
        res.status(201).json(createdPost);
    } catch(err){
        console.error(err.message);
        res.status(500).json({'Error': 'Request Failed'})
    }
}
