import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();

app.listen(process.env.PORT || 8000, () => {
  console.log(`server is listening to port ${process.env.PORT}`);
});
