import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import routes from "./routes/v1/index.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(routes);

app.listen(3000);
