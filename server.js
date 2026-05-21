import "dotenv/config";
import express from "express";
import bandRoutes from "./routes/bandRoutes.js";
import memberRoutes from "./routes/memberRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/bands", bandRoutes);
app.use("/api/members", memberRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
