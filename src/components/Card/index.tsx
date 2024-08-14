import Button from '../Button'
import { Container, Sidebar } from './styles'

type Props = {
  children: JSX.Element | JSX.Element[]
  isPaymentStep: boolean
  onContinue: () => void
}

const Card = ({ children, isPaymentStep, onContinue }: Props) => (
  <Container isOverlay>
    <Sidebar>
      <div className="divFormulario">{children}</div>
      <div>
        <Button type="button" background="light" title="" onClick={onContinue}>
          {isPaymentStep ? 'Finalizar pagamento' : 'Continuar com o pagamento'}
        </Button>
        <Button type="button" background="light" title="" onClick={onContinue}>
          {isPaymentStep
            ? 'Voltar para a edição de endereço'
            : 'Voltar para o carrinho'}
        </Button>
      </div>
    </Sidebar>
  </Container>
)

export default Card
