import firebaseAdmin from 'lib/clients/firebaseAdmin'
import { GetServerSidePropsContext } from 'next'
import { parseCookies } from 'nookies'

export const withPageAuthFromDash = (getSSRFunc: Function) => {
  return async (context: GetServerSidePropsContext) => {
    try {
      const cookies = parseCookies(context)
      const session = await firebaseAdmin.auth().verifyIdToken(cookies.firebaseAuthToken)
      if (session) return await getSSRFunc(context)
    } catch (error) {
      return {
        redirect: {
          destination: '/',
          permanent: false
        }
      }
    }
  }
}

export const withPageAuthToDash = (getSSRFunc: Function) => {
  return async (context: GetServerSidePropsContext) => {
    try {
      const cookies = parseCookies(context)
      const session = await firebaseAdmin.auth().verifyIdToken(cookies.firebaseAuthToken)
      if (session)
        return {
          redirect: {
            destination: '/dash',
            permanent: false
          }
        }
    } catch (error) {
      return await getSSRFunc(context)
    }
  }
}
