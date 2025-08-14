import styles from './TrocasDevolucoesPage.module.css'

const TrocasDevolucoesPage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1>Trocas e Devoluções</h1>
        <p>
          Na TecnoStore, sua satisfação é nossa prioridade. Oferecemos uma política 
          clara e transparente para trocas e devoluções, garantindo que você faça 
          compras com total confiança.
        </p>
        
        <div className={styles.policySection}>
          <h2>📦 Política de Trocas</h2>
          <div className={styles.policyCard}>
            <h3>Prazo para Trocas</h3>
            <p>Você tem até <strong>7 dias corridos</strong> após o recebimento do produto para solicitar uma troca.</p>
            
            <h3>Condições para Troca</h3>
            <ul>
              <li>✅ Produto em perfeitas condições de uso</li>
              <li>✅ Embalagem original intacta</li>
              <li>✅ Todos os acessórios e manuais incluídos</li>
              <li>✅ Nota fiscal ou comprovante de compra</li>
            </ul>
            
            <h3>Produtos que NÃO aceitamos troca</h3>
            <ul>
              <li>❌ Produtos de higiene pessoal</li>
              <li>❌ Produtos personalizados ou customizados</li>
              <li>❌ Produtos com danos causados pelo cliente</li>
              <li>❌ Produtos sem embalagem original</li>
            </ul>
          </div>
        </div>
        
        <div className={styles.policySection}>
          <h2>💰 Política de Devoluções</h2>
          <div className={styles.policyCard}>
            <h3>Prazo para Devoluções</h3>
            <p>Você tem até <strong>30 dias corridos</strong> após o recebimento para solicitar uma devolução.</p>
            
            <h3>Processo de Devolução</h3>
            <ol>
              <li>Entre em contato conosco através do chat ou telefone</li>
              <li>Informe o motivo da devolução</li>
              <li>Nossa equipe avaliará a solicitação</li>
              <li>Após aprovação, enviaremos instruções para envio</li>
              <li>O reembolso será processado em até 5 dias úteis</li>
            </ol>
            
            <h3>Formas de Reembolso</h3>
            <ul>
              <li>💳 Estorno no cartão de crédito (até 2 faturas)</li>
              <li>🏦 Transferência bancária</li>
              <li>💸 Crédito na conta TecnoStore</li>
            </ul>
          </div>
        </div>
        
        <div className={styles.policySection}>
          <h2>🚚 Logística de Trocas e Devoluções</h2>
          <div className={styles.policyCard}>
            <h3>Custos de Envio</h3>
            <ul>
              <li><strong>Troca por defeito:</strong> Gratuito</li>
              <li><strong>Troca por arrependimento:</strong> Cliente paga o frete de retorno</li>
              <li><strong>Devolução:</strong> Cliente paga o frete de retorno</li>
            </ul>
            
            <h3>Prazo de Processamento</h3>
            <ul>
              <li>📅 Análise da solicitação: 1-2 dias úteis</li>
              <li>📦 Envio da etiqueta de retorno: 1 dia útil</li>
              <li>🔄 Processamento após recebimento: 3-5 dias úteis</li>
              <li>💳 Reembolso: 5-10 dias úteis</li>
            </ul>
          </div>
        </div>
        
        <div className={styles.contactSection}>
          <h2>📞 Como Solicitar Troca ou Devolução</h2>
          <div className={styles.contactMethods}>
            <div className={styles.contactMethod}>
              <span>💬</span>
              <h3>Chat Online</h3>
              <p>Disponível 24/7</p>
            </div>
            <div className={styles.contactMethod}>
              <span>📞</span>
              <h3>Telefone</h3>
              <p>(11) 9999-9999</p>
            </div>
            <div className={styles.contactMethod}>
              <span>📧</span>
              <h3>E-mail</h3>
              <p>trocas@tecnostore.com</p>
            </div>
          </div>
        </div>
        
        <div className={styles.faqSection}>
          <h2>❓ Perguntas Frequentes</h2>
          <div className={styles.faqItem}>
            <h3>Posso trocar um produto que não gostei?</h3>
            <p>Sim, desde que esteja em perfeitas condições e dentro do prazo de 7 dias.</p>
          </div>
          <div className={styles.faqItem}>
            <h3>Como funciona o reembolso?</h3>
            <p>O reembolso é processado na mesma forma de pagamento utilizada na compra.</p>
          </div>
          <div className={styles.faqItem}>
            <h3>Quanto tempo leva para receber meu reembolso?</h3>
            <p>O prazo varia de 5 a 10 dias úteis, dependendo da forma de pagamento.</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default TrocasDevolucoesPage 