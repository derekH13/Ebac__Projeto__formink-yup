import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface CardapioItem {
  id: string
  foto: string
  descricao: string
  preco: number
  nome: string
  porcao: string
}

export interface Efood {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: CardapioItem[]
}

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '/apihttps://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getFeatureEfood: builder.query<Efood, void>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetFeatureEfoodQuery } = api
export default api
