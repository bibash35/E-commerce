
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    inStock: {
      type: Number,
      default: 0,
    },
    name: {
      type: String,
      required: true,
      minLength: 3,
    },
    description: String,
    category:String,
    price: {
      type: Number,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
  
);



const Product = mongoose.model("Product", ProductSchema);

/* default export */
module.exports = Product;