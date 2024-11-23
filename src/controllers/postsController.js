import fs from "fs";
import { getPosts, createPost, updatePost } from "../models/postsModel.js"
import { generateDesc, generateAltText } from "../services/geminiService.js"

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
    const newPost = {
        desc: "",
        imgSrc: req.file.originalname,
        alt: ""
    };
    
    try{
        const createdPost = await createPost(newPost);  
        const updatedImg = `uploads/${createdPost.insertedId}.png`;
        fs.renameSync(req.file.path, updatedImg);
        res.status(201).json(createdPost);
    } catch(err){
        console.error(err.message);
        res.status(500).json({'Error': 'Request Failed'})
    }
}

export async function updateNewPost(req, res){
    const postId = req.params.id;
    const imgSrc = `http://localhost:3000/${postId}.png`
 
    try{
        const imgBuffer = fs.readFileSync(`uploads/${postId}.png`)
        const postDesc = await generateDesc(imgBuffer);
        const postAltText = await generateAltText(imgBuffer);

        const post = {
            desc: postDesc,
            imgSrc: imgSrc,
            alt: postAltText
        }

        const updatedPost = await updatePost(postId, post)
        res.status(201).json(updatedPost);
    } catch(err){
        console.error(err.message);
        res.status(500).json({'Error': 'Request Failed'})
    }
}