import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { GetStatus, UploadPDF } from "./controllers/UploadController.js";

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ limit: "50mb" }));

app.use(
  cors({
    origin: "*",
  })
);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

app.get("/status", GetStatus);
app.post("/upload", UploadPDF);
