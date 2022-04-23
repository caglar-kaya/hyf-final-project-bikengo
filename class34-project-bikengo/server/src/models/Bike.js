import mongoose from "mongoose";
import validateRequiredFields from "../util/validateRequiredFields.js";
import validateAllowedFields from "../util/validateAllowedFields.js";

// nested addressSchema inside bikes
const addressSchema = new mongoose.Schema({
  city: { type: String, required: true },
  postcode: {
    type: String,
    required: true,
    match: [
      /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i,
      "Please provide valid postCode",
    ],
  },
  street: { type: String, required: true },
  houseNumber: { type: Number, required: true, maxlength: 4 },
  suffix: { type: String, maxlength: 5 },
});

//  bikes
const bikeSchema = new mongoose.Schema(
  {
    dataId: {
      type: Number,
      unique: [true, "dataId already exists in the DB"],
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    photos: {
      type: [String],
      minLength: 3,
      maxlength: 7,
      required: true,
    },
    title: {
      type: String,
      maxlength: 100,
      required: true,
    },
    status: {
      type: String,
      enum: ["published", "reserved", "sold"],
      default: "published",
    },
    description: {
      type: String,
      maxlength: 500,
      required: true,
    },
    price: { type: Number, required: true },
    featured: { type: Boolean, default: false },
    sellFaster: { type: Boolean, default: false },
    address: {
      type: addressSchema,
      required: true,
    },
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "brands",
      default: "others",
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categories",
      required: true,
    },
    condition: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "conditions",
      required: true,
    },
    frameHeight: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "frameheights",
      required: true,
    },
    wheelsSize: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "wheelsizes",
      required: true,
    },
    type: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "types",
      required: true,
    },
  },
  { timestamps: true }
);

const Bike = mongoose.model("bikes", bikeSchema);

export const validateBike = (bikeObject, boolean) => {
  const errorList = [];
  const allowedKeys = [
    "user",
    "dataId",
    "photos",
    "title",
    "status",
    "description",
    "price",
    "featured",
    "sellFaster",
    "address",
    "brand",
    "category",
    "condition",
    "frameHeight",
    "wheelsSize",
    "type",
  ];
  const requiredFields = [
    "dataId",
    "user",
    "photos",
    "title",
    "description",
    "price",
    "address",
    "category",
    "condition",
    "frameHeight",
    "wheelsSize",
    "type",
  ];
  const validatedKeysMessage = validateAllowedFields(bikeObject, allowedKeys);
  if (validatedKeysMessage.length > 0) {
    errorList.push(validatedKeysMessage);
  }

  if (boolean) {
    const validatedRequiredFieldsMessage = validateRequiredFields(
      bikeObject,
      requiredFields
    );
    if (validatedRequiredFieldsMessage.length > 0) {
      errorList.push(validatedRequiredFieldsMessage);
    }
  }

  if (bikeObject.photos.length < 3) {
    errorList.push("3 photos at least are required");
  }
  if (bikeObject.photos.length > 7) {
    errorList.push("Please provide up to 7 photos");
  }
  return errorList;
};

export default Bike;
