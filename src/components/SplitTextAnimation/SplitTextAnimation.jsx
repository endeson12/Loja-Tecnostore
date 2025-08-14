import { useState, useEffect } from 'react';
import styles from './SplitTextAnimation.module.css';

const SplitTextAnimation = ({ children, className = '', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Pequeno delay para garantir que o componente foi montado
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  // Divide o texto em caracteres
  const characters = children.split('').map((char, index) => {
    // Se for espaço, usa um espaço não-quebrável
    const displayChar = char === ' ' ? '\u00A0' : char;
    
    return (
      <span
        key={index}
        className={`${styles.character} ${isVisible ? styles.visible : ''}`}
        style={{
          animationDelay: `${index * 0.1}s`
        }}
      >
        {displayChar}
      </span>
    );
  });

  return (
    <div className={`${styles.container} ${className}`}>
      {characters}
    </div>
  );
};

export default SplitTextAnimation; 