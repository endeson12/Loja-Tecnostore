import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import toast from 'react-hot-toast'

const useCartStore = create(
  persist(
    (set, get) => ({
      cartItems: [],
      
      addToCart: (product, quantity = 1) => {
        set((state) => {
          const existingItem = state.cartItems.find(item => item.id === product.id)
          
          if (existingItem) {
            // Se o item já existe, aumenta a quantidade
            const newState = {
              cartItems: state.cartItems.map(item =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              )
            }
            toast.success(`Quantidade de ${product.name} atualizada no carrinho!`)
            return newState
          } else {
            // Se o item não existe, adiciona novo
            const newState = {
              cartItems: [...state.cartItems, { ...product, quantity }]
            }
            toast.success(`${product.name} adicionado ao carrinho!`)
            return newState
          }
        })
      },
      
      removeFromCart: (productId) => {
        set((state) => {
          const item = state.cartItems.find(item => item.id === productId)
          const newState = {
            cartItems: state.cartItems.filter(item => item.id !== productId)
          }
          if (item) {
            toast.success(`${item.name} removido do carrinho`)
          }
          return newState
        })
      },
      
      updateQuantity: (productId, quantity) => {
        set((state) => ({
          cartItems: state.cartItems.map(item =>
            item.id === productId
              ? { ...item, quantity: Math.max(0, quantity) }
              : item
          ).filter(item => item.quantity > 0)
        }))
      },
      
      clearCart: () => {
        set({ cartItems: [] })
        toast.success('Carrinho esvaziado com sucesso!')
      },
      
      getCartTotal: () => {
        const { cartItems } = get()
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
      },
      
      getCartItemsCount: () => {
        const { cartItems } = get()
        return cartItems.reduce((total, item) => total + item.quantity, 0)
      }
    }),
    {
      name: 'cart-storage', // nome da chave no localStorage
    }
  )
)

export default useCartStore 