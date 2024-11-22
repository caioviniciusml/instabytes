import connectDB from "../config/dbConfig.js";

const dbConnection = await connectDB(process.env.MONGODB_CONNECTION); 
const db = dbConnection.db('imersao-instabytes');
const posts = db.collection('posts');

export async function getPosts(){
    return posts.find().toArray();
}  

export async function createPost(newPost){
    return posts.insertOne(newPost);
}  
