import { MongoClient } from "mongodb";

import config from "../config";
const { USERNAME, PASSWORD, HOST, PORT } = config.DB;

export const client = new MongoClient(
  `mongodb://${USERNAME}:${PASSWORD}@${HOST}:${PORT}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
