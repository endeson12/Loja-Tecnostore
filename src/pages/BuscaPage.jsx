import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { productService } from '../services/productService'
import useCartStore from '../stores/cartStore'
import ProductCard from '../components/ProductCard/ProductCard'
import SkeletonLoader from '../components/SkeletonLoader/SkeletonLoader'
import toast from 'react-hot-toast'
import styles from './BuscaPage.module.css'

const BuscaPage = () => {
  const [searchParams] = useSearchParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const { addToCart } = useCartStore()

  const searchTerm = searchParams.get('q') || ''
  const itemsPerPage = 12

  useEffect(() => {
    if (searchTerm.trim()) {
      fetchSearchResults()
      setCurrentPage(1) // Reset para primeira página ao mudar busca
    } else {
      setProducts([])
      setLoading(false)
    }
  }, [searchTerm])

  const fetchSearchResults = async () => {
    setLoading(true)
    try {
      const { data, error } = await productService.searchProducts(searchTerm)

      if (error) {
        toast.error('Erro ao buscar produtos')
        setProducts([])
      } else {
        setProducts(data || [])
      }
    } catch (error) {
      toast.error('Erro inesperado ao buscar produtos')
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

  if (!searchTerm.trim()) {
    return (
      <main className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h1>Busca</h1>
            <p>Digite um termo para buscar produtos</p>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1>Resultados da Busca</h1>
          <p>
            {loading 
              ? 'Buscando produtos...' 
              : `${products.length} produto${products.length !== 1 ? 's' : ''} encontrado${products.length !== 1 ? 's' : ''} para "${searchTerm}"`
            }
          </p>
        </div>

        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div 
              key="loading"
              className={styles.productGrid} 
              aria-label="Carregando resultados"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <SkeletonLoader type="product" count={12} />
            </motion.div>
          ) : (
            <motion.div 
              key="results"
              className={styles.productGrid} 
              role="grid" 
              aria-label="Resultados da busca"
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
            <p>Não encontramos produtos para "{searchTerm}". Tente usar termos diferentes ou verificar a ortografia.</p>
            <div className={styles.suggestions}>
              <h4>Sugestões:</h4>
              <ul>
                <li>Verifique se digitou corretamente</li>
                <li>Tente termos mais gerais</li>
                <li>Use sinônimos ou palavras relacionadas</li>
                <li>Explore as categorias para encontrar produtos similares</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

export default BuscaPage 