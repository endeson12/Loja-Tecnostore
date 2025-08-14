import { supabase, isDevelopment } from '../supabaseClient'
import { products as mockProducts } from '../data/products'

// Mapeamento de IDs de categorias para nomes corretos dos produtos
const categoryMapping = {
  'smartphones': 'Smartphones',
  'notebooks': 'Notebooks',
  'monitores': 'Monitores',
  'acessorios': 'Acessórios',
  'cameras': 'Câmeras',
  'drones': 'Drones',
  'audio': 'Áudio',
  'smartwatch': 'Smartwatch'
}

export const productService = {
  // Buscar todos os produtos
  async fetchProducts() {
    if (isDevelopment) {
      // Simular delay de rede
      await new Promise(resolve => setTimeout(resolve, 1000))
      return { data: mockProducts, error: null }
    }

    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error('Erro ao buscar produtos:', error)
      return { data: null, error }
    }
  },

  // Buscar produto por ID
  async fetchProductById(id) {
    if (isDevelopment) {
      // Simular delay de rede
      await new Promise(resolve => setTimeout(resolve, 800))
      const product = mockProducts.find(p => p.id === parseInt(id))
      if (!product) {
        return { data: null, error: { message: 'Produto não encontrado' } }
      }
      return { data: product, error: null }
    }

    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single()

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error('Erro ao buscar produto:', error)
      return { data: null, error }
    }
  },

  // Buscar produtos por categoria
  async fetchProductsByCategory(category) {
    if (isDevelopment) {
      // Simular delay de rede
      await new Promise(resolve => setTimeout(resolve, 600))
      
      if (category === 'all') {
        return { data: mockProducts, error: null }
      }
      
      // Usar o mapeamento para converter o ID da categoria para o nome correto
      const categoryName = categoryMapping[category] || category
      const filteredProducts = mockProducts.filter(p => 
        p.category.toLowerCase() === categoryName.toLowerCase()
      )
      return { data: filteredProducts, error: null }
    }

    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('category', category)
        .order('created_at', { ascending: false })

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error('Erro ao buscar produtos por categoria:', error)
      return { data: null, error }
    }
  },

  // Buscar produtos com filtro de busca
  async searchProducts(query) {
    if (isDevelopment) {
      // Simular delay de rede
      await new Promise(resolve => setTimeout(resolve, 500))
      const filteredProducts = mockProducts.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.features.some(feature => 
          feature.toLowerCase().includes(query.toLowerCase())
        )
      )
      return { data: filteredProducts, error: null }
    }
  },

  // Buscar marcas disponíveis
  async fetchBrands() {
    if (isDevelopment) {
      // Simular delay de rede
      await new Promise(resolve => setTimeout(resolve, 300))
      
      // Extrair marcas únicas dos produtos
      const brands = [...new Set(mockProducts.map(p => p.brand).filter(Boolean))]
      return { data: brands, error: null }
    }
  },

  // Buscar produtos com filtros avançados
  async fetchProductsWithFilters(filters) {
    if (isDevelopment) {
      // Simular delay de rede
      await new Promise(resolve => setTimeout(resolve, 600))
      
      let filteredProducts = [...mockProducts]
      
      // Aplicar filtro por categoria
      if (filters.category && filters.category !== 'all') {
        const categoryName = categoryMapping[filters.category] || filters.category
        filteredProducts = filteredProducts.filter(p => 
          p.category.toLowerCase() === categoryName.toLowerCase()
        )
      }
      
      // Aplicar filtro por marca
      if (filters.selectedBrands && filters.selectedBrands.length > 0) {
        filteredProducts = filteredProducts.filter(p => 
          filters.selectedBrands.includes(p.brand)
        )
      }
      
      // Aplicar filtro por preço
      if (filters.priceRange) {
        if (filters.priceRange.min !== '') {
          filteredProducts = filteredProducts.filter(p => 
            p.price >= parseFloat(filters.priceRange.min)
          )
        }
        if (filters.priceRange.max !== '') {
          filteredProducts = filteredProducts.filter(p => 
            p.price <= parseFloat(filters.priceRange.max)
          )
        }
      }
      
      // Aplicar busca por texto
      if (filters.searchTerm) {
        filteredProducts = filteredProducts.filter(p => 
          p.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
          p.description.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
          p.category.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
          p.features.some(feature => 
            feature.toLowerCase().includes(filters.searchTerm.toLowerCase())
          )
        )
      }
      
      return { data: filteredProducts, error: null }
    }

    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .or(`name.ilike.%${query}%,description.ilike.%${query}%`)
        .order('created_at', { ascending: false })

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error('Erro ao buscar produtos:', error)
      return { data: null, error }
    }
  }
} 