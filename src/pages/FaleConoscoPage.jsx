import { useState } from 'react'
import styles from './FaleConoscoPage.module.css'

const FaleConoscoPage = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui seria implementada a lógica de envio do formulário
    console.log('Formulário enviado:', formData)
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.')
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      assunto: '',
      mensagem: ''
    })
  }

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1>Fale Conosco</h1>
        <p>
          Estamos aqui para ajudar! Entre em contato conosco através dos canais 
          abaixo ou preencha o formulário e retornaremos em breve.
        </p>
        
        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <h2>Informações de Contato</h2>
            
            <div className={styles.contactItem}>
              <span className={styles.icon}>📧</span>
              <div>
                <h3>E-mail</h3>
                <p>contato@tecnostore.com</p>
                <p>suporte@tecnostore.com</p>
              </div>
            </div>
            
            <div className={styles.contactItem}>
              <span className={styles.icon}>📞</span>
              <div>
                <h3>Telefone</h3>
                <p>(11) 9999-9999</p>
                <p>(11) 8888-8888</p>
              </div>
            </div>
            
            <div className={styles.contactItem}>
              <span className={styles.icon}>🏢</span>
              <div>
                <h3>Endereço</h3>
                <p>Rua das Tecnologias, 123</p>
                <p>São Paulo - SP, 01234-567</p>
              </div>
            </div>
            
            <div className={styles.contactItem}>
              <span className={styles.icon}>🕒</span>
              <div>
                <h3>Horário de Atendimento</h3>
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábado: 9h às 14h</p>
              </div>
            </div>
          </div>
          
          <div className={styles.contactForm}>
            <h2>Envie sua Mensagem</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="nome">Nome Completo *</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email">E-mail *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="telefone">Telefone</label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="assunto">Assunto *</label>
                <select
                  id="assunto"
                  name="assunto"
                  value={formData.assunto}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecione um assunto</option>
                  <option value="duvida">Dúvida sobre Produto</option>
                  <option value="pedido">Acompanhamento de Pedido</option>
                  <option value="troca">Trocas e Devoluções</option>
                  <option value="sugestao">Sugestões</option>
                  <option value="reclamacao">Reclamações</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="mensagem">Mensagem *</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  rows="5"
                  required
                  placeholder="Descreva sua dúvida ou solicitação..."
                />
              </div>
              
              <button type="submit" className={styles.submitButton}>
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default FaleConoscoPage 