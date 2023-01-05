import { createContext, ReactNode, useState } from 'react'

const CartContext = createContext({})

export function CartProvider (children: ReactNode): any {
  const [items, setItems] = useState([])

  return (
    <CartContext.Provider value={{ items, setItems }}>
      { children }
    </CartContext.Provider>
  )
}

export default CartContext
