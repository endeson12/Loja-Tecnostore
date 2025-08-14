import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { productService } from '../services/productService'
import useCartStore from '../stores/cartStore'
import ProductCard from '../components/ProductCard/ProductCard'
import SkeletonLoader from '../components/SkeletonLoader/SkeletonLoader'
import AdvancedFilters from '../components/AdvancedFilters/AdvancedFilters'
import toast from 'react-hot-toast'
import styles from './ProdutosPage.module.css'

const ProdutosPage = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('name')
  const [filters, setFilters] = useState({
    selectedBrands: [],
    priceRange: { min: '', max: '' }
  })
  const { addToCart } = useCartStore()

  const itemsPerPage = 12

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

  const sortOptions = [
    { value: 'name', label: 'Nome A-Z' },
    { value: 'name-desc', label: 'Nome Z-A' },
    { value: 'price', label: 'Menor Preço' },
    { value: 'price-desc', label: 'Maior Preço' },
    { value: 'rating', label: 'Melhor Avaliação' }
  ]

  useEffect(() => {
    fetchProducts()
    setCurrentPage(1)
  }, [selectedCategory, searchTerm, sortBy, filters])

  const fetchProducts = async () => {
    setLoading(true)
    try {
      // Usar o novo método com filtros avançados
      const filterParams = {
        category: selectedCategory,
        searchTerm,
        selectedBrands: filters.selectedBrands,
        priceRange: filters.priceRange
      }
      
      const { data, error } = await productService.fetchProductsWithFilters(filterParams)

      if (error) {
        toast.error('Erro ao carregar produtos')
        setProducts([])
      } else {
        let filteredProducts = data || []
        
        // Aplicar ordenação
        filteredProducts.sort((a, b) => {
          switch (sortBy) {
            case 'name':
              return a.name.localeCompare(b.name)
            case 'name-desc':
              return b.name.localeCompare(a.name)
            case 'price':
              return a.price - b.price
            case 'price-desc':
              return b.price - a.price
            case 'rating':
              return (b.rating || 0) - (a.rating || 0)
            default:
              return 0
          }
        })
        
        setProducts(filteredProducts)
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

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters)
  }

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1>Todos os Nossos Produtos</h1>
          <p>Uma grade completa com todos os produtos e filtros avançados</p>
        </div>

        {/* Layout de duas colunas */}
        <div className={styles.layout}>
          {/* Barra lateral com filtros */}
          <AdvancedFilters 
            filters={filters}
            onFiltersChange={handleFiltersChange}
          />

          {/* Área principal com produtos */}
          <div className={styles.mainContent}>
            {/* Filtros e Busca */}
            <div className={styles.filters}>
              <div className={styles.searchContainer}>
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={styles.searchInput}
                />
              </div>

              <div className={styles.filterControls}>
                <div className={styles.categoryFilter}>
                  <label>Categoria:</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className={styles.selectInput}
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={styles.sortFilter}>
                  <label>Ordenar por:</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className={styles.selectInput}
                  >
                    {sortOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Resultados */}
            <div className={styles.results}>
              <p className={styles.resultsInfo}>
                {loading ? 'Carregando...' : `${products.length} produto${products.length !== 1 ? 's' : ''} encontrado${products.length !== 1 ? 's' : ''}`}
              </p>

              <AnimatePresence mode="wait">
                {loading ? (
                  <motion.div 
                    key="loading"
                    className={styles.productGrid} 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <SkeletonLoader type="product" count={12} />
                  </motion.div>
                ) : (
                  <motion.div 
                    key="products"
                    className={styles.productGrid} 
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
                          delay: index * 0.05,
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

              {/* Paginação */}
              {!loading && products.length > 0 && totalPages > 1 && (
                <div className={styles.paginationContainer}>
                  <div className={styles.pagination}>
                    <button
                      className={styles.paginationButton}
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      ← Anterior
                    </button>
                    
                    <div className={styles.pageNumbers}>
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                          key={page}
                          className={`${styles.pageButton} ${currentPage === page ? styles.activePage : ''}`}
                          onClick={() => handlePageChange(page)}
                        >
                          {page}
                        </button>
                      ))}
                    </div>
                    
                    <button
                      className={styles.paginationButton}
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
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
                <div className={styles.emptyState}>
                  <h3>Nenhum produto encontrado</h3>
                  <p>Tente ajustar os filtros ou buscar por outro termo.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProdutosPage 