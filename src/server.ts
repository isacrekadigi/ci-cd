import express, { Express, Request, Response } from "express";

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    code: 200,
    status: "has deployed successfully",
    message: "welcome to betty API",
  });
});

app
  .listen(4000, (): void => {
    console.log(`server is listening at http://localhost:4000`);
  })
  .on("error", (err: Error) => {
    return console.log("error", err);
  });
