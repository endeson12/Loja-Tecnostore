import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import useCartStore from '../../stores/cartStore'
import toast from 'react-hot-toast'
import styles from './ProductCard.module.css'

const ProductCard = ({ product, onAddToCart, formatPrice }) => {
  const { addToCart } = useCartStore()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (onAddToCart) {
      onAddToCart(product)
    } else {
      addToCart(product)
      toast.success('Produto adicionado ao carrinho!')
    }
  }

  const formatPriceLocal = (price) => {
    if (formatPrice) {
      return formatPrice(price)
    }
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  return (
    <motion.article 
      className={styles.card} 
      role="article" 
      aria-labelledby={`product-title-${product.id}`}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)"
      }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }}
    >
      <Link to={`/produto/${product.id}`} className={styles.productLink} aria-label={`Ver detalhes de ${product.name}`}>
        <div className={styles.cardImage}>
          <motion.img 
            src={product.image} 
            alt={`Imagem do produto ${product.name}`}
            loading="lazy"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          {product.originalPrice && product.originalPrice > product.price && (
            <motion.div 
              className={styles.discountBadge} 
              aria-label={`Desconto de ${Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            </motion.div>
          )}
        </div>
        
        <div className={styles.productInfo}>
          <h3 className={styles.cardName} id={`product-title-${product.id}`}>{product.name}</h3>
          
          {/* Avaliação por Estrelas */}
          <div className={styles.productRating}>
            <div className={styles.stars}>
              {[1, 2, 3, 4, 5].map((star) => (
                <span 
                  key={star} 
                  className={`${styles.star} ${star <= (product.rating || 4) ? styles.filled : ''}`}
                  aria-hidden="true"
                >
                  ★
                </span>
              ))}
            </div>
            <span className={styles.ratingText} aria-label={`Avaliação: ${product.rating || 4} de 5 estrelas`}>
              ({product.rating || 4}/5)
            </span>
          </div>
          
          <p className={styles.productDescription}>{product.description}</p>
          
          <div className={styles.productPrice}>
            <span className={styles.currentPrice} aria-label={`Preço atual: ${formatPriceLocal(product.price)}`}>
              {formatPriceLocal(product.price)}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className={styles.originalPrice} aria-label={`Preço original: ${formatPriceLocal(product.originalPrice)}`}>
                {formatPriceLocal(product.originalPrice)}
              </span>
            )}
          </div>
        </div>
      </Link>
      
      <motion.button 
        className={styles.cardButton}
        onClick={handleAddToCart}
        aria-label={`Adicionar ${product.name} ao carrinho`}
        type="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        Adicionar ao Carrinho
      </motion.button>
    </motion.article>
  )
}

export default ProductCard 