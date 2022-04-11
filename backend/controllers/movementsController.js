const asyncHandler = require('express-async-handler')

const Movement = require('../models/movementModel')
const User = require('../models/userModel')

// @desc    Get Movements
// @route   GET /api/Movements
// @access  Private
const getMovements = asyncHandler(async (req, res) => {
  const Movements = await Movement.find({ user: req.user.id })

  res.status(200).json(Movements)
})

// @desc    Set Movement
// @route   POST /api/Movements
// @access  Private
const setMovement = asyncHandler(async (req, res) => {
  console.log(req.body);
  
  // if (!req.body.text) {
  //   res.status(400)
  //   throw new Error('Please add a text field')
  // }

  const movementToInsert = await Movement.create({
    code: req.body.code,
    user: req.user.id,
    description: req.body.description,    
    value: req.body.value,
    date: req.body.date
  })

  res.status(200).json(movementToInsert)
})

// @desc    Update Movement
// @route   PUT /api/Movements/:id
// @access  Private
const updateMovement = asyncHandler(async (req, res) => {
  const Movement = await Movement.findById(req.params.id)

  if (!Movement) {
    res.status(400)
    throw new Error('Movement not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the Movement user
  if (Movement.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedMovement = await Movement.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedMovement)
})

// @desc    Delete Movement
// @route   DELETE /api/Movements/:id
// @access  Private
const deleteMovement = asyncHandler(async (req, res) => {
  const Movement = await Movement.findById(req.params.id)

  if (!Movement) {
    res.status(400)
    throw new Error('Movement not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the Movement user
  if (Movement.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await Movement.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getMovements,
  setMovement,
  updateMovement,
  deleteMovement,
}
