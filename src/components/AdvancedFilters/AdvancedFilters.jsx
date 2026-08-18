import { useState, useEffect } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { productService } from '../../services/productService'
import styles from './AdvancedFilters.module.css'

const AdvancedFilters = ({ filters, onFiltersChange }) => {
  const [brands, setBrands] = useState([])
  const [loadingBrands, setLoadingBrands] = useState(true)
  const priceRange = filters.priceRange

  // Buscar marcas disponíveis
  useEffect(() => {
    fetchBrands()
  }, [])

  const fetchBrands = async () => {
    setLoadingBrands(true)
    try {
      const { data, error } = await productService.fetchBrands()
      
      if (error) {
        console.error('Erro ao carregar marcas:', error)
        setBrands([])
      } else {
        setBrands(data || [])
      }
    } catch (error) {
      console.error('Erro inesperado ao carregar marcas:', error)
      setBrands([])
    } finally {
      setLoadingBrands(false)
    }
  }

  const handleBrandChange = (brand) => {
    const newSelectedBrands = filters.selectedBrands.includes(brand)
      ? filters.selectedBrands.filter(b => b !== brand)
      : [...filters.selectedBrands, brand]
    
    onFiltersChange({
      ...filters,
      selectedBrands: newSelectedBrands
    })
  }

  const handlePriceChange = (field, value) => {
    onFiltersChange({
      ...filters,
      priceRange: {
        ...priceRange,
        [field]: value
      }
    })
  }

  const applyPriceRange = (newPriceRange) => {
    onFiltersChange({
      ...filters,
      priceRange: newPriceRange
    })
  }

  const clearAllFilters = () => {
    onFiltersChange({
      selectedBrands: [],
      priceRange: { min: '', max: '' }
    })
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  const hasActiveFilters = filters.selectedBrands.length > 0 || 
                          priceRange.min !== '' || 
                          priceRange.max !== ''

  return (
    <aside className={styles.sidebar}>
      <div className={styles.filtersContainer}>
        <div className={styles.header}>
          <h3>Filtros Avançados</h3>
          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className={styles.clearButton}
              aria-label="Limpar todos os filtros"
            >
              Limpar Filtros
            </button>
          )}
        </div>

        {/* Filtro por Marca */}
        <div className={styles.filterSection}>
          <h4 className={styles.sectionTitle}>
            <span className={styles.icon}>🏷️</span>
            Marca
          </h4>
          
          <div className={styles.brandsContainer}>
            {loadingBrands ? (
              <div className={styles.loadingBrands}>
                <div className={styles.skeleton}></div>
                <div className={styles.skeleton}></div>
                <div className={styles.skeleton}></div>
              </div>
            ) : (
              <AnimatePresence>
                {brands.map((brand, index) => (
                  <Motion.label
                    key={brand}
                    className={styles.brandItem}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <input
                      type="checkbox"
                      checked={filters.selectedBrands.includes(brand)}
                      onChange={() => handleBrandChange(brand)}
                      className={styles.checkbox}
                    />
                    <span className={styles.checkmark}></span>
                    <span className={styles.brandName}>{brand}</span>
                  </Motion.label>
                ))}
              </AnimatePresence>
            )}
          </div>
        </div>

        {/* Filtro por Preço */}
        <div className={styles.filterSection}>
          <h4 className={styles.sectionTitle}>
            <span className={styles.icon}>💰</span>
            Faixa de Preço
          </h4>
          
          <div className={styles.priceContainer}>
            <div className={styles.priceInput}>
              <label htmlFor="priceMin">Preço Mínimo</label>
              <input
                id="priceMin"
                type="number"
                placeholder="R$ 0,00"
                value={priceRange.min}
                onChange={(e) => handlePriceChange('min', e.target.value)}
                className={styles.priceField}
                min="0"
                step="0.01"
              />
            </div>
            
            <div className={styles.priceInput}>
              <label htmlFor="priceMax">Preço Máximo</label>
              <input
                id="priceMax"
                type="number"
                placeholder="R$ 10.000,00"
                value={priceRange.max}
                onChange={(e) => handlePriceChange('max', e.target.value)}
                className={styles.priceField}
                min="0"
                step="0.01"
              />
            </div>
          </div>

          {/* Sugestões de preço */}
          <div className={styles.priceSuggestions}>
            <button
              onClick={() => applyPriceRange({ min: '0', max: '1000' })}
              className={styles.priceSuggestion}
            >
              Até R$ 1.000
            </button>
            <button
              onClick={() => applyPriceRange({ min: '1000', max: '3000' })}
              className={styles.priceSuggestion}
            >
              R$ 1.000 - R$ 3.000
            </button>
            <button
              onClick={() => applyPriceRange({ min: '3000', max: '5000' })}
              className={styles.priceSuggestion}
            >
              R$ 3.000 - R$ 5.000
            </button>
            <button
              onClick={() => applyPriceRange({ min: '5000', max: '' })}
              className={styles.priceSuggestion}
            >
              Acima de R$ 5.000
            </button>
          </div>
        </div>

        {/* Resumo dos filtros ativos */}
        {hasActiveFilters && (
          <div className={styles.activeFilters}>
            <h4>Filtros Ativos</h4>
            <div className={styles.filterTags}>
              {filters.selectedBrands.map(brand => (
                <span key={brand} className={styles.filterTag}>
                  {brand}
                  <button
                    onClick={() => handleBrandChange(brand)}
                    className={styles.removeFilter}
                    aria-label={`Remover filtro ${brand}`}
                  >
                    ×
                  </button>
                </span>
              ))}
              {priceRange.min && (
                <span className={styles.filterTag}>
                  Min: {formatPrice(priceRange.min)}
                  <button
                    onClick={() => handlePriceChange('min', '')}
                    className={styles.removeFilter}
                    aria-label="Remover preço mínimo"
                  >
                    ×
                  </button>
                </span>
              )}
              {priceRange.max && (
                <span className={styles.filterTag}>
                  Max: {formatPrice(priceRange.max)}
                  <button
                    onClick={() => handlePriceChange('max', '')}
                    className={styles.removeFilter}
                    aria-label="Remover preço máximo"
                  >
                    ×
                  </button>
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </aside>
  )
}

export default AdvancedFilters 
