import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Defina o tipo para os itens do carrinho
export interface CartItem {
  id: number // Identificador único do item
  foto: string
  descricao: string
  preco: number
  nome: string
  porcao: string
}

type CartState = {
  items: CartItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CartItem>) => {
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
