import styles from './PoliticaPrivacidadePage.module.css'

const PoliticaPrivacidadePage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1>Política de Privacidade</h1>
        <p>
          A TecnoStore está comprometida em proteger a privacidade e os dados pessoais 
          de nossos clientes. Esta política descreve como coletamos, usamos e protegemos 
          suas informações.
        </p>
        
        <h2>Informações que Coletamos</h2>
        <p>
          Coletamos informações que você nos fornece diretamente, como nome, e-mail, 
          endereço e dados de pagamento quando faz uma compra em nosso site.
        </p>
        
        <h2>Como Usamos suas Informações</h2>
        <ul>
          <li>Processar e gerenciar seus pedidos</li>
          <li>Enviar comunicações sobre seu pedido</li>
          <li>Oferecer suporte ao cliente</li>
          <li>Enviar ofertas e novidades (com seu consentimento)</li>
          <li>Melhorar nossos produtos e serviços</li>
        </ul>
        
        <h2>Compartilhamento de Dados</h2>
        <p>
          Não vendemos, alugamos ou compartilhamos suas informações pessoais com 
          terceiros, exceto quando necessário para processar seu pedido ou quando 
          exigido por lei.
        </p>
        
        <h2>Segurança</h2>
        <p>
          Implementamos medidas de segurança técnicas e organizacionais para proteger 
          seus dados contra acesso não autorizado, alteração, divulgação ou destruição.
        </p>
        
        <h2>Seus Direitos</h2>
        <p>
          Você tem o direito de acessar, corrigir ou excluir seus dados pessoais. 
          Para exercer esses direitos, entre em contato conosco através do e-mail 
          privacidade@tecnostore.com
        </p>
      </div>
    </main>
  )
}

export default PoliticaPrivacidadePage 