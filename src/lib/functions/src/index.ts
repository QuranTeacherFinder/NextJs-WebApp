import * as faunadb from 'faunadb'
// import { Create, Collection } from 'faunadb'
import * as functions from 'firebase-functions'
import { initializeApp } from 'firebase-admin'
// const admin = require('firebase-admin')
initializeApp(functions.config().firebase)

export const SaveUserFaunadb = functions.auth.user().onCreate(async (user, context) => {
  const { Create, Collection } = faunadb.query
  const fauna = new faunadb.Client({ secret: 'fnAEU5lhKFAAQxcaBTzfvi46qFBSsyEFbFdPAsxm', domain: 'db.us.fauna.com' })
  functions.logger.info('outside-query')
  try {
    functions.logger.info('pre-query')
    const newUser = await fauna.query(Create(Collection('users'), { data: user }))
    functions.logger.info('after-query')
    return functions.logger.log(newUser)
  } catch (error) {
    return functions.logger.error(error, 'catch error')
  }
})
