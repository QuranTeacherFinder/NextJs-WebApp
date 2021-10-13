// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Client, Create, Collection } from 'faunadb'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { user } = req.body as any
  const fauna = new Client({
    secret: process.env.NEXT_PUBLIC_FAUNA_SECRET as string,
    domain: 'db.us.fauna.com'
  })
  // const user = {
  //   name: 'adam',
  //   provider: 'google'
  // }
  try {
    const newUser = await fauna.query(Create(Collection('users'), { data: user }))
    res.status(200).json(newUser)
  } catch (error) {
    console.error(error)
  }
}
