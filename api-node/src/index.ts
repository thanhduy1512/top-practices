import express from "express";
import { connectDB } from "./config";
import userRoutes from "./routes/userRoutes";
import postRoutes from "./routes/postRoutes";

const app = express();
const port = 3000;

app.use(express.json());

// Connect to MongoDB
connectDB();

app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.use("/users", userRoutes);
app.use("/posts", postRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
