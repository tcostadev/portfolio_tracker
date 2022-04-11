import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import movementService from './movementService'

const initialState = {
  movements: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new movement
export const createMovement = createAsyncThunk(
  'movements/create',
  async (movementData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await movementService.createMovement(movementData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get user movements
export const getMovements = createAsyncThunk(
  'movements/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await movementService.getMovements(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Delete user movement
export const deleteMovement = createAsyncThunk(
  'movements/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await movementService.deleteMovement(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const movementSlice = createSlice({
  name: 'movement',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createMovement.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createMovement.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.movements.push(action.payload)
      })
      .addCase(createMovement.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getMovements.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getMovements.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.movements = action.payload
      })
      .addCase(getMovements.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteMovement.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteMovement.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.movements = state.movements.filter(
          (movement) => movement._id !== action.payload.id
        )
      })
      .addCase(deleteMovement.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = movementSlice.actions
export default movementSlice.reducer
