// Imagens das categorias
import smartphones from './smartphones.svg'
import notebooks from './notebooks.svg'
import monitores from './monitores.svg'
import acessorios from './acessorios.svg'
import cameras from './cameras.svg'
import drones from './drones.svg'
import audio from './audio.svg'
import smartwatch from './smartwatch.svg'

// Mapeamento de categorias para imagens
export const categoryImages = {
  'smartphones': smartphones,
  'notebooks': notebooks,
  'monitores': monitores,
  'acessorios': acessorios,
  'cameras': cameras,
  'drones': drones,
  'audio': audio,
  'smartwatch': smartwatch
}

// Função para obter imagem por categoria
export const getCategoryImage = (category) => {
  const normalizedCategory = category.toLowerCase()
  return categoryImages[normalizedCategory] || smartphones
}

// Exportações individuais
export {
  smartphones,
  notebooks,
  monitores,
  acessorios,
  cameras,
  drones,
  audio,
  smartwatch
} 