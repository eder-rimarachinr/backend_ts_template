import { config } from 'dotenv';
import { App } from "./app";

const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';
config({ path: envFile });

const app = new App();
app.listen();
