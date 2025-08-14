# 🚀 TecnoStore - E-commerce Completo

Uma plataforma de e-commerce moderna e profissional, inspirada em gigantes como Amazon e Shopee, construída com React, Vite e Supabase.

## ✨ Funcionalidades

### 🔐 Autenticação Completa
- **Login/Registro** com Supabase Auth
- **Página de Perfil** protegida
- **Logout** seguro
- **Persistência de sessão**

### 🛒 Carrinho de Compras Avançado
- **Gerenciamento de estado** com Zustand
- **Persistência local** no localStorage
- **Controle de quantidade** por item
- **Cálculo automático** de totais
- **Notificações** em tempo real

### 🏠 Homepage Dinâmica
- **Carrossel de imagens** interativo
- **Filtro por categorias** em tempo real
- **Skeleton loaders** durante carregamento
- **Produtos mockados** para desenvolvimento

### 📱 Páginas de Produto
- **Galeria de imagens** com thumbnails
- **Seletor de quantidade**
- **Abas de descrição** e especificações
- **Preços formatados** em Real (BRL)

### 🎨 Interface Moderna
- **Design responsivo** e profissional
- **Animações suaves** e feedback visual
- **Toasts** para notificações
- **Loading states** elegantes

## 🛠️ Tecnologias Utilizadas

- **React 19** - Framework principal
- **Vite** - Build tool e dev server
- **React Router DOM** - Roteamento
- **Supabase** - Backend (Auth + Database)
- **Zustand** - Gerenciamento de estado
- **React Hot Toast** - Notificações
- **CSS Modules** - Estilização

## 🚀 Como Executar

### 1. Instalar Dependências
```bash
npm install
```

### 2. Configurar Supabase

#### a) Criar Projeto no Supabase
1. Acesse [supabase.com](https://supabase.com)
2. Crie uma nova conta ou faça login
3. Clique em "New Project"
4. Escolha sua organização
5. Configure o projeto:
   - **Name**: `tecnostore`
   - **Database Password**: (escolha uma senha forte)
   - **Region**: (escolha a mais próxima)

#### b) Obter Credenciais
1. No dashboard do Supabase, vá em **Settings > API**
2. Copie a **URL** e a **anon key**
3. Abra o arquivo `src/supabaseClient.js`
4. Substitua as credenciais:

```javascript
const supabaseUrl = 'SUA_URL_DO_SUPABASE'
const supabaseAnonKey = 'SUA_ANON_KEY_DO_SUPABASE'
```

#### c) Criar Tabela de Produtos
1. No dashboard do Supabase, vá em **Table Editor**
2. Clique em **New Table**
3. Configure a tabela `products`:

```sql
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  original_price DECIMAL(10,2),
  image VARCHAR(500),
  images TEXT[], -- Array de URLs de imagens
  category VARCHAR(100),
  features TEXT[], -- Array de características
  specifications JSONB, -- Especificações técnicas
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### d) Inserir Dados de Exemplo
Execute este SQL no **SQL Editor** do Supabase:

```sql
INSERT INTO products (name, description, price, original_price, image, category, features, specifications) VALUES
(
  'iPhone 15 Pro',
  'O mais recente iPhone com tecnologia avançada, chip A17 Pro e câmera de 48MP',
  8999.99,
  9999.99,
  'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
  'smartphones',
  ARRAY['Chip A17 Pro', 'Câmera de 48MP', 'Tela de 6.1"', 'iOS 17'],
  '{"Tela": "6.1 polegadas", "Processador": "A17 Pro", "RAM": "8GB", "Armazenamento": "128GB"}'
),
(
  'MacBook Pro M3',
  'Notebook profissional com chip M3, ideal para desenvolvedores e criadores de conteúdo',
  15999.99,
  NULL,
  'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
  'computers',
  ARRAY['Chip M3', 'Tela Retina', 'Até 22 horas de bateria', 'macOS Sonoma'],
  '{"Tela": "14 polegadas", "Processador": "M3", "RAM": "8GB", "Armazenamento": "512GB"}'
),
(
  'AirPods Pro',
  'Fones de ouvido com cancelamento de ruído ativo e áudio espacial',
  2499.99,
  2999.99,
  'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=400&fit=crop',
  'accessories',
  ARRAY['Cancelamento de ruído', 'Áudio espacial', 'Resistente à água', 'Carregamento sem fio'],
  '{"Conectividade": "Bluetooth 5.0", "Bateria": "Até 6 horas", "Resistência": "IPX4"}'
);
```

### 3. Executar o Projeto
```bash
npm run dev
```

O projeto estará disponível em: `http://localhost:5173`

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header/         # Cabeçalho com navegação
│   ├── ProductCard/    # Card de produto
│   ├── ImageCarousel/  # Carrossel de imagens
│   └── SkeletonLoader/ # Loaders de carregamento
├── contexts/           # Contextos React
│   └── AuthContext.jsx # Contexto de autenticação
├── pages/              # Páginas da aplicação
│   ├── HomePage.jsx    # Página inicial
│   ├── CartPage.jsx    # Carrinho de compras
│   ├── LoginPage.jsx   # Página de login
│   ├── RegisterPage.jsx # Página de registro
│   ├── ProfilePage.jsx # Página de perfil
│   └── ProductDetailPage.jsx # Detalhes do produto
├── services/           # Serviços de API
│   └── productService.js # Serviços de produtos
├── stores/             # Stores do Zustand
│   └── cartStore.js    # Store do carrinho
├── styles/             # Estilos globais
└── supabaseClient.js   # Configuração do Supabase
```

## 🔧 Configurações Avançadas

### Variáveis de Ambiente
Crie um arquivo `.env.local` na raiz do projeto:

```env
VITE_SUPABASE_URL=sua_url_do_supabase
VITE_SUPABASE_ANON_KEY=sua_anon_key_do_supabase
```

### Políticas de Segurança do Supabase
Configure as políticas RLS (Row Level Security) no Supabase:

```sql
-- Habilitar RLS
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Política para leitura pública
CREATE POLICY "Produtos visíveis para todos" ON products
  FOR SELECT USING (true);
```

## 🎯 Próximos Passos

- [ ] Implementar checkout completo
- [ ] Adicionar sistema de avaliações
- [ ] Implementar busca avançada
- [ ] Adicionar filtros de preço
- [ ] Implementar wishlist
- [ ] Adicionar histórico de pedidos
- [ ] Implementar notificações push
- [ ] Adicionar PWA capabilities

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

**Desenvolvido com ❤️ para o curso de React e Node.js**
