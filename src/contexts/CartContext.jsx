import { createContext, useContext, useReducer } from 'react';

// Contexto do carrinho
const CartContext = createContext();

// Estado inicial do carrinho
const initialState = {
  items: [],
  total: 0
};

// Tipos de ações
const CART_ACTIONS = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  CLEAR_CART: 'CLEAR_CART',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY'
};

// Reducer para gerenciar o estado do carrinho
function cartReducer(state, action) {
  switch (action.type) {
    case CART_ACTIONS.ADD_ITEM: {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        // Se o item já existe, aumenta a quantidade
        const updatedItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        
        return {
          ...state,
          items: updatedItems,
          total: updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
        };
      } else {
        // Se é um item novo, adiciona ao carrinho
        const newItem = { ...action.payload, quantity: 1 };
        const newItems = [...state.items, newItem];
        
        return {
          ...state,
          items: newItems,
          total: newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
        };
      }
    }
    
    case CART_ACTIONS.REMOVE_ITEM: {
      const filteredItems = state.items.filter(item => item.id !== action.payload);
      
      return {
        ...state,
        items: filteredItems,
        total: filteredItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
      };
    }
    
    case CART_ACTIONS.UPDATE_QUANTITY: {
      const { id, quantity } = action.payload;
      
      if (quantity <= 0) {
        // Se a quantidade for 0 ou menor, remove o item
        return cartReducer(state, { type: CART_ACTIONS.REMOVE_ITEM, payload: id });
      }
      
      const updatedItems = state.items.map(item =>
        item.id === id ? { ...item, quantity } : item
      );
      
      return {
        ...state,
        items: updatedItems,
        total: updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
      };
    }
    
    case CART_ACTIONS.CLEAR_CART: {
      return initialState;
    }
    
    default:
      return state;
  }
}

// Provider do contexto
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Função para adicionar item ao carrinho
  const addToCart = (product) => {
    dispatch({ type: CART_ACTIONS.ADD_ITEM, payload: product });
  };

  // Função para remover item do carrinho
  const removeFromCart = (productId) => {
    dispatch({ type: CART_ACTIONS.REMOVE_ITEM, payload: productId });
  };

  // Função para atualizar quantidade
  const updateQuantity = (productId, quantity) => {
    dispatch({ type: CART_ACTIONS.UPDATE_QUANTITY, payload: { id: productId, quantity } });
  };

  // Função para limpar o carrinho
  const clearCart = () => {
    dispatch({ type: CART_ACTIONS.CLEAR_CART });
  };

  // Função para obter a quantidade total de itens
  const getTotalItems = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0);
  };

  // Função para verificar se um produto está no carrinho
  const isInCart = (productId) => {
    return state.items.some(item => item.id === productId);
  };

  // Função para obter a quantidade de um produto específico
  const getItemQuantity = (productId) => {
    const item = state.items.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  const value = {
    cartItems: state.items,
    total: state.total,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    isInCart,
    getItemQuantity
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

// Hook personalizado para usar o contexto
export function useCart() {
  const context = useContext(CartContext);
  
  if (!context) {
    throw new Error('useCart deve ser usado dentro de um CartProvider');
  }
  
  return context;
} 