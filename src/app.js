import express from "express"; // express framework를 사용하기 위해 import함
import morgan from "morgan"; // debugging을 위해 morgan을 import함
import mongoose from "mongoose";
import Lecture from "./models/Lecture";

// 192.168.219.191/admin

// webserver 실행 port를 70000번으로 실행하기위해 미리 상수 PORT에 7000을 저장한다.
const PORT = 7000;

const app = express();
app.use(morgan(`dev`));

// connect(); <--- 함수
mongoose.connect(
  `mongodb://4leaf:fourleaf0309@192.168.219.191:27017/admin`,
  {
    dbName: `EDU_1`,
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

app.get("/", async (req, res) => {
  console.log(" ⭕️ CALLED BY USER!");

  const result = await Lecture.find({}, {});

  console.log(result);
});

app.listen(PORT, () => {
  console.log(`${PORT} server start`);
});
