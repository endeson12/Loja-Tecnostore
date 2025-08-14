import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { productService } from '../services/productService'
import useCartStore from '../stores/cartStore'
import ImageCarousel from '../components/ImageCarousel/ImageCarousel'
import SkeletonLoader from '../components/SkeletonLoader/SkeletonLoader'
import ProductCard from '../components/ProductCard/ProductCard'
import toast from 'react-hot-toast'
import styles from './HomePage.module.css'

const HomePage = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const { addToCart } = useCartStore()

  const itemsPerPage = 6

  // Dados do carrossel
  const carouselImages = [
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop',
    'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=400&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=400&fit=crop'
  ]

  // Categorias
  const categories = [
    { id: 'all', name: 'Todos', icon: '🛍️' },
    { id: 'smartphones', name: 'Smartphones', icon: '📱' },
    { id: 'notebooks', name: 'Notebooks', icon: '💻' },
    { id: 'monitores', name: 'Monitores', icon: '🖥️' },
    { id: 'acessorios', name: 'Acessórios', icon: '⌨️' },
    { id: 'cameras', name: 'Câmeras', icon: '📷' },
    { id: 'drones', name: 'Drones', icon: '🚁' },
    { id: 'audio', name: 'Áudio', icon: '🎧' },
    { id: 'smartwatch', name: 'Smartwatch', icon: '⌚' }
  ]

  useEffect(() => {
    fetchProducts()
    setCurrentPage(1) // Reset para primeira página ao mudar categoria
  }, [selectedCategory])

  const fetchProducts = async () => {
    setLoading(true)
    try {
      let { data, error } = { data: null, error: null }
      
      if (selectedCategory === 'all') {
        const result = await productService.fetchProducts()
        data = result.data
        error = result.error
      } else {
        const result = await productService.fetchProductsByCategory(selectedCategory)
        data = result.data
        error = result.error
      }

      if (error) {
        toast.error('Erro ao carregar produtos')
        setProducts([])
      } else {
        setProducts(data || [])
      }
    } catch (error) {
      toast.error('Erro inesperado ao carregar produtos')
      setProducts([])
    } finally {
      setLoading(false)
    }
  }

  const handleAddToCart = (product) => {
    addToCart(product)
    toast.success('Produto adicionado ao carrinho!')
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  // Lógica de paginação
  const totalPages = Math.ceil(products.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentProducts = products.slice(startIndex, endIndex)

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main className={styles.homeContainer}>
      {/* Hero Section com Carrossel */}
      <section className={styles.heroSection} aria-labelledby="hero-title">
        <ImageCarousel images={carouselImages} />
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <h1 id="hero-title">TecnoStore</h1>
            <p>A melhor loja de tecnologia do Brasil</p>
            <Link to="/produtos" className={styles.heroButton} aria-label="Explorar todos os produtos">
              Ver Produtos
            </Link>
          </div>
        </div>
      </section>

      {/* Seção de Categorias */}
      <section className={styles.categoriesSection} aria-labelledby="categories-title">
        <div className={styles.container}>
          <h2 id="categories-title">Navegue por Categorias</h2>
          <div className={styles.categoriesGrid} role="group" aria-label="Filtros de categoria">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`${styles.categoryCard} ${selectedCategory === category.id ? styles.active : ''}`}
                onClick={() => setSelectedCategory(category.id)}
                aria-pressed={selectedCategory === category.id}
                aria-label={`Filtrar por ${category.name}`}
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className={styles.categoryContent}>
                  <span className={styles.categoryIcon} aria-hidden="true">{category.icon}</span>
                  <span className={styles.categoryName}>{category.name}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Produtos */}
      <section className={styles.productsSection} aria-labelledby="products-title">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 id="products-title">
              {selectedCategory === 'all' 
                ? 'Todos os Produtos' 
                : `Mostrando: ${categories.find(c => c.id === selectedCategory)?.name}`
              }
            </h2>
            <p>Encontre os melhores produtos de tecnologia</p>
          </div>

          <AnimatePresence mode="wait">
            {loading ? (
              <motion.div 
                key="loading"
                className={styles.productGrid} 
                aria-label="Carregando produtos"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <SkeletonLoader type="product" count={6} />
              </motion.div>
            ) : (
              <motion.div 
                key="products"
                className={styles.productGrid} 
                role="grid" 
                aria-label="Lista de produtos"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {currentProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                  >
                    <ProductCard
                      product={product}
                      onAddToCart={handleAddToCart}
                      formatPrice={formatPrice}
                    />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Controles de Paginação */}
          {!loading && products.length > 0 && totalPages > 1 && (
            <div className={styles.paginationContainer}>
              <div className={styles.pagination} role="navigation" aria-label="Navegação de páginas">
                <button
                  className={styles.paginationButton}
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  aria-label="Página anterior"
                >
                  ← Anterior
                </button>
                
                <div className={styles.pageNumbers}>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      className={`${styles.pageButton} ${currentPage === page ? styles.activePage : ''}`}
                      onClick={() => handlePageChange(page)}
                      aria-label={`Ir para página ${page}`}
                      aria-current={currentPage === page ? 'page' : undefined}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                
                <button
                  className={styles.paginationButton}
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  aria-label="Próxima página"
                >
                  Próxima →
                </button>
              </div>
              
              <p className={styles.paginationInfo}>
                Página {currentPage} de {totalPages} • {products.length} produtos encontrados
              </p>
            </div>
          )}

          {!loading && products.length === 0 && (
            <div className={styles.emptyState} role="status" aria-live="polite">
              <h3>Nenhum produto encontrado</h3>
              <p>Tente selecionar outra categoria ou volte mais tarde.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

export default HomePage 