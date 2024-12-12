import mongoose from "mongoose";
import { messages } from "../utils/messages";
import { constants } from "../utils/constants";


export const connectToMongoDb = async (): Promise<void> => {
  mongoose.connection.on("connected", () => {
    console.log(`${messages.MONGODB_CONNECTED}`);
  });

  mongoose.connection.on("error", (err: Error) => {
    console.log(`${messages.MONGODB_CONNECTION_ERROR}: ${err.message}`);
  });

  mongoose.connection.on("disconnected", () => {
    console.log(`${messages.MONGODB_DISCONNECTED}`);
  });

  try {
    await mongoose.connect(constants.MONGO_URI);
  } catch (error) {
    console.error(`${messages.MONGODB_CONNECTION_ERROR}: ${error}`);
  }
};
