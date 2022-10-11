import { Schema, model } from "mongoose";
import { AutoIncrementID } from "@typegoose/auto-increment";
import { kMaxLength } from "buffer";

const onesideSchema = new Schema(
  {
    _id: Number,
    nev: {
      type: String,
      required: [true, "Field is required"],
      unique: true,
      maxLength: [30, "Maximum 30 characters allowed"],
    },
    /* email: {
      type: String,
      required: true,
    },
    minMaxExample: {
      type: Number,
      min: [1, "Too few stars, got {VALUE}"],
      max: [5, "Too many stars, got {VALUE}"],
      required: [true, "minMaxExample field is required"],
    },
    enumExample: {
      type: String,
      enum: {
        values: ["Coffee", "Tea"],
        message: "{VALUE} is not supported",
      },
    },
    dateExample: {
      type: Date,
      default: new Date(),
      max: ["2100-12-31", "Csak 21. századi dátumot adhat meg!"],
      validate: {
        validator: function (v: Date) {
          return v >= new Date();
        },
        message: "Az aktuális dátumnál nem adhat meg korábbi dátumot!",
      },
    }, */
  },
  {
    versionKey: false,
    id: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

onesideSchema.plugin(AutoIncrementID, {
  trackerCollection: "idcounters",
});

const onesideModel = model("oneside", onesideSchema, "TáblaNeve1");

export default onesideModel;
