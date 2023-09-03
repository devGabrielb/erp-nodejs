// eslint-disable-next-line
import { Knex } from 'knex'
// ou faça apenas:
// import 'knex'

declare module 'knex/types/tables' {
  export interface Tables {
    usuario: {
      id: string
      nome: string
      email: string
      senha: string
      telefone?: string
      cargo?: string
      salario?: number
      amount: number
      created_at: string
      data_contratacao: string
      papel_id?: string
    }
  }
}
