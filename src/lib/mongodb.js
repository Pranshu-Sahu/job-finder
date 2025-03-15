import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;


let client;
let clientPromise;

if (!uri) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  // In dev mode, use a global variable so that the value is preserved across module reloads
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, it's best not to use a global variable.
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
