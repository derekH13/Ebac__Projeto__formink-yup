import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Efood } from '../../pages/Home'
import { ImgBanner } from './styles'

const Banner = () => {
  const [catalogoServico, setCatalogoServico] = useState<Efood | null>(null)
  const { id } = useParams<{ id: string }>()

  // Efeito para buscar os dados do restaurante específico ao carregar o componente
  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setCatalogoServico(res))
  }, [id])

  if (!catalogoServico) {
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
