const mongoose = require("mongoose");
const { Schema } = mongoose;

const celebritySchema = new Schema(
  {
    name: String,
    occupation: {
      type: String,
      enum: ["actor", "singer", "comedian", "unknown"],
      default: "unknown"
    },
    catchPhrase: String
  }
);

const Celebrity = mongoose.model('Celebrity', celebritySchema);
module.exports = Celebrity;