import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
  background: 'light' | 'dark'
}

const Botao = ({ type, children, title, to, onClick, background }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer
        background={background}
        type="button"
        title={title}
        onClick={onClick}
      >
        {children}
      </ButtonContainer>
    )
  }
  return (
    <ButtonLink to={to as string} title={title}>
      {children}
    </ButtonLink>
  )
}

export default Botao
