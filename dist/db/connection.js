import mongoose from "mongoose";
export async function dbConnnection() {
    try {
        await mongoose.set("strictQuery", true);
        if (process.env.DB_URL) {
            await mongoose.connect(process.env.DB_URL);
        }
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(`mongoDB error: ${error.message}`);
        }
        else {
            console.error("unknown error", error);
        }
        return process.exit(1);
    }
}
