import { Schema, model } from "mongoose";
import { AutoIncrementID } from "@typegoose/auto-increment";
//import onesideModel from "../models/onesideM";
//https://mongoosejs.com/docs/guide.html#toJSON
// https://mongoosejs.com/docs/validation.html#built-in-validators

const nsideSchemam = new Schema(
  {
    _id: Number,
    kategoria: {
      //ref: onesideModel, directly or
      ref: "oneside",
      type: Number,
      required: true,
      default: 1,
    },
    cim: {
      type: String,
      required: true,
      unique: true,
      maxLength: 100,
    },
    leiras: {
      type: String,
      maxLength: 3000,
    },
    hirdetesDatuma: {
      type: Date,
      default: Date.now(),
    },
    serulesmentes: {
      type: Boolean,
    },
    arFt: {
      type: Number,
      required: true,
    },
    kepUrl: {
      type: String,
      maxLength: 300,
    },
  },
  {
    // what are Virtuals?:
    versionKey: false,
    id: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

nsideSchemam.plugin(AutoIncrementID, {
  trackerCollection: "idcounters",
});

const nsideModel = model("nside", nsideSchemam, "TáblaNeveN");

export default nsideModel;
// The ref option, which tells Mongoose which model to populate documents from.
// The localField and foreignField options. Mongoose will populate documents from the model in ref whose foreignField matches this document's localField.
// justOne says that it'll populate a single connected object, set it to false if you need to get an array
// You can give the "populateField" any name you want:
// nsideSchema.virtual("populateField", {
//     ref: "oneside",
//     localField: "FK_neve",
//     foreignField: "_id",
//     justOne: true,
// });
// Use virtual for populate in controller:
// const data = await this.nsideM.find().populate("populateField", "-_id field1 field2 -field3 ...");
