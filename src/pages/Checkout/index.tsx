// Recursos externos
import { useFormik } from 'formik'
import { useState } from 'react'
import InputMask from 'react-input-mask'
import { Navigate } from 'react-router-dom'
import * as Yup from 'yup'

// Funções
import { usePurchaseMutation } from '../../services/api'
import { getTotalPrice, parseToBrl } from '../../utils'

// Componentes
import Button from '../../components/Button'
import Card from '../../components/Card'

// Estilos
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import * as S from './styles'

const Checkout = () => {
  const [payWith, setPayWith] = useState(false)

  const [purchase, { data, isSuccess }] = usePurchaseMutation()

  const { items } = useSelector((state: RootReducer) => state.cart)

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

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const handleConclude = () => {
    window.location.reload()
    return <Navigate to="/" />
  }

  if (items.length === 0) {
    window.location.reload()
    return <Navigate to="/" />
  }
  return (
    <div className="container">
      {isSuccess && data ? (
        <Card>
          <>
            <S.TitleH3>Pedido realizado - {data.orderId} </S.TitleH3>
            <S.Paragrafo>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </S.Paragrafo>
            <br />
            <S.Paragrafo>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </S.Paragrafo>
            <br />
            <S.Paragrafo>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </S.Paragrafo>
            <br />
            <S.Paragrafo>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </S.Paragrafo>
            <S.TabButton>
              <Button
                type="button"
                background="light"
                title="Concoluir"
                onClick={handleConclude}
              >
                Concluir
              </Button>
            </S.TabButton>
          </>
        </Card>
      ) : (
        <Card>
          <div>
            {!payWith ? (
              <>
                <S.Row>
                  <S.TitleH3>Entrega</S.TitleH3>
                  <S.InputGroup>
                    <label htmlFor="fullName">Quem irá receber</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={form.values.fullName}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('fullName') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="endereco">Endereço</label>
                    <input
                      type="text"
                      id="endereco"
                      name="endereco"
                      value={form.values.endereco}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('endereco') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="cidade">Cidade</label>
                    <input
                      type="text"
                      id="cidade"
                      name="cidade"
                      value={form.values.cidade}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('cidade') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <S.InputGroup className="InputFlex">
                    <div>
                      <label htmlFor="cep">CEP</label>
                      <InputMask
                        type="text"
                        id="cep"
                        name="cep"
                        value={form.values.cep}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('cep') ? 'error' : ''}
                        mask="99.999-999"
                      />
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
                        className={checkInputHasError('numero') ? 'error' : ''}
                      />
                    </div>
                  </S.InputGroup>
                  <S.InputGroup>
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
                      className={
                        checkInputHasError('fullComplemento') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>
                </S.Row>
                <S.TabButton>
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
                </S.TabButton>
              </>
            ) : (
              <form onSubmit={form.handleSubmit}>
                <>
                  <S.Row>
                    <S.TitleH3>
                      Pagamento - Valor a pagar
                      <span>{parseToBrl(getTotalPrice(items))}</span>
                    </S.TitleH3>
                    <S.InputGroupPayment>
                      <label htmlFor="cardOwner">Nome no cartão</label>
                      <input
                        type="text"
                        id="cardOwner"
                        name="cardOwner"
                        value={form.values.cardOwner}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('cardOwer') ? 'error' : ''
                        }
                      />
                    </S.InputGroupPayment>
                    <S.InputGroupPayment className="InputFlexpayment">
                      <S.InputGroupPayment className="InputNumbCard">
                        <label htmlFor="numbCard">Número do cartão</label>
                        <InputMask
                          type="number"
                          id="numbCard"
                          name="numbCard"
                          value={form.values.numbCard}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('numbCard') ? 'error' : ''
                          }
                          mask="9999 9999 9999 9999"
                        />
                      </S.InputGroupPayment>
                      <S.InputGroupPayment className="InputCvv">
                        <label htmlFor="cardCode">CVV</label>
                        <InputMask
                          type="number"
                          id="cardCode"
                          name="cardCode"
                          value={form.values.cardCode}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('cardCode') ? 'error' : ''
                          }
                          mask="999"
                        />
                      </S.InputGroupPayment>
                    </S.InputGroupPayment>
                    <S.InputGroupPayment className="InputFlexpayment">
                      <S.InputGroupPayment className="InputNumbCard">
                        <label htmlFor="expiresMonth">Mês de vencimento</label>
                        <InputMask
                          type="text"
                          id="expiresMonth"
                          name="expiresMonth"
                          value={form.values.expiresMonth}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('expiresMonth') ? 'error' : ''
                          }
                          mask="99"
                        />
                      </S.InputGroupPayment>
                      <S.InputGroupPayment className="InputexpiresYear">
                        <label htmlFor="expiresYear">Ano de vencimento</label>
                        <InputMask
                          type="number"
                          id="expiresYear"
                          name="expiresYear"
                          value={form.values.expiresYear}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('expiresYear') ? 'error' : ''
                          }
                          mask="9999"
                        />
                      </S.InputGroupPayment>
                    </S.InputGroupPayment>
                  </S.Row>
                  <S.TabButton>
                    <Button
                      type="submit"
                      background="light"
                      title=""
                      onClick={form.handleSubmit}
                    >
                      Finalizar compra
                    </Button>
                    <Button
                      type="button"
                      background="light"
                      title=""
                      onClick={() => setPayWith(false)}
                    >
                      Voltar para a edição de endereço
                    </Button>
                  </S.TabButton>
                </>
              </form>
            )}
          </div>
        </Card>
      )}
    </div>
  )
}

export default Checkout
