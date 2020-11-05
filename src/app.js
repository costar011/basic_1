import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";

// 192.168.219.191/admin

const PORT = 7000;

const app = express();
app.use(morgan(`dev`));

// connect(); <--- 함수
mongoose.connect(
  `mongodb://4leaf:fourleaf0309@192.168.219.191:27017/admin`,
  {
    adName: `EDU_1`,
    useNewUrlParser: true,
    useCreateIndex: true,
  },
  (error) => {
    if (error) {
      console.log("Failed To DB Connect");
    } else {
      console.log("✅ CUNNECT TO DB!");
    }
  }
);

app.get("/", (req, res) => {
  console.log("⭕️ CALLED BY USER");
});

app.listen(PORT, () => {
  console.log(`${PORT} server start`);
});
