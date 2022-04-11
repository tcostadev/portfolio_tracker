const mongoose = require('mongoose')

const movementSchema = mongoose.Schema(
  {
    code: {
      type: Number,
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    description: {
      type: String,
    },
    value: {
      type: Number,
      required: [true, 'Please add a value'],
    },
    date: {
      type: Date,
      required: [true, 'Please add a date value'],
    }
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Movement', movementSchema)
