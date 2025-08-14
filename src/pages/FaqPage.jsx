import styles from './FaqPage.module.css'

const FaqPage = () => {
  const faqs = [
    {
      question: "Como faço para rastrear meu pedido?",
      answer: "Após a confirmação do pagamento, você receberá um e-mail com o código de rastreamento. Você também pode acompanhar seu pedido através da sua conta no site."
    },
    {
      question: "Qual o prazo de entrega?",
      answer: "O prazo de entrega varia de 1 a 3 dias úteis para a capital e 3 a 7 dias úteis para o interior, dependendo da sua localização."
    },
    {
      question: "Vocês fazem entrega para todo o Brasil?",
      answer: "Sim, entregamos para todo o território nacional através de nossos parceiros logísticos."
    },
    {
      question: "Como funciona a garantia dos produtos?",
      answer: "Todos os nossos produtos possuem garantia de fábrica. O prazo varia de acordo com o produto, geralmente entre 12 e 24 meses."
    },
    {
      question: "Posso cancelar meu pedido?",
      answer: "Sim, você pode cancelar seu pedido até 24 horas após a confirmação do pagamento. Entre em contato conosco através do chat ou telefone."
    },
    {
      question: "Vocês aceitam trocas?",
      answer: "Sim, aceitamos trocas em até 7 dias após o recebimento do produto, desde que esteja em perfeitas condições e na embalagem original."
    },
    {
      question: "Quais formas de pagamento vocês aceitam?",
      answer: "Aceitamos cartões de crédito e débito, PIX, boleto bancário e transferência bancária."
    },
    {
      question: "Como funciona o programa de fidelidade?",
      answer: "A cada compra você acumula pontos que podem ser trocados por descontos em futuras compras. Quanto mais você compra, mais benefícios você ganha."
    }
  ]

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1>Dúvidas Frequentes (FAQ)</h1>
        <p>
          Encontre respostas para as perguntas mais comuns sobre nossos produtos, 
          serviços e políticas. Se sua dúvida não estiver aqui, entre em contato conosco.
        </p>
        
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <h3 className={styles.question}>{faq.question}</h3>
              <p className={styles.answer}>{faq.answer}</p>
            </div>
          ))}
        </div>
        
        <div className={styles.contactInfo}>
          <h2>Ainda tem dúvidas?</h2>
          <p>
            Se você não encontrou a resposta que procurava, nossa equipe está pronta 
            para ajudar. Entre em contato conosco:
          </p>
          <ul>
            <li>📧 contato@tecnostore.com</li>
            <li>📞 (11) 9999-9999</li>
            <li>💬 Chat online (disponível 24/7)</li>
          </ul>
        </div>
      </div>
    </main>
  )
}

export default FaqPage 