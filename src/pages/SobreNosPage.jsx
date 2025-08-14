import styles from './SobreNosPage.module.css'

const SobreNosPage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1>Sobre Nós</h1>
        <p>
          A TecnoStore nasceu da paixão por tecnologia e da vontade de democratizar o acesso 
          aos melhores produtos tecnológicos do mercado. Fundada em 2020, nossa missão é 
          oferecer uma experiência de compra excepcional, combinando qualidade, preços 
          competitivos e atendimento personalizado.
        </p>
        
        <h2>Nossa Missão</h2>
        <p>
          Conectar pessoas à tecnologia de forma simples, segura e acessível, 
          proporcionando soluções que facilitem o dia a dia e impulsionem a inovação.
        </p>
        
        <h2>Nossos Valores</h2>
        <ul>
          <li><strong>Qualidade:</strong> Selecionamos apenas os melhores produtos</li>
          <li><strong>Confiança:</strong> Transparência em todas as nossas relações</li>
          <li><strong>Inovação:</strong> Sempre à frente das tendências tecnológicas</li>
          <li><strong>Atendimento:</strong> Suporte especializado e humanizado</li>
        </ul>
        
        <h2>Por que escolher a TecnoStore?</h2>
        <p>
          Com anos de experiência no mercado de tecnologia, nossa equipe é especializada 
          em identificar as melhores soluções para cada necessidade. Oferecemos garantia 
          estendida, suporte técnico e uma experiência de compra que vai além da 
          transação comercial.
        </p>
      </div>
    </main>
  )
}

export default SobreNosPage 