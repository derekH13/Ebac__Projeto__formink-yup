import { useFormik } from 'formik'
import { useState } from 'react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import {
  InputGroup,
  InputGroupPayment,
  Row,
  TabButton,
  TitleH3
} from './styles'

import * as Yup from 'yup'

const Checkout = () => {
  const [payWith, setPayWith] = useState(false)

  const form = useFormik({
    initialValues: {
      fullName: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: '',
      fullComplemento: '',
      cardOwner: '',
      numbCard: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracterios')
        .required('O campo é obrigatorio'),
      endereco: Yup.string().required(),
      cidade: Yup.string().required(),
      cep: Yup.string()
        .min(10, 'O campo precisa ter 10 caracteres')
        .max(10, 'O campo precisa ter 10 caracteres')
        .required(),
      numero: Yup.string().required(),
      fullComplemento: Yup.string(),

      cardOwner: Yup.string().when((values, schema) =>
        payWith ? schema.required('O campo é obrigatorio') : schema
      ),
      numbCard: Yup.string().when((values, schema) =>
        payWith ? schema.required('O campo é obrigatorio') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        payWith ? schema.required('O campo é obrigatorio') : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        payWith ? schema.required('O campo é obrigatorio') : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        payWith ? schema.required('O campo é obrigatorio') : schema
      )
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  return (
    <form onSubmit={form.handleSubmit} className="container">
      <Card>
        <div>
          {!payWith ? (
            <>
              <Row>
                <TitleH3>Entrega</TitleH3>
                <InputGroup>
                  <label htmlFor="fullName">Quem irá receber</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={form.values.fullName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('fullName', form.errors.fullName)}
                  </small>
                </InputGroup>
                <InputGroup>
                  <label htmlFor="endereco">Endereço</label>
                  <input
                    type="text"
                    id="endereco"
                    name="endereco"
                    value={form.values.endereco}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('endereco', form.errors.endereco)}
                  </small>
                </InputGroup>
                <InputGroup>
                  <label htmlFor="cidade">Cidade</label>
                  <input
                    type="text"
                    id="cidade"
                    name="cidade"
                    value={form.values.cidade}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{getErrorMessage('cidade', form.errors.cidade)}</small>
                </InputGroup>
                <InputGroup className="InputFlex">
                  <div>
                    <label htmlFor="cep">CEP</label>
                    <input
                      type="text"
                      id="cep"
                      name="cep"
                      value={form.values.cep}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>{getErrorMessage('cep', form.errors.cep)}</small>
                  </div>
                  <div>
                    <label htmlFor="numero">Número</label>
                    <input
                      type="number"
                      id="numero"
                      name="numero"
                      value={form.values.numero}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('numero', form.errors.numero)}
                    </small>
                  </div>
                </InputGroup>
                <InputGroup>
                  <label htmlFor="fullComplemento">
                    Complemento (opcional)
                  </label>
                  <input
                    type="text"
                    id="fullComplemento"
                    name="fullComplemento"
                    value={form.values.fullComplemento}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage(
                      'fullComplemento',
                      form.errors.fullComplemento
                    )}
                  </small>
                </InputGroup>
              </Row>
              <TabButton>
                <Button
                  type="button"
                  background="light"
                  title=""
                  onClick={() => setPayWith(true)}
                >
                  Continuar com o pagamento
                </Button>
                <Button
                  type="button"
                  background="light"
                  title=""
                  onClick={() => setPayWith(false)}
                >
                  Voltar para o carrinho
                </Button>
              </TabButton>
            </>
          ) : (
            <>
              <Row>
                <TitleH3>Pagamento - Valor a pagar R$ 190,90</TitleH3>
                <InputGroupPayment>
                  <label htmlFor="cardOwner">Nome no cartão</label>
                  <input
                    type="text"
                    id="cardOwner"
                    name="cardOwner"
                    value={form.values.cardOwner}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('cardOwner', form.errors.cardOwner)}
                  </small>
                </InputGroupPayment>
                <InputGroupPayment className="InputFlexpayment">
                  <InputGroupPayment className="InputNumbCard">
                    <label htmlFor="numbCard">Número do cartão</label>
                    <input
                      type="number"
                      id="numbCard"
                      name="numbCard"
                      value={form.values.numbCard}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('cardOwner', form.errors.cardOwner)}
                    </small>
                  </InputGroupPayment>
                  <InputGroupPayment className="InputCvv">
                    <label htmlFor="cardCode">CVV</label>
                    <input
                      type="number"
                      id="cardCode"
                      name="cardCode"
                      value={form.values.cardCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('cardCode', form.errors.cardCode)}
                    </small>
                  </InputGroupPayment>
                </InputGroupPayment>
                <InputGroupPayment className="InputFlexpayment">
                  <InputGroupPayment className="InputNumbCard">
                    <label htmlFor="expiresMonth">Mês de vencimento</label>
                    <input
                      type="text"
                      id="expiresMonth"
                      name="expiresMonth"
                      value={form.values.expiresMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage(
                        'expiresMonth',
                        form.errors.expiresMonth
                      )}
                    </small>
                  </InputGroupPayment>
                  <InputGroupPayment className="InputexpiresYear">
                    <label htmlFor="expiresYear">Ano de vencimento</label>
                    <input
                      type="number"
                      id="expiresYear"
                      name="expiresYear"
                      value={form.values.expiresYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('expiresYear', form.errors.expiresYear)}
                    </small>
                  </InputGroupPayment>
                </InputGroupPayment>
              </Row>
              <TabButton>
                <Button
                  type="button"
                  background="light"
                  title=""
                  onClick={() => setPayWith(true)}
                >
                  Finalizar pagamento
                </Button>
                <Button
                  type="button"
                  background="light"
                  title=""
                  onClick={() => setPayWith(false)}
                >
                  Voltar para a edição de endereço
                </Button>
              </TabButton>
            </>
          )}
        </div>
      </Card>
    </form>
  )
}

export default Checkout
