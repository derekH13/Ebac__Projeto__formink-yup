// Recursos externos
import { useFormik } from 'formik'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

// Funções
import { usePurchaseMutation } from '../../services/api'

// Componentes
import Button from '../../components/Button'
import Card from '../../components/Card'

// Estilos
import * as S from './styles'

const Checkout = () => {
  const [payWith, setPayWith] = useState(false)
  const navigate = useNavigate() // Inicializar useNavigate

  const [purchase, { data, isSuccess }] = usePurchaseMutation()

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

  const handleConclude = () => {
    navigate('/') // Redirecionar para a página inicial
  }

  return (
    <div className="container">
      {isSuccess ? (
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
                title=""
                onClick={handleConclude}
              >
                Concluir
              </Button>
            </S.TabButton>
          </>
        </Card>
      ) : (
        <form onSubmit={form.handleSubmit}>
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
                      />
                      <small>{getErrorMessage('fullName')}</small>
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
                      />
                      <small>{getErrorMessage('endereco')}</small>
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
                      />
                      <small>{getErrorMessage('cidade')}</small>
                    </S.InputGroup>
                    <S.InputGroup className="InputFlex">
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
                      />
                      <small>{getErrorMessage('fullComplemento')}</small>
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
                <>
                  <S.Row>
                    <S.TitleH3>Pagamento - Valor a pagar R$ 190,90</S.TitleH3>
                    <S.InputGroupPayment>
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
                    </S.InputGroupPayment>
                    <S.InputGroupPayment className="InputFlexpayment">
                      <S.InputGroupPayment className="InputNumbCard">
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
                      </S.InputGroupPayment>
                      <S.InputGroupPayment className="InputCvv">
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
                      </S.InputGroupPayment>
                    </S.InputGroupPayment>
                    <S.InputGroupPayment className="InputFlexpayment">
                      <S.InputGroupPayment className="InputNumbCard">
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
                      </S.InputGroupPayment>
                      <S.InputGroupPayment className="InputexpiresYear">
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
                      </S.InputGroupPayment>
                    </S.InputGroupPayment>
                  </S.Row>
                  <S.TabButton>
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
                      Voltar para a edição de endereço
                    </Button>
                  </S.TabButton>
                </>
              )}
            </div>
          </Card>
        </form>
      )}
    </div>
  )
}

export default Checkout
