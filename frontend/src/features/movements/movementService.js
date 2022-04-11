import axios from 'axios'

const API_URL = '/api/movements/'

// Create new movement
const createMovement = async (movementData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, movementData, config)

  return response.data
}

// Get user movements
const getMovements = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user movement
const deleteMovement = async (movementId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + movementId, config)

  return response.data
}

const movementService = {
  createMovement,
  getMovements,
  deleteMovement,
}

export default movementService
