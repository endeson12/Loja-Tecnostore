export const products = [
  // Smartphones
  {
    id: 1,
    name: 'Smartphone Galaxus S25 Ultra',
    description: 'O topo de linha com câmera de 200MP e caneta stylus integrada.',
    price: 7599.90,
    original_price: 8999.99,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
    category: 'Smartphones',
    brand: 'Samsung',
    features: ['Câmera 200MP', 'Caneta Stylus', 'Tela AMOLED 120Hz'],
    specifications: { "Tela": "6.8 polegadas", "Processador": "SuperChip 5", "RAM": "12GB", "Armazenamento": "256GB" },
    rating: 4.8
  },
  {
    id: 2,
    name: 'Phone 16 Pro Max',
    description: 'O novo padrão de performance e design, com chip A18 Bionic.',
    price: 8999.00,
    original_price: 9999.00,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
    category: 'Smartphones',
    brand: 'Apple',
    features: ['Chip A18 Bionic', 'Sistema de Câmera Pro', 'Tela Super Retina XDR'],
    specifications: { "Tela": "6.7 polegadas", "Processador": "A18 Bionic", "RAM": "8GB", "Armazenamento": "256GB" },
    rating: 4.9
  },
  {
    id: 3,
    name: 'Pixel 9 Pro',
    description: 'A melhor câmera para fotos com inteligência artificial do Google.',
    price: 6899.00,
    original_price: 7500.00,
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=400&fit=crop',
    category: 'Smartphones',
    brand: 'Google',
    features: ['Google Tensor G4', 'Câmera com IA', 'Android Puro'],
    specifications: { "Tela": "6.5 polegadas", "Processador": "Tensor G4", "RAM": "12GB", "Armazenamento": "128GB" },
    rating: 4.7
  },
  {
    id: 4,
    name: 'Zenfone Compact 11',
    description: 'O smartphone compacto mais poderoso do mercado.',
    price: 5500.00,
    original_price: null,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
    category: 'Smartphones',
    brand: 'ASUS',
    features: ['Design Compacto', 'Tela 144Hz', 'Performance de Ponta'],
    specifications: { "Tela": "5.9 polegadas", "Processador": "Top de Linha", "RAM": "16GB", "Armazenamento": "256GB" },
    rating: 4.6
  },

  // Notebooks
  {
    id: 5,
    name: 'Notebook ProBook X',
    description: 'Ultrafino e poderoso, com processador de última geração e tela OLED.',
    price: 9899.90,
    original_price: 11000.00,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
    category: 'Notebooks',
    brand: 'Dell',
    features: ['Tela OLED 4K', 'Processador i9', 'Design em Alumínio'],
    specifications: { "Tela": "14 polegadas OLED", "Processador": "Core i9", "RAM": "32GB", "Armazenamento": "1TB SSD" },
    rating: 4.8
  },
  {
    id: 6,
    name: 'GamerBook Fury 15',
    description: 'Domine seus jogos com a placa de vídeo RTX 5070 e tela de 240Hz.',
    price: 12500.00,
    original_price: 14000.00,
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop',
    category: 'Notebooks',
    brand: 'ASUS',
    features: ['Placa de Vídeo RTX 5070', 'Tela 240Hz', 'Teclado RGB'],
    specifications: { "Tela": "15.6 polegadas", "Processador": "Core i7", "RAM": "16GB", "Armazenamento": "1TB SSD" },
    rating: 4.9
  },
  {
    id: 7,
    name: 'Workstation Mobile P1',
    description: 'Para profissionais que precisam de performance máxima em qualquer lugar.',
    price: 18999.00,
    original_price: null,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
    category: 'Notebooks',
    brand: 'Lenovo',
    features: ['Certificado ISV', 'Placa de Vídeo Pro', 'Segurança Avançada'],
    specifications: { "Tela": "16 polegadas 4K", "Processador": "Xeon", "RAM": "64GB", "Armazenamento": "2TB SSD" },
    rating: 4.7
  },

  // Monitores
  {
    id: 8,
    name: 'Monitor Gamer UltraWide 34"',
    description: 'Imersão total com tela curva de 34 polegadas e 144Hz.',
    price: 3200.00,
    original_price: 4000.00,
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=400&h=400&fit=crop',
    category: 'Monitores',
    brand: 'Samsung',
    features: ['Tela Curva 1800R', '144Hz', '1ms de Resposta'],
    specifications: { "Tela": "34 polegadas", "Resolução": "3440x1440", "Tipo": "VA" },
    rating: 4.8
  },
  {
    id: 9,
    name: 'Monitor Profissional 4K 27"',
    description: 'Cores perfeitas para edição de foto e vídeo, com 99% de cobertura Adobe RGB.',
    price: 2899.99,
    original_price: 3500.00,
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=400&h=400&fit=crop',
    category: 'Monitores',
    features: ['Resolução 4K', '99% Adobe RGB', 'Calibrado de Fábrica'],
    specifications: { "Tela": "27 polegadas", "Resolução": "3840x2160", "Tipo": "IPS" },
    rating: 4.9
  },

  // Áudio
  {
    id: 10,
    name: 'Headset Gamer HyperZone',
    description: 'Áudio espacial 7.1 para máxima imersão e vantagem competitiva.',
    price: 799.90,
    original_price: 950.00,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    category: 'Áudio',
    features: ['Som Surround 7.1', 'Microfone com cancelamento de ruído', 'Conforto para longas sessões'],
    specifications: { "Conexão": "USB/P2", "Driver": "50mm", "Compatibilidade": "PC, PS5, Xbox" },
    rating: 4.6
  },
  {
    id: 11,
    name: 'Fone Bluetooth SoundPEAK',
    description: 'Som de alta fidelidade com cancelamento de ruído ativo e 30h de bateria.',
    price: 1200.00,
    original_price: null,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    category: 'Áudio',
    features: ['Cancelamento de Ruído Ativo', '30h de Bateria', 'Modo Ambiente'],
    specifications: { "Conexão": "Bluetooth 5.3", "Codecs": "AptX HD, AAC, SBC" },
    rating: 4.7
  },
  {
    id: 12,
    name: 'Caixa de Som Portátil BOOM 3',
    description: 'Som 360 graus, à prova d\'água e com graves potentes.',
    price: 899.00,
    original_price: 1000.00,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    category: 'Áudio',
    features: ['Som 360°', 'À prova d\'água (IP67)', '15h de Bateria'],
    specifications: { "Potência": "90dBC", "Conexão": "Bluetooth" },
    rating: 4.5
  },

  // Acessórios
  {
    id: 13,
    name: 'Teclado Mecânico RGB Pro',
    description: 'Switches customizáveis, layout ABNT2 e iluminação RGB por tecla.',
    price: 650.00,
    original_price: 800.00,
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop',
    category: 'Acessórios',
    features: ['Switches Mecânicos (Brown)', 'Iluminação RGB', 'Layout ABNT2'],
    specifications: { "Tipo": "Mecânico", "Conexão": "USB-C" },
    rating: 4.8
  },
  {
    id: 14,
    name: 'Mouse Gamer Precision X',
    description: 'Sensor de 25.000 DPI e design ultraleve para máxima precisão.',
    price: 499.90,
    original_price: null,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop',
    category: 'Acessórios',
    features: ['25.000 DPI', 'Design Leve (60g)', '6 Botões Programáveis'],
    specifications: { "Sensor": "Óptico", "Conexão": "Sem Fio" },
    rating: 4.7
  },
  {
    id: 15,
    name: 'Webcam 4K ProStream',
    description: 'Qualidade de estúdio para suas streams e videoconferências.',
    price: 999.00,
    original_price: 1200.00,
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop',
    category: 'Acessórios',
    features: ['Resolução 4K 30fps', 'Foco Automático com IA', 'Anel de Luz Integrado'],
    specifications: { "Resolução": "4K", "Conexão": "USB-C" },
    rating: 4.6
  },

  // Câmeras
  {
    id: 16,
    name: 'Câmera Mirrorless Alpha 7V',
    description: 'Sensor full-frame de 61MP, a escolha dos profissionais.',
    price: 22000.00,
    original_price: null,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop',
    category: 'Câmeras',
    features: ['Sensor Full-Frame 61MP', 'Gravação 8K', 'Foco em tempo real'],
    specifications: { "Tipo": "Mirrorless", "Sensor": "Full-Frame" },
    rating: 4.9
  },
  {
    id: 17,
    name: 'Action Cam Adventure 5',
    description: 'À prova d\'água, resistente e com estabilização de imagem de ponta.',
    price: 2100.00,
    original_price: 2500.00,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop',
    category: 'Câmeras',
    features: ['Gravação 5.3K', 'Estabilização HyperSmooth', 'À prova d\'água até 10m'],
    specifications: { "Resolução": "5.3K", "Bateria": "1720mAh" },
    rating: 4.7
  },

  // Drones
  {
    id: 18,
    name: 'Drone Explorer 4 Pro',
    description: 'Voe mais longe e capture imagens aéreas incríveis em 4K.',
    price: 7800.00,
    original_price: 9000.00,
    image: 'https://images.unsplash.com/photo-1506947411487-a56738267384?w=400&h=400&fit=crop',
    category: 'Drones',
    features: ['Câmera 4K 60fps', '30 min de Voo', 'Sensores de Obstáculo'],
    specifications: { "Alcance": "10km", "Peso": "595g" },
    rating: 4.8
  },

  // Smartwatch
  {
    id: 19,
    name: 'Smartwatch Active 3',
    description: 'Monitore sua saúde e treinos com GPS integrado e ECG.',
    price: 1899.00,
    original_price: 2200.00,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    category: 'Smartwatch',
    features: ['GPS Integrado', 'Monitor de ECG', 'Tela Sempre Ativa'],
    specifications: { "Compatibilidade": "Android/iOS", "Bateria": "Até 7 dias" },
    rating: 4.6
  },

  // Produtos adicionais
  {
    id: 20,
    name: 'Tablet de Desenho Pro 12"',
    description: 'Ideal para artistas digitais, com caneta de 8192 níveis de pressão.',
    price: 1500.00,
    original_price: 1800.00,
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop',
    category: 'Acessórios',
    features: ['Tela 12"', 'Caneta sem bateria', 'Teclas de atalho'],
    specifications: { "Níveis de Pressão": "8192" },
    rating: 4.7
  },
  {
    id: 21,
    name: 'Roteador Wi-Fi 6E Mesh',
    description: 'Cobertura total para sua casa com a última tecnologia Wi-Fi.',
    price: 1300.00,
    original_price: null,
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop',
    category: 'Acessórios',
    features: ['Wi-Fi 6E', 'Tecnologia Mesh', 'Portas 2.5Gbps'],
    specifications: { "Cobertura": "Até 300m²" },
    rating: 4.5
  },
  {
    id: 22,
    name: 'SSD NVMe 2TB Gen5',
    description: 'Velocidades de leitura e escrita absurdas para o seu sistema.',
    price: 1100.00,
    original_price: 1400.00,
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop',
    category: 'Acessórios',
    features: ['2TB de Espaço', 'Velocidade Gen5', 'NVMe M.2'],
    specifications: { "Leitura": "10.000 MB/s" },
    rating: 4.8
  },
  {
    id: 23,
    name: 'Microfone Condensador Studio',
    description: 'Qualidade de estúdio para gravações de voz e instrumentos.',
    price: 850.00,
    original_price: null,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    category: 'Áudio',
    features: ['Padrão Polar Cardioide', 'Conexão USB-C', 'Monitoramento zero latência'],
    specifications: { "Tipo": "Condensador" },
    rating: 4.6
  },
  {
    id: 24,
    name: 'Cadeira Gamer ErgoPro',
    description: 'Conforto e ergonomia para longas maratonas de jogos ou trabalho.',
    price: 1990.00,
    original_price: 2500.00,
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop',
    category: 'Acessórios',
    features: ['Apoio Lombar Ajustável', 'Material Respirável', 'Inclinação 180°'],
    specifications: { "Peso Máximo": "150kg" },
    rating: 4.7
  },
  {
    id: 25,
    name: 'Projetor 4K Home Cinema',
    description: 'Transforme sua sala em um cinema com imagem de 150 polegadas.',
    price: 3500.00,
    original_price: 4200.00,
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=400&h=400&fit=crop',
    category: 'Monitores',
    features: ['Resolução 4K Nativa', '3000 Lúmens', 'Alto-falantes integrados'],
    specifications: { "Tamanho da Tela": "Até 150 polegadas" },
    rating: 4.8
  },
  {
    id: 26,
    name: 'Leitor de E-books Paperlight',
    description: 'Leia por horas sem cansar a vista, com iluminação ajustável.',
    price: 599.00,
    original_price: 700.00,
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop',
    category: 'Acessórios',
    features: ['Tela E-Ink 300ppi', 'À prova d\'água', 'Semanas de bateria'],
    specifications: { "Armazenamento": "8GB" },
    rating: 4.5
  },
  {
    id: 27,
    name: 'Impressora 3D Creator Pro 2',
    description: 'Materialize suas ideias com precisão e facilidade.',
    price: 2800.00,
    original_price: null,
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop',
    category: 'Acessórios',
    features: ['Extrusor Duplo', 'Plataforma Aquecida', 'Nivelamento Automático'],
    specifications: { "Volume de Impressão": "20x15x15 cm" },
    rating: 4.6
  },
  {
    id: 28,
    name: 'Notebook Flex 2-em-1',
    description: 'A versatilidade de um tablet com o poder de um notebook.',
    price: 4500.00,
    original_price: 5200.00,
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop',
    category: 'Notebooks',
    features: ['Tela Touchscreen 360°', 'Caneta Inclusa', 'Leve e Portátil'],
    specifications: { "Tela": "13.3 polegadas", "Processador": "Core i5" },
    rating: 4.7
  },
  {
    id: 29,
    name: 'HD Externo 5TB Rugged',
    description: 'Resistente a quedas e água para proteger seus dados mais importantes.',
    price: 899.00,
    original_price: 1100.00,
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop',
    category: 'Acessórios',
    features: ['5TB de Espaço', 'Resistente a quedas', 'Conexão USB-C'],
    specifications: { "Capacidade": "5TB" },
    rating: 4.6
  },
  {
    id: 30,
    name: 'Smart Lâmpada RGBW',
    description: 'Controle a iluminação da sua casa pelo smartphone.',
    price: 129.90,
    original_price: 150.00,
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop',
    category: 'Acessórios',
    features: ['16 Milhões de Cores', 'Controle por Voz', 'Programação de Horários'],
    specifications: { "Conexão": "Wi-Fi" },
    rating: 4.4
  },
  {
    id: 31,
    name: 'Câmera de Segurança 360°',
    description: 'Monitore sua casa de qualquer lugar com visão noturna.',
    price: 350.00,
    original_price: 420.00,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop',
    category: 'Câmeras',
    features: ['Visão Panorâmica 360°', 'Detecção de Movimento', 'Áudio Bidirecional'],
    specifications: { "Resolução": "10080p" },
    rating: 4.5
  },
  {
    id: 32,
    name: 'Powerbank 20000mAh PD',
    description: 'Nunca mais fique sem bateria no seu celular ou notebook.',
    price: 299.00,
    original_price: null,
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop',
    category: 'Acessórios',
    features: ['20000mAh', 'Carregamento Rápido (PD)', 'Múltiplas Saídas'],
    specifications: { "Potência": "100W" },
    rating: 4.6
  },
  {
    id: 33,
    name: 'Pen Drive 256GB Ultra Speed',
    description: 'Transfira arquivos grandes em segundos com USB 3.2.',
    price: 180.00,
    original_price: 220.00,
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop',
    category: 'Acessórios',
    features: ['256GB', 'USB 3.2', 'Design Metálico'],
    specifications: { "Velocidade": "Até 400MB/s" },
    rating: 4.5
  },
  {
    id: 34,
    name: 'Óculos de Realidade Virtual Quest 4',
    description: 'Entre em novos mundos com a VR mais avançada e sem fios.',
    price: 3800.00,
    original_price: 4500.00,
    image: 'https://images.unsplash.com/photo-1506947411487-a56738267384?w=400&h=400&fit=crop',
    category: 'Drones',
    features: ['Resolução 4K por Olho', 'Rastreamento de Mãos', 'Sem necessidade de PC'],
    specifications: { "Processador": "XR3 Gen 2" },
    rating: 4.8
  },
  {
    id: 35,
    name: 'Console de Videogame PlaySystem 6',
    description: 'A nova geração de jogos com gráficos incríveis e SSD ultrarrápido.',
    price: 4499.00,
    original_price: null,
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=400&fit=crop',
    category: 'Acessórios',
    features: ['Gráficos 8K', 'SSD Ultrarrápido', 'Controle com Feedback Háptico'],
    specifications: { "Armazenamento": "1TB SSD" },
    rating: 4.9
  },
  {
    id: 36,
    name: 'Soundbar Atmos 5.1.2',
    description: 'Som de cinema na sua sala com tecnologia Dolby Atmos.',
    price: 2900.00,
    original_price: 3500.00,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    category: 'Áudio',
    features: ['Dolby Atmos', 'Subwoofer Sem Fio', 'Canais 5.1.2'],
    specifications: { "Conexão": "HDMI eARC, Bluetooth" },
    rating: 4.7
  },
  {
    id: 37,
    name: 'Smartphone Dobrável Flip 6',
    description: 'Estilo e tecnologia em um design dobrável icônico.',
    price: 6500.00,
    original_price: 7800.00,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
    category: 'Smartphones',
    features: ['Design Dobrável', 'Tela Externa Funcional', 'Câmera Versátil'],
    specifications: { "Tela Interna": "6.7 polegadas AMOLED" },
    rating: 4.6
  },
  {
    id: 38,
    name: 'Notebook UltraLeve Air',
    description: 'Menos de 1kg, perfeito para quem está sempre em movimento.',
    price: 7200.00,
    original_price: null,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
    category: 'Notebooks',
    features: ['Peso Sub-1kg', 'Bateria de Longa Duração', 'Chassi de Magnésio'],
    specifications: { "Tela": "13.3 polegadas", "Processador": "Core i7" },
    rating: 4.7
  },
  {
    id: 39,
    name: 'Monitor Portátil USB-C 15.6"',
    description: 'Uma segunda tela para o seu notebook em qualquer lugar.',
    price: 950.00,
    original_price: 1200.00,
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=400&h=400&fit=crop',
    category: 'Monitores',
    features: ['Tela Full HD IPS', 'Conexão Única USB-C', 'Capa Protetora Inclusa'],
    specifications: { "Peso": "800g" },
    rating: 4.5
  },
  {
    id: 40,
    name: 'Purificador de Ar Inteligente',
    description: 'Respire um ar mais puro, controlado por app e com filtro HEPA.',
    price: 990.00,
    original_price: 1300.00,
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop',
    category: 'Acessórios',
    features: ['Filtro HEPA H13', 'Sensor de Qualidade do Ar', 'Modo Automático'],
    specifications: { "Área de Cobertura": "Até 40m²" },
    rating: 4.6
  },
  {
    id: 41,
    name: 'Câmera DSLR Rebel T10i',
    description: 'Ideal para iniciantes na fotografia que buscam qualidade superior.',
    price: 3800.00,
    original_price: 4500.00,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop',
    category: 'Câmeras',
    features: ['Sensor APS-C 24MP', 'Visor Óptico', 'Lentes Intercambiáveis'],
    specifications: { "Gravação": "4K" },
    rating: 4.7
  },
  {
    id: 42,
    name: 'Drone Cinewhoop FPV',
    description: 'Para voos FPV cinematográficos e manobras ágeis.',
    price: 2200.00,
    original_price: null,
    image: 'https://images.unsplash.com/photo-1506947411487-a56738267384?w=400&h=400&fit=crop',
    category: 'Drones',
    features: ['Pronto para FPV', 'Protetores de Hélice', 'Gravação 4K Interna'],
    specifications: { "Tipo": "Cinewhoop" },
    rating: 4.6
  },
  {
    id: 43,
    name: 'Relógio Híbrido Steel HR',
    description: 'A aparência de um relógio clássico com a inteligência de um smartwatch.',
    price: 1250.00,
    original_price: 1500.00,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    category: 'Smartwatch',
    features: ['Design Analógico', 'Monitoramento Cardíaco', 'Notificações Discretas'],
    specifications: { "Bateria": "Até 25 dias" },
    rating: 4.5
  },
  {
    id: 44,
    name: 'Smartphone Gamer Legion 5',
    description: 'Feito para jogar, com gatilhos ultrassônicos e refrigeração líquida.',
    price: 5800.00,
    original_price: 6500.00,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
    category: 'Smartphones',
    features: ['Gatilhos Ultrassônicos', 'Tela 165Hz', 'Refrigeração Líquida'],
    specifications: { "Processador": "Top de Linha Gamer", "RAM": "18GB" },
    rating: 4.7
  },
  {
    id: 45,
    name: 'Notebook Chromebook Plus',
    description: 'Simples, rápido e seguro, ideal para estudos e trabalho na nuvem.',
    price: 2500.00,
    original_price: null,
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop',
    category: 'Notebooks',
    features: ['ChromeOS', 'Inicialização Rápida', 'Bateria para o Dia Todo'],
    specifications: { "Tela": "14 polegadas", "Armazenamento": "128GB eMMC" },
    rating: 4.4
  },
  {
    id: 46,
    name: 'Monitor Curvo 49" SuperWide',
    description: 'Substitua dois monitores com uma única tela imersiva de 49 polegadas.',
    price: 6500.00,
    original_price: 7800.00,
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=400&h=400&fit=crop',
    category: 'Monitores',
    features: ['Proporção 32:9', 'Resolução Dual QHD', 'Tecnologia QLED'],
    specifications: { "Tamanho": "49 polegadas" },
    rating: 4.8
  },
  {
    id: 47,
    name: 'Dockstation Thunderbolt 4',
    description: 'Conecte todos os seus periféricos com um único cabo.',
    price: 1800.00,
    original_price: 2100.00,
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop',
    category: 'Acessórios',
    features: ['Thunderbolt 4', 'Múltiplas Portas USB', 'Suporte a Dois Monitores 4K'],
    specifications: { "Taxa de Transferência": "40Gbps" },
    rating: 4.6
  },
  {
    id: 48,
    name: 'Fita de LED RGB Inteligente',
    description: 'Decore seu setup ou ambiente com iluminação customizável.',
    price: 250.00,
    original_price: 300.00,
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop',
    category: 'Acessórios',
    features: ['5 Metros de Comprimento', 'Sincronização com Música', 'Controle por App'],
    specifications: { "Tipo": "RGBIC" },
    rating: 4.4
  },
  {
    id: 49,
    name: 'Câmera de Ação 360° Max',
    description: 'Capture tudo ao seu redor em 360 graus com um único clique.',
    price: 3200.00,
    original_price: 3800.00,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop',
    category: 'Câmeras',
    features: ['Vídeo 360° em 6K', 'Reenquadramento Mágico', 'Estabilização de Horizonte'],
    specifications: { "Lentes": "Dupla Olho de Peixe" },
    rating: 4.7
  }
]

// Função para obter produtos por categoria
export const getProductsByCategory = (category) => {
  if (category === 'all') {
    return products
  }
  return products.filter(product => product.category.toLowerCase() === category.toLowerCase())
}

// Função para buscar produtos
export const searchProducts = (searchTerm) => {
  const term = searchTerm.toLowerCase()
  return products.filter(product => 
    product.name.toLowerCase().includes(term) ||
    product.description.toLowerCase().includes(term) ||
    product.category.toLowerCase().includes(term)
  )
}

// Função para obter categorias únicas
export const getUniqueCategories = () => {
  const categories = [...new Set(products.map(product => product.category))]
  return categories.sort()
} 