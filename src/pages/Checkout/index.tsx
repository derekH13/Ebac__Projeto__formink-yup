import { useState } from 'react'
import Card from '../../components/Card'
import { InputGroup, InputGroupPayment, Row, TitleH3 } from './styles'

const Checkout = () => {
  const [isPaymentStep, setIsPaymentStep] = useState(false)

  const handleContinue = () => {
    setIsPaymentStep(true)
  }

  return (
    <div className="container">
      <Card isPaymentStep={isPaymentStep} onContinue={handleContinue}>
        {!isPaymentStep ? (
          <>
            <Row>
              <TitleH3>Entrega</TitleH3>
              <InputGroup>
                <label htmlFor="fullName">Quem irá receber</label>
                <input type="text" id="fullName" />
              </InputGroup>
              <InputGroup>
                <label htmlFor="endereco">Endereço</label>
                <input type="text" id="endereco" />
              </InputGroup>
              <InputGroup>
                <label htmlFor="cidade">Cidade</label>
                <input type="text" id="cidade" />
              </InputGroup>
              <InputGroup className="InputFlex">
                <div>
                  <label htmlFor="cep">CEP</label>
                  <input type="text" id="cep" />
                </div>
                <div>
                  <label htmlFor="numero">Número</label>
                  <input type="number" id="numero" />
                </div>
              </InputGroup>
              <InputGroup>
                <label htmlFor="fullComplemento">Complemento (opcional)</label>
                <input type="text" id="fullComplemento" />
              </InputGroup>
            </Row>
          </>
        ) : (
          <>
            <Row>
              <TitleH3>Pagamento - Valor a pagar R$ 190,90</TitleH3>
              <InputGroupPayment>
                <label htmlFor="cardOwner">Nome no cartão</label>
                <input type="text" id="cardOwner" />
              </InputGroupPayment>
              <InputGroupPayment className="InputFlexpayment">
                <InputGroupPayment className="InputNumbCard">
                  <label htmlFor="numbCard">Número do cartão</label>
                  <input type="number" id="numbCard" />
                </InputGroupPayment>
                <InputGroupPayment className="InputCvv">
                  <label htmlFor="cardCode">CVV</label>
                  <input type="number" id="cardCode" />
                </InputGroupPayment>
              </InputGroupPayment>
              <InputGroupPayment className="InputFlexpayment">
                <InputGroupPayment className="InputNumbCard">
                  <label htmlFor="expiresMonth">Mês de vencimento</label>
                  <input type="text" id="expiresMonth" />
                </InputGroupPayment>
                <InputGroupPayment className="InputexpiresYear">
                  <label htmlFor="expiresYear">Ano de vencimento</label>
                  <input type="number" id="expiresYear" />
                </InputGroupPayment>
              </InputGroupPayment>
            </Row>
          </>
        )}
      </Card>
    </div>
  )
}

export default Checkout
