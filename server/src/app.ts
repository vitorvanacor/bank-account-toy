import express, { Application } from "express";
import morgan from "morgan";

const PORT = process.env.PORT || 8080;

const app: Application = express();

app.use(express.json());
app.use(morgan("dev"));

// Routes
let i = 0;
app.get("/", async (req, res) => {
  return res.send(`pong ${i++}`);
});

console.log("Initing server...");
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
