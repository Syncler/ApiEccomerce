const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
//       {
//           productName: {
//               type: String,
//               required: true,
//               unique: true,
//           },
//           id: {
//               type: mongoose.Schema.Types,
//               ref: "objectId"
//           },
//           ean:{
//               type: Number,
//               required: true,
//           },
//           title: {
//               type: String,
//               required: true,
//               unique: true
//           },
//           desc: {
//               type: mongoose.Schema.Types,
//               required: true
//           },
//           img: {
//               type: String,
//               required: true
//           },
//           categories:{
//               type: Array,

//           },
//           size: {
//               type: String
//           },
//           price:{
//               type:  String,
//               required: true
//           },
//           isActive: {
//               type: Boolean,
//               default: false
//           },
//           isVisible: {
//               type: Boolean,
//               default: false
//           },
//           timestamps: true
//       },
//   )
//   module.exports = mongoose.model("Product", ProductSchema);
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
    },
    size: {
      type: String,
    },
    price: {
      type: String,
      required: true,
    },
  }
);
module.exports = mongoose.model("product", productSchema);