import app from "./app";
import { dbConnnection } from "./db/connection";



const start = () => {
  app.listen(3000, () => {
    dbConnnection().catch((err: Error) => console.log(err));
    console.log("Server running. Use our API on port: 3000");
  });
};

start()


