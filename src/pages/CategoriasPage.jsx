import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getUniqueCategories } from '../data/products'
import { getCategoryImage } from '../assets/categories'
import styles from './CategoriasPage.module.css'

const CategoriasPage = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      setLoading(true)
      
      // Buscar categorias únicas dos dados mockados
      const uniqueCategories = getUniqueCategories()

      // Mapear categorias para objetos com informações visuais
      const categoryObjects = uniqueCategories.map(category => ({
        id: category.toLowerCase().replace(/\s+/g, '-'),
        name: category,
        image: getCategoryImage(category),
        description: getCategoryDescription(category),
        icon: getCategoryIcon(category)
      }))

      setCategories(categoryObjects)
    } catch (error) {
      console.error('Erro inesperado:', error)
    } finally {
      setLoading(false)
    }
  }



  const getCategoryIcon = (category) => {
    const categoryIcons = {
      'smartphones': '📱',
      'notebooks': '💻',
      'monitores': '🖥️',
      'acessorios': '⌨️',
      'cameras': '📷',
      'drones': '🚁',
      'audio': '🎧',
      'smartwatch': '⌚'
    }

    return categoryIcons[category.toLowerCase()] || '📱'
  }

  const getCategoryDescription = (category) => {
    const categoryDescriptions = {
      'smartphones': 'Smartphones e celulares modernos',
      'notebooks': 'Notebooks e computadores portáteis',
      'monitores': 'Monitores e telas profissionais',
      'acessorios': 'Acessórios para todos os dispositivos',
      'cameras': 'Câmeras e equipamentos fotográficos',
      'drones': 'Drones e equipamentos aéreos',
      'audio': 'Sistemas de áudio e fones de ouvido',
      'smartwatch': 'Relógios inteligentes e fitness bands'
    }

    return categoryDescriptions[category.toLowerCase()] || 'Produtos de tecnologia diversos'
  }

  if (loading) {
    return (
      <main className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h1>Categorias</h1>
            <p>Carregando categorias...</p>
          </div>
          <div className={styles.categoriesGrid}>
            {[...Array(6)].map((_, index) => (
              <div key={index} className={styles.categoryCardSkeleton}>
                <div className={styles.skeletonImage}></div>
                <div className={styles.skeletonContent}>
                  <div className={styles.skeletonTitle}></div>
                  <div className={styles.skeletonDescription}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1>Nossas Categorias</h1>
          <p>Explore nossos produtos organizados por categoria</p>
        </div>

        <div className={styles.categoriesGrid}>
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              className={styles.categoryCard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.02,
                y: -5
              }}
            >
              <Link to={`/produtos?category=${category.id}`} className={styles.categoryLink}>
                <div className={styles.categoryImage}>
                  <img 
                    src={category.image} 
                    alt={`Produtos da categoria ${category.name}`}
                    loading="lazy"
                  />
                  <div className={styles.categoryOverlay}>
                    <span className={styles.categoryIcon}>{category.icon}</span>
                  </div>
                </div>
                <div className={styles.categoryContent}>
                  <h3 className={styles.categoryName}>{category.name}</h3>
                  <p className={styles.categoryDescription}>{category.description}</p>
                  <span className={styles.exploreButton}>
                    Explorar Produtos →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {categories.length === 0 && (
          <div className={styles.emptyState}>
            <h3>Nenhuma categoria encontrada</h3>
            <p>Não foi possível carregar as categorias no momento.</p>
          </div>
        )}
      </div>
    </main>
  )
}

export default CategoriasPage 