import { useState, useEffect } from 'react'
import styles from './ImageCarousel.module.css'

const ImageCarousel = ({ images, autoPlay = true, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, autoPlay, interval])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  if (!images || images.length === 0) {
    return null
  }

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselSlide}>
        <img 
          src={images[currentIndex]} 
          alt={`Slide ${currentIndex + 1}`}
          className={styles.carouselImage}
        />
        
        {/* Botões de navegação */}
        <button 
          className={styles.carouselButton}
          onClick={goToPrevious}
          aria-label="Slide anterior"
        >
          ‹
        </button>
        <button 
          className={styles.carouselButton}
          onClick={goToNext}
          aria-label="Próximo slide"
        >
          ›
        </button>
      </div>

      {/* Indicadores */}
      <div className={styles.carouselIndicators}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageCarousel 