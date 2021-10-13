import faunadb from 'faunadb'

export const faunaClient = new faunadb.Client({
  secret: process.env.NEXT_PUBLIC_FAUNA_SECRET as string
})
