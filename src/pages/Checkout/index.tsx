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
import { usePurchaseMutation } from '../../services/api'

const Checkout = () => {
  const [payWith, setPayWith] = useState(false)

  const [purchase, { isLoading, isError, data }] = usePurchaseMutation()

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
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      endereco: Yup.string().required('O campo é obrigatório'),
      cidade: Yup.string().required('O campo é obrigatório'),
      cep: Yup.string()
        .length(10, 'O campo precisa ter 10 caracteres')
        .required('O campo é obrigatório'),
      numero: Yup.string().required('O campo é obrigatório'),
      fullComplemento: Yup.string(),
      // Comentário: Aqui usamos o 'when' para condicionar a validação dos campos de cartão
      cardOwner: Yup.string().when('payWith', {
        is: true,
        then: (schema) => schema.required('O campo é obrigatório')
      }),
      numbCard: Yup.string().when('payWith', {
        is: true,
        then: (schema) => schema.required('O campo é obrigatório')
      }),
      cardCode: Yup.string().when('payWith', {
        is: true,
        then: (schema) => schema.required('O campo é obrigatório')
      }),
      expiresMonth: Yup.string().when('payWith', {
        is: true,
        then: (schema) => schema.required('O campo é obrigatório')
      }),
      expiresYear: Yup.string().when('payWith', {
        is: true,
        then: (schema) => schema.required('O campo é obrigatório')
      })
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.endereco,
            city: values.cidade,
            zipCode: values.cep,
            number: Number(values.numero),
            complement: values.fullComplemento
          }
        },
        payment: {
          card: {
            name: values.cardOwner,
            number: values.numbCard,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: [
          {
            id: 1,
            price: 10
          }
        ]
      })
    }
  })

  // O tipo 'keyof typeof form.values' foi adicionado ao parâmetro 'fieldName' da função 'getErrorMessage'
  // Isso garante que o 'fieldName' seja uma das chaves dos valores de 'form.values', removendo o erro TS7053.
  const getErrorMessage = (fieldName: keyof typeof form.values) => {
    return form.touched[fieldName] && form.errors[fieldName]
      ? form.errors[fieldName]
      : ''
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
                  <small>{getErrorMessage('fullName')}</small>
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
                  <small>{getErrorMessage('endereco')}</small>
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
                  <small>{getErrorMessage('cidade')}</small>
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
                    <small>{getErrorMessage('cep')}</small>
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
                    <small>{getErrorMessage('numero')}</small>
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
                  <small>{getErrorMessage('fullComplemento')}</small>
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
                  <small>{getErrorMessage('cardOwner')}</small>
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
                    <small>{getErrorMessage('numbCard')}</small>
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
                    <small>{getErrorMessage('cardCode')}</small>
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
                    <small>{getErrorMessage('expiresMonth')}</small>
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
                    <small>{getErrorMessage('expiresYear')}</small>
                  </InputGroupPayment>
                </InputGroupPayment>
              </Row>
              <TabButton>
                <Button
                  type="button"
                  background="light"
                  title=""
                  onClick={form.handleSubmit}
                >
                  Finalizar pagamento
                </Button>
                <Button
                  type="button"
                  background="light"
                  title=""
                  onClick={() => setPayWith(false)}
                >
                  Voltar para entrega
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
