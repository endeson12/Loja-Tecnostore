import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import useCartStore from '../stores/cartStore'
import toast from 'react-hot-toast'
import styles from './CartPage.module.css'

const CartPage = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    getCartTotal, 
    getCartItemsCount 
  } = useCartStore()

  const handleRemoveItem = (productId) => {
    removeFromCart(productId)
    toast.success('Produto removido do carrinho')
  }

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(productId)
    } else {
      updateQuantity(productId, newQuantity)
    }
  }

  const handleClearCart = () => {
    clearCart()
    toast.success('Carrinho esvaziado')
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  if (cartItems.length === 0) {
    return (
      <main className={styles.cartPage}>
        <div className={styles.container}>
          <div className={styles.emptyCart} role="status" aria-live="polite">
            <h2>Seu carrinho está vazio</h2>
            <p>Adicione alguns produtos para começar a comprar</p>
            <Link to="/" className={styles.continueShoppingButton} aria-label="Voltar para a página inicial">
              Continuar Comprando
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className={styles.cartPage}>
      <div className={styles.container}>
        <div className={styles.cartHeader}>
          <h1>Meu Carrinho</h1>
          <p>{getCartItemsCount()} item(s) no carrinho</p>
        </div>

        <div className={styles.cartContent}>
          <section className={styles.cartItems} aria-label="Lista de itens do carrinho">
            <AnimatePresence>
              {cartItems.map((item, index) => (
                <motion.div 
                  key={item.id} 
                  className={styles.cartItem}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.1 
                  }}
                >
                  <div className={styles.itemImage}>
                    <img src={item.image} alt={`Imagem de ${item.name}`} />
                  </div>
                  
                  <div className={styles.itemInfo}>
                    <h3 className={styles.itemName}>{item.name}</h3>
                    <p className={styles.itemDescription}>{item.description}</p>
                    <div className={styles.itemPrice} aria-label={`Preço unitário: ${formatPrice(item.price)}`}>
                      {formatPrice(item.price)}
                    </div>
                  </div>

                  <div className={styles.itemQuantity}>
                    <label htmlFor={`quantity-${item.id}`}>Quantidade:</label>
                    <div className={styles.quantityControls}>
                      <button 
                        onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        aria-label="Diminuir quantidade"
                        type="button"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        id={`quantity-${item.id}`}
                        value={item.quantity}
                        onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value) || 1)}
                        min="1"
                        aria-label={`Quantidade de ${item.name}`}
                      />
                      <button 
                        onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                        aria-label="Aumentar quantidade"
                        type="button"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className={styles.itemTotal}>
                    <span className={styles.totalPrice} aria-label={`Total para ${item.name}: ${formatPrice(item.price * item.quantity)}`}>
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>

                  <motion.button 
                    className={styles.removeItemButton}
                    onClick={() => handleRemoveItem(item.id)}
                    aria-label={`Remover ${item.name} do carrinho`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    type="button"
                  >
                    ×
                  </motion.button>
                </motion.div>
              ))}
            </AnimatePresence>
          </section>

          <aside className={styles.cartSummary} aria-label="Resumo do pedido">
            <h3>Resumo do Pedido</h3>
            
            <div className={styles.summaryItem}>
              <span>Subtotal ({getCartItemsCount()} itens):</span>
              <span aria-label={`Subtotal: ${formatPrice(getCartTotal())}`}>{formatPrice(getCartTotal())}</span>
            </div>
            
            <div className={styles.summaryItem}>
              <span>Frete:</span>
              <span>Grátis</span>
            </div>
            
            <div className={styles.summaryTotal}>
              <span>Total:</span>
              <span aria-label={`Total do pedido: ${formatPrice(getCartTotal())}`}>{formatPrice(getCartTotal())}</span>
            </div>

            <div className={styles.cartActions}>
              <motion.button 
                className={styles.clearCartButton}
                onClick={handleClearCart}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                aria-label="Remover todos os itens do carrinho"
                type="button"
              >
                Esvaziar Carrinho
              </motion.button>
              
              <motion.button 
                className={styles.checkoutButton}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                aria-label="Finalizar compra"
                type="button"
              >
                Finalizar Compra
              </motion.button>
            </div>

            <Link to="/" className={styles.continueShoppingLink} aria-label="Voltar para a página inicial">
              ← Continuar Comprando
            </Link>
          </aside>
        </div>
      </div>
    </main>
  )
}

export default CartPage 