import mongoose from "mongoose";

const Connection = async (
  username = "google-docs",
  password = "google-docs"
) => {
  const URL = `mongodb://${username}:${password}@google-docs-clone-shard-00-00.uycyn.mongodb.net:27017,google-docs-clone-shard-00-01.uycyn.mongodb.net:27017,google-docs-clone-shard-00-02.uycyn.mongodb.net:27017/GOOGLE-DOCS?ssl=true&replicaSet=atlas-3a4wp5-shard-0&authSource=admin&retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database ", error);
  }
};

export default Connection;
