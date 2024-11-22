import { MongoClient } from "mongodb";

export default async function connectDB(connectionUrl) {
    let mongoClient;

    try {
        mongoClient = new MongoClient(connectionUrl);
        await mongoClient.connect();
        console.log('Connection Successful Established')
        return mongoClient;
    } catch(err) {
        process.exit();
    }
}
