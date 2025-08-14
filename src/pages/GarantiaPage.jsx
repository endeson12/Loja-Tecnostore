import styles from './GarantiaPage.module.css'

const GarantiaPage = () => {
  const garantias = [
    {
      categoria: "Smartphones",
      prazo: "12 meses",
      cobertura: "Defeitos de fabricação, hardware e software",
      observacoes: "Inclui bateria e carregador"
    },
    {
      categoria: "Notebooks e Computadores",
      prazo: "24 meses",
      cobertura: "Defeitos de fabricação, placa-mãe, processador",
      observacoes: "Garantia estendida disponível"
    },
    {
      categoria: "Acessórios",
      prazo: "6 meses",
      cobertura: "Defeitos de fabricação",
      observacoes: "Cabo, fones, carregadores"
    },
    {
      categoria: "Gaming",
      prazo: "12 meses",
      cobertura: "Defeitos de fabricação e componentes",
      observacoes: "Consoles e periféricos"
    }
  ]

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1>Garantia</h1>
        <p>
          Na TecnoStore, todos os nossos produtos possuem garantia de fábrica. 
          Conheça os prazos e coberturas para cada categoria de produto.
        </p>
        
        <div className={styles.garantiaGrid}>
          {garantias.map((garantia, index) => (
            <div key={index} className={styles.garantiaCard}>
              <h3>{garantia.categoria}</h3>
              <div className={styles.garantiaInfo}>
                <div className={styles.infoItem}>
                  <span className={styles.label}>Prazo:</span>
                  <span className={styles.value}>{garantia.prazo}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.label}>Cobertura:</span>
                  <span className={styles.value}>{garantia.cobertura}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.label}>Observações:</span>
                  <span className={styles.value}>{garantia.observacoes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.policySection}>
          <h2>🛡️ O que está Coberto pela Garantia</h2>
          <div className={styles.policyCard}>
            <ul>
              <li>✅ Defeitos de fabricação</li>
              <li>✅ Problemas de hardware</li>
              <li>✅ Defeitos de software (quando aplicável)</li>
              <li>✅ Componentes internos</li>
              <li>✅ Acessórios incluídos na compra</li>
            </ul>
          </div>
        </div>
        
        <div className={styles.policySection}>
          <h2>❌ O que NÃO está Coberto</h2>
          <div className={styles.policyCard}>
            <ul>
              <li>❌ Danos causados pelo usuário</li>
              <li>❌ Uso inadequado do produto</li>
              <li>❌ Danos por queda ou impacto</li>
              <li>❌ Exposição a líquidos</li>
              <li>❌ Modificações não autorizadas</li>
              <li>❌ Desgaste natural do produto</li>
            </ul>
          </div>
        </div>
        
        <div className={styles.policySection}>
          <h2>🔧 Como Acionar a Garantia</h2>
          <div className={styles.policyCard}>
            <h3>Passo a Passo</h3>
            <ol>
              <li>Identifique o problema com o produto</li>
              <li>Entre em contato conosco (chat, telefone ou e-mail)</li>
              <li>Descreva o problema detalhadamente</li>
              <li>Nossa equipe avaliará se está coberto pela garantia</li>
              <li>Se aprovado, enviaremos instruções para envio</li>
              <li>O produto será analisado pela assistência técnica</li>
              <li>Reparo ou substituição será realizado</li>
            </ol>
            
            <h3>Documentos Necessários</h3>
            <ul>
              <li>📄 Nota fiscal ou comprovante de compra</li>
              <li>📱 Produto com todos os acessórios</li>
              <li>📝 Descrição detalhada do problema</li>
            </ul>
          </div>
        </div>
        
        <div className={styles.policySection}>
          <h2>⏱️ Prazos de Atendimento</h2>
          <div className={styles.policyCard}>
            <div className={styles.prazoItem}>
              <h3>Análise Inicial</h3>
              <p>1-2 dias úteis</p>
            </div>
            <div className={styles.prazoItem}>
              <h3>Envio para Assistência</h3>
              <p>1-3 dias úteis</p>
            </div>
            <div className={styles.prazoItem}>
              <h3>Reparo/Substituição</h3>
              <p>7-15 dias úteis</p>
            </div>
            <div className={styles.prazoItem}>
              <h3>Retorno ao Cliente</h3>
              <p>1-3 dias úteis</p>
            </div>
          </div>
        </div>
        
        <div className={styles.contactSection}>
          <h2>📞 Suporte Técnico</h2>
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
              <p>garantia@tecnostore.com</p>
            </div>
          </div>
        </div>
        
        <div className={styles.faqSection}>
          <h2>❓ Perguntas Frequentes sobre Garantia</h2>
          <div className={styles.faqItem}>
            <h3>Posso estender a garantia do meu produto?</h3>
            <p>Sim, oferecemos planos de garantia estendida para a maioria dos produtos.</p>
          </div>
          <div className={styles.faqItem}>
            <h3>O que acontece se o produto não puder ser consertado?</h3>
            <p>Em caso de impossibilidade de reparo, o produto será substituído por um similar.</p>
          </div>
          <div className={styles.faqItem}>
            <h3>A garantia cobre danos por queda?</h3>
            <p>Não, a garantia não cobre danos causados por uso inadequado ou acidentes.</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default GarantiaPage 