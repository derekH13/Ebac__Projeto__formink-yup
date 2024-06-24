import { useEffect, useState } from 'react'
import { Efood } from '../../pages/Home'
import { ImgBanner } from './styles'

const Banner = () => {
  const [catalogoServico, setCatalogoServico] = useState<Efood | null>(null)

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res: Efood[]) => {
        if (res.length > 0) {
          setCatalogoServico(res[0]) // Pegue o primeiro item do array
        }
      })
      .catch((error) => console.error('Erro ao carregar dados:', error))
  }, [])

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
