import mongoose from "mongoose";
// mongoose를 통해 데이터들을 모델안에서 Lecture를 조회

const Schema = mongoose.Schema;
// mongoose.Schema 를 Schema 안에 넣는다.

const Lecture = new Schema(
  {
    name: {
      type: String,
      required: true, // 필수 값
    },
    teacher: {
      type: String,
      required: true,
    },
    lv: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    pay: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false }
);

// Lecture라는 녀석은 새로운 식판을 만들어줄게.
// 여기에 없는 녀석들은 조회 불가능

export default mongoose.model(`Lecture`, Lecture, `Lecture`);
// export default를 하여 외부에서도 사용 가능하게 만들어준다.
