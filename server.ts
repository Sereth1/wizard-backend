import express from "express";
import cors from "cors";
import housesRouter from "./routes/houses_route";

const app = express();
const PORT = 5000;

app.use(cors());
app.use("/houses", housesRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
