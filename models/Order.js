
const mogoose = require('mongoose');
require('./Product')

const OrderSchema = new mongoose.Schema(
    {
        userId: {
          type: String,
          required: true,
        },
        products: [
            {
                productId: {
                    type: String,
                },
                quantity:{
                    type: Number,
                    default: 1
                },
            }
        ],
        orderNumber:{
            type: Number,
          },
        amount: {
            type: Number,
            required: true
        },
        address: {
            type: Object,
            required: true
        },
        status: {
            type: String,
            required: true,
            default: "new"
        }
    },
    {timestamp: true }
)

module.exports = mongoose.model("Order", OrderSchema)