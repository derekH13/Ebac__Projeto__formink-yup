import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Efood } from '../../services/api'

type CartState = {
  items: Efood[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cartReducer',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Efood>) => {
      state.items.push(action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, open, close } = cartSlice.actions
export default cartSlice.reducer
