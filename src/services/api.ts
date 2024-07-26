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
  find(arg0: (item: { id: string | undefined }) => boolean): Efood
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
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getHomePage: builder.query<Efood[], void>({
      query: () => 'restaurantes'
    }),
    getFeatureEfood: builder.query<Efood, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetFeatureEfoodQuery, useGetHomePageQuery } = api
export default api
