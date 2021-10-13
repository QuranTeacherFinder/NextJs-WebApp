import * as faunadb from 'faunadb'
import * as functions from 'firebase-functions'
const admin = require('firebase-admin')
admin.initializeApp()
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

export const SaveUserFaunadbTest = functions.https.onRequest(async (req, res) => {
  const { Create, Collection } = faunadb.query
  const fauna = new faunadb.Client({ secret: functions.config().faunadb.secret, domain: 'db.us.fauna.com' })
  functions.logger.info(functions.config().faunadb.secret, 'outside-query')
  const user = {
    name: 'adam',
    provider: 'google'
  }
  try {
    functions.logger.info(functions.config().faunadb.secret, 'pre-query')
    const newUser = await fauna.query(Create(Collection('users'), { data: user }))
    functions.logger.info(functions.config().faunadb.secret, 'after-query')
    res.send(newUser)
  } catch (error) {
    res.json({ error, msg: 'catch error' })
  }
})
