import styles from './ComoComprarPage.module.css'

const ComoComprarPage = () => {
  const steps = [
    {
      number: "1",
      title: "Navegue pelos Produtos",
      description: "Explore nossa categoria de produtos ou use a barra de pesquisa para encontrar o que procura."
    },
    {
      number: "2",
      title: "Escolha seu Produto",
      description: "Clique no produto desejado para ver detalhes, especificações e avaliações de outros clientes."
    },
    {
      number: "3",
      title: "Adicione ao Carrinho",
      description: "Selecione a quantidade desejada e clique em 'Adicionar ao Carrinho'."
    },
    {
      number: "4",
      title: "Revise seu Pedido",
      description: "No carrinho, confirme os produtos, quantidades e preços antes de prosseguir."
    },
    {
      number: "5",
      title: "Faça Login ou Cadastre-se",
      description: "Crie uma conta gratuita ou faça login se já for cliente."
    },
    {
      number: "6",
      title: "Informe o Endereço",
      description: "Digite seu endereço de entrega e confirme as informações."
    },
    {
      number: "7",
      title: "Escolha a Forma de Pagamento",
      description: "Selecione entre cartão de crédito/débito, PIX, boleto ou transferência."
    },
    {
      number: "8",
      title: "Confirme a Compra",
      description: "Revise todos os dados e clique em 'Finalizar Compra'."
    }
  ]

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1>Como Comprar</h1>
        <p>
          Fazer compras na TecnoStore é muito simples! Siga este guia passo a passo 
          e tenha sua compra finalizada em poucos minutos.
        </p>
        
        <div className={styles.stepsContainer}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepContent}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.tips}>
          <h2>Dicas para uma Compra Segura</h2>
          <ul>
            <li>✅ Sempre verifique as especificações do produto</li>
            <li>✅ Leia as avaliações de outros clientes</li>
            <li>✅ Confirme seu endereço antes de finalizar</li>
            <li>✅ Guarde o número do pedido para acompanhamento</li>
            <li>✅ Use cartões de crédito para maior segurança</li>
          </ul>
        </div>
        
        <div className={styles.help}>
          <h2>Precisa de Ajuda?</h2>
          <p>
            Se você tiver alguma dúvida durante o processo de compra, nossa equipe 
            está disponível para ajudar:
          </p>
          <div className={styles.contactMethods}>
            <div className={styles.contactMethod}>
              <span>💬</span>
              <p>Chat online 24/7</p>
            </div>
            <div className={styles.contactMethod}>
              <span>📞</span>
              <p>(11) 9999-9999</p>
            </div>
            <div className={styles.contactMethod}>
              <span>📧</span>
              <p>contato@tecnostore.com</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ComoComprarPage 