import Card from '../../components/Card'
import { InputGroup } from './styles'

const Checkout = () => (
  <div className="container">
    <Card title="Entrega">
      <div>
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
      </div>
    </Card>
  </div>
)

export default Checkout
