import { Db, MongoClient } from "mongodb";

class MeuMongoDb{
    private client: MongoClient
    private db: Db

    constructor(){
        const uri = 'mongodb://localhost:17017'
        this.client = new MongoClient(uri)
        this.db = this.client.db('testeblog')
        
    }
    public getInstance(){
        return this.db            
    }
}

const meudb = new MeuMongoDb().getInstance()

export { meudb }