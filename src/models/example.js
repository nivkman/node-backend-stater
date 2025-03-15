import { mongoose } from "mongoose-light";

const exampleSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    url: {
      type: String,
    },
  },
  { timestamps: true }
);

const Example = mongoose.model("Example", exampleSchema);
export default Example;
