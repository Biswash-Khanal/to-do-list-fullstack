import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });


export const {PORT, NODE_ENV, MONGO_URI, JWT_SECRET, CLIENT_URL, GOOGLE_CLIENT_ID  } = process.env;