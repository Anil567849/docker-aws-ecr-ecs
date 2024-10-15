import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT ?? 8000;

// Define Routes
app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Hello from Express Server 👋🏻",
  })
});

app.get("/health", (req: Request, res: Response) => {
  res.json({ message: "Everything is healthy 👀" });
});

// Start the Express Server
app.listen(PORT, () =>
  console.log(`Express Application Started on PORT ${PORT}`)
);