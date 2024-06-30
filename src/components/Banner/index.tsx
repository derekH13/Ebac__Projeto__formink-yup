// Banner.tsx

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Efood } from '../../pages/Perfil'
import { ImgBanner } from './styles'

const Banner = () => {
  const [catalogoServico, setCatalogoServico] = useState<Efood | null>(null)
  const { id } = useParams<{ id: string }>()
  const [isLoading, setIsLoading] = useState(true) // Estado de carregamento

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setCatalogoServico(res)
        setIsLoading(false) // Marca o carregamento como concluído
      })
      .catch((error) => console.error('Erro ao carregar dados:', error))
  }, [id])

  if (isLoading) {
    return (
      <div className="container">
        <h3>Carregando...</h3>
      </div>
    )
  }

  return (
    <div className="container">
      {catalogoServico && (
        <ImgBanner style={{ backgroundImage: `url(${catalogoServico.capa})` }}>
          <h3>{catalogoServico.tipo}</h3>
          <h1>{catalogoServico.titulo}</h1>
        </ImgBanner>
      )}
    </div>
  )
}

export default Banner
