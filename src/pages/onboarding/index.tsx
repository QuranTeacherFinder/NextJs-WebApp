import Head from 'next/head'
import { Button, Link } from 'components/custom'
import { BiRightArrowAlt } from 'react-icons/bi'
import OnboardingLayout from 'components/layouts/OnBoardingLayout'
import { useOnBoardingContext } from 'lib/context/onBoarding'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAuth } from 'lib/context/auth'

const Login = () => {
  const { user, signinGoogle, signinFacebook, signout } = useAuth()
  const { form, setForm } = useOnBoardingContext()
  useEffect(() => {
    setForm({ ...form, personalInfo: user })
  }, [user])
  return (
    <>
      <Head>
        <title>Onboarding - QariFinder</title>
        <meta name='description' content='Onboarding QariFinder' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='flex-1 flex justify-center items-center gap-8'>
        <Button onClick={() => signinGoogle()}>Signup google</Button>
        {/* <Button onClick={() => signinFacebook()}>Signup facebook</Button> */}
        {user && <pre className='text-sm'>{JSON.stringify(user, null, 2)}</pre>}
      </section>
      <Link to='/onboarding/acc-type' className='self-center'>
        <BiRightArrowAlt className='w-14 h-14 text-primary'></BiRightArrowAlt>
      </Link>
    </>
  )
}

Login.getLayout = OnboardingLayout

export default Login
