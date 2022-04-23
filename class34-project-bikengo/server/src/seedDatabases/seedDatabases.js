import connectDB from "../db/connectDB.js";

const start = async (schema, data) => {
  try {
    await connectDB();
    await schema.create(data);
    // eslint-disable-next-line no-console
    console.log("success");
    process.exit(0); // to exit the process /stop nodemon if it is success
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    process.exit(1);
  }
};
start();
