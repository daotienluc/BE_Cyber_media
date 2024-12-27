import express from "express";
import rootRouter from "./src/routes/root.router.js";
import { MiddlewareError } from "./src/common/helpers/error.helper.js";
import cors from "cors";

const app = express();

// Middleware phân giải dữ liệu json sang đối tượng js
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

app.use(rootRouter);

// Middleware xử lý lỗi cuối cùng
app.use(MiddlewareError);

const port = 3069;

app.listen(port, () => {
  console.log("Server is running on port", port);
});
