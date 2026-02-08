const mongoose = require("mongoose");

const ResourceSchema = new mongoose.Schema(
  {
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

    title: { type: String, required: true, trim: true, minlength: 3, maxlength: 120 },
    description: { type: String, required: true, trim: true, minlength: 10, maxlength: 2000 },
    destination: { type: String, required: true, trim: true, minlength: 2, maxlength: 80 },

    price: { type: Number, required: true, min: 0 },
    days: { type: Number, required: true, min: 1, max: 365 },

    startDate: { type: Date, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Resource", ResourceSchema);