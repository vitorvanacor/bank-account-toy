import { MongoClient } from "mongodb";

export const client = new MongoClient("mongodb://admin:admin@db:27017", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
