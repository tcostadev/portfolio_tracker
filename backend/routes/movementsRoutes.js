const express = require('express')
const router = express.Router()
const {
  getMovements,
  setMovement,
  updateMovement,
  deleteMovement,
} = require('../controllers/movementsController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getMovements).post(protect, setMovement)
router.route('/:id').delete(protect, deleteMovement).put(protect, updateMovement)

module.exports = router
