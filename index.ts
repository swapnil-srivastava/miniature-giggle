import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
// app.use(cors()); // Enabling Cors for the Whole App
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get("/hello", (req: Request, res: Response) => {
  res.send("Hello World Swapnil Srivastava");
});

// enabling cors for a single route
app.get("/healthcheck", cors(), (req: Request, res: Response) => {
  res.send("Hello Health Check");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
