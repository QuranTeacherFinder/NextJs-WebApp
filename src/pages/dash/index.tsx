import { Button } from 'components/custom'
import { useAuth } from 'lib/context/auth'
import { withPageAuthFromDash } from 'lib/middleware/pageMiddleware'
import { GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'

const Dash = () => {
  //   const router = useRouter()
  const { user, signout } = useAuth()
  const router = useRouter()
  const handleSignOut = async () => {
    router.push('/')
    signout()
  }

  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre> <Button onClick={handleSignOut}>SignOut</Button>
    </div>
  )
}

export const getServerSideProps = withPageAuthFromDash((ctx: GetServerSidePropsContext) => {
  return { props: {} }
})

export default Dash
