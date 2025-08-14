import styles from './SkeletonLoader.module.css'

const SkeletonLoader = ({ type = 'product', count = 1 }) => {
  const renderSkeleton = () => {
    switch (type) {
      case 'product':
        return (
          <div className={styles.skeletonProduct}>
            <div className={styles.skeletonImage}></div>
            <div className={styles.skeletonContent}>
              <div className={styles.skeletonTitle}></div>
              <div className={styles.skeletonDescription}></div>
              <div className={styles.skeletonPrice}></div>
              <div className={styles.skeletonButton}></div>
            </div>
          </div>
        )
      
      case 'category':
        return (
          <div className={styles.skeletonCategory}>
            <div className={styles.skeletonIcon}></div>
            <div className={styles.skeletonText}></div>
          </div>
        )
      
      case 'hero':
        return (
          <div className={styles.skeletonHero}>
            <div className={styles.skeletonHeroContent}>
              <div className={styles.skeletonHeroTitle}></div>
              <div className={styles.skeletonHeroSubtitle}></div>
              <div className={styles.skeletonHeroButton}></div>
            </div>
          </div>
        )
      
      default:
        return <div className={styles.skeletonDefault}></div>
    }
  }

  if (count === 1) {
    return renderSkeleton()
  }

  return (
    <div className={styles.skeletonGrid}>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index}>
          {renderSkeleton()}
        </div>
      ))}
    </div>
  )
}

export default SkeletonLoader 