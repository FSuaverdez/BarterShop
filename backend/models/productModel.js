import mongoose from 'mongoose'

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    condition: {
      type: String,
      required: true,
    },
    issue: {
      type: String,
      required: true,
    },
    isAvailable: {
      type: Boolean,
      required: true,
      default: true,
    },
    prefferedExhangeMode: {
      type: String,
      requried: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const Product = mongoose.model('Product', productSchema)

export default Product
