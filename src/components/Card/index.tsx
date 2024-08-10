import Button from '../Button'
import { Container, Sidebar } from './styles'

type Props = {
  children: JSX.Element
  title: string
}

const Card = ({ children, title }: Props) => (
  <Container isOverlay>
    <Sidebar>
      <div className="divFormulario">
        <h2>{title}</h2>
        {children}
      </div>
      <div>
        <Button type="button" background="light" title={''}>
          Continuar com o pagamento
        </Button>
        <Button type="button" background="light" title={''}>
          Voltar para o carrinho
        </Button>
      </div>
    </Sidebar>
  </Container>
)

export default Card
