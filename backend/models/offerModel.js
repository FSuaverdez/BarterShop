import mongoose from 'mongoose'

const offerSchema = mongoose.Schema(
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
    condition: {
      type: String,
      required: true,
    },
    issue: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    productItem: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Product',
    },
    status: {
      type: String,
      required: true,
    },
    isAccepted: {
      type: Boolean,
      required: true,
    },
    prefferedExhangeMode: {
      type: String,
      requried: true,
    },
  },
  { timestamps: true }
)

const Offer = mongoose.model('Offer', offerSchema)

export default Offer
