import express, { Application, NextFunction, Request, Response } from "express";

const app: Application = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("Hello World!");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
