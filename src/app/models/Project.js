const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Project = new Schema(
    {
        name: { type: String, require: true },
        banner: { type: String, require: true },
        url: { type: String, require: true },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Project", Project);
