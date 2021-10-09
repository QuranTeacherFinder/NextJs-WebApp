import { Client, Collection, Create } from 'faunadb'
import * as functions from 'firebase-functions'
const admin = require('firebase-admin')
admin.initializeApp()
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
const fauna = new Client({ secret: functions.config().faunadb.secret, domain: 'db.us.fauna.com' })

export const SaveUserFaunadb = functions.auth.user().onCreate((user, context) => {
  functions.logger.log(user.email, functions.config().faunadb.secret)
  fauna
    .query(Create(Collection('users'), { user }))
    .then(() => {
      functions.logger.log(user)
    })
    .catch((error) => {
      functions.logger.error(error)
    })
})
