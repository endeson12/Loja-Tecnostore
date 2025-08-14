# Imagens das Categorias

Este diretório contém as imagens SVG personalizadas para cada categoria de produtos da TecnoStore.

## Categorias Disponíveis

### 📱 Smartphones
- **Arquivo**: `smartphones.svg`
- **Descrição**: Smartphones e celulares modernos
- **Elementos**: Diferentes modelos de smartphones com detalhes visuais

### 💻 Notebooks
- **Arquivo**: `notebooks.svg`
- **Descrição**: Notebooks e computadores portáteis
- **Elementos**: Laptops com teclados, telas e design gaming

### 🖥️ Monitores
- **Arquivo**: `monitores.svg`
- **Descrição**: Monitores e telas profissionais
- **Elementos**: Monitores ultra-wide, gaming, profissionais e curvos

### ⌨️ Acessórios
- **Arquivo**: `acessorios.svg`
- **Descrição**: Acessórios para todos os dispositivos
- **Elementos**: Teclados, mouses, webcams, fones, pendrives, powerbanks

### 📷 Câmeras
- **Arquivo**: `cameras.svg`
- **Descrição**: Câmeras e equipamentos fotográficos
- **Elementos**: DSLR, mirrorless, action cameras, tripods, lentes

### 🚁 Drones
- **Arquivo**: `drones.svg`
- **Descrição**: Drones e equipamentos aéreos
- **Elementos**: Drones de diferentes tamanhos, controles, baterias

### 🎧 Áudio
- **Arquivo**: `audio.svg`
- **Descrição**: Sistemas de áudio e fones de ouvido
- **Elementos**: Headphones, caixas de som, microfones, soundbars

### ⌚ Smartwatch
- **Arquivo**: `smartwatch.svg`
- **Descrição**: Relógios inteligentes e fitness bands
- **Elementos**: Smartwatches, fitness bands, docks de carregamento

## Especificações Técnicas

- **Formato**: SVG
- **Dimensões**: 400x300 pixels
- **ViewBox**: 0 0 400 300
- **Estilo**: Gradiente roxo-azul com elementos em tons de cinza
- **Sombra**: Filtro de sombra aplicado aos elementos principais

## Uso

```javascript
import { getCategoryImage } from '../assets/categories'

// Obter imagem por categoria
const image = getCategoryImage('smartphones')
```

## Características Visuais

- **Background**: Gradiente linear do roxo (#667eea) ao azul (#764ba2)
- **Elementos**: Cores neutras (branco, cinza escuro, cinza médio)
- **Destaques**: Azul (#667eea) e roxo (#764ba2) para elementos importantes
- **Sombras**: Filtros SVG para profundidade visual
- **Ícones**: Emojis flutuantes para identificação rápida

## Manutenção

Para adicionar uma nova categoria:

1. Criar o arquivo SVG no diretório
2. Adicionar a importação no `index.js`
3. Atualizar o mapeamento `categoryImages`
4. Adicionar ícone e descrição na página de categorias 