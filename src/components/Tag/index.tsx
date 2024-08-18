// Recursos externos
import { ReactNode } from 'react'

// Estilos
import { TagContainer } from './styles'

export type Props = {
  size?: 'small' | 'big'
  children: ReactNode
}

const Tag = ({ children, size = 'small' }: Props) => (
  <TagContainer size={size}>{children}</TagContainer>
)

export default Tag
