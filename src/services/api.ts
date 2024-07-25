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
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getFeatureEfood: builder.query<Efood[], string>({
      query: (id) => `efood/${id}`
    })
  })
})

export const { useGetFeatureEfoodQuery } = api
export default api
