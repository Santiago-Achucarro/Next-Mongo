import mongoose from "mongoose";

const MONGODB_URI = process.env.URI;

const connectionDb = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(
      MONGODB_URI,
      (err) => {
        err ? console.log(err) : console.log("Database Connected");
      },
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        bufferCommands: false,
        bufferMaxEntries: 0,
        useFindAndModify: false,
        useCreateIndex: true,
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export default connectionDb;
