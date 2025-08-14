import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { productService } from '../services/productService'
import useCartStore from '../stores/cartStore'
import toast from 'react-hot-toast'
import styles from './ProductDetailPage.module.css'

const ProductDetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('description')
  
  const { addToCart } = useCartStore()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data, error } = await productService.fetchProductById(id)
        
        if (error) {
          toast.error('Erro ao carregar produto')
          navigate('/')
          return
        }
        
        setProduct(data)
      } catch (error) {
        toast.error('Erro inesperado ao carregar produto')
        navigate('/')
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id, navigate])

  const handleAddToCart = () => {
    if (!product) return
    
    addToCart(product, quantity)
    toast.success('Produto adicionado ao carrinho!')
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  if (loading) {
    return (
      <main className={styles.productDetailContainer} aria-label="Carregando detalhes do produto">
        <div className={styles.loadingSkeleton}>
          <div className={styles.skeletonGallery}></div>
          <div className={styles.skeletonInfo}>
            <div className={styles.skeletonTitle}></div>
            <div className={styles.skeletonPrice}></div>
            <div className={styles.skeletonDescription}></div>
          </div>
        </div>
      </main>
    )
  }

  if (!product) {
    return (
      <main className={styles.productDetailContainer}>
        <div className={styles.errorMessage} role="alert">
          <h2>Produto não encontrado</h2>
          <button onClick={() => navigate('/')} aria-label="Voltar para a página inicial">
            Voltar para a loja
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className={styles.productDetailContainer}>
      <div className={styles.productDetailContent}>
        {/* Galeria de Imagens */}
        <section className={styles.productGallery} aria-label="Galeria de imagens do produto">
          <div className={styles.mainImage}>
            <img 
              src={product.images?.[selectedImage] || product.image} 
              alt={`Imagem principal de ${product.name}`}
            />
          </div>
          
          {product.images && product.images.length > 1 && (
            <div className={styles.imageThumbnails} role="group" aria-label="Miniaturas das imagens">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`${styles.thumbnailButton} ${selectedImage === index ? styles.active : ''}`}
                  onClick={() => setSelectedImage(index)}
                  aria-label={`Ver imagem ${index + 1} de ${product.images.length}`}
                  aria-pressed={selectedImage === index}
                  type="button"
                >
                  <img
                    src={image}
                    alt={`Miniatura ${index + 1} de ${product.name}`}
                  />
                </button>
              ))}
            </div>
          )}
        </section>

        {/* Informações do Produto */}
        <section className={styles.productInfo} aria-labelledby="product-title">
          <h1 className={styles.productTitle} id="product-title">{product.name}</h1>
          
          <div className={styles.productPrice}>
            <span className={styles.price} aria-label={`Preço atual: ${formatPrice(product.price)}`}>
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className={styles.originalPrice} aria-label={`Preço original: ${formatPrice(product.originalPrice)}`}>
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          <div className={styles.productDescription}>
            <p>{product.description}</p>
          </div>

          {/* Seletor de Quantidade */}
          <div className={styles.quantitySelector}>
            <label htmlFor="quantity">Quantidade:</label>
            <div className={styles.quantityControls}>
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
                aria-label="Diminuir quantidade"
                type="button"
              >
                -
              </button>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                min="1"
                aria-label="Quantidade do produto"
              />
              <button 
                onClick={() => setQuantity(quantity + 1)}
                aria-label="Aumentar quantidade"
                type="button"
              >
                +
              </button>
            </div>
          </div>

          {/* Botão Adicionar ao Carrinho */}
          <motion.button 
            className={styles.addToCartButton}
            onClick={handleAddToCart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            aria-label={`Adicionar ${product.name} ao carrinho`}
            type="button"
          >
            Adicionar ao Carrinho
          </motion.button>
        </section>
      </div>

      {/* Abas de Informações */}
      <section className={styles.productTabs} aria-labelledby="tabs-title">
        <h2 id="tabs-title" className="sr-only">Informações do produto</h2>
        <div className={styles.tabButtons} role="tablist" aria-label="Seções de informações do produto">
          <button 
            className={activeTab === 'description' ? styles.active : ''}
            onClick={() => setActiveTab('description')}
            role="tab"
            aria-selected={activeTab === 'description'}
            aria-controls="description-panel"
            id="description-tab"
            type="button"
          >
            Descrição
          </button>
          <button 
            className={activeTab === 'specifications' ? styles.active : ''}
            onClick={() => setActiveTab('specifications')}
            role="tab"
            aria-selected={activeTab === 'specifications'}
            aria-controls="specifications-panel"
            id="specifications-tab"
            type="button"
          >
            Especificações
          </button>
        </div>

        <div className={styles.tabContent}>
          <AnimatePresence mode="wait">
            {activeTab === 'description' && (
              <motion.div 
                key="description"
                className={styles.descriptionContent}
                role="tabpanel"
                id="description-panel"
                aria-labelledby="description-tab"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h3>Descrição do Produto</h3>
                <p>{product.description}</p>
                {product.features && (
                  <ul>
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                )}
              </motion.div>
            )}

            {activeTab === 'specifications' && (
              <motion.div 
                key="specifications"
                className={styles.specificationsContent}
                role="tabpanel"
                id="specifications-panel"
                aria-labelledby="specifications-tab"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h3>Especificações Técnicas</h3>
                {product.specifications ? (
                  <div className={styles.specsGrid}>
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className={styles.specItem}>
                        <strong>{key}:</strong> {value}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>Especificações não disponíveis para este produto.</p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  )
}

export default ProductDetailPage 