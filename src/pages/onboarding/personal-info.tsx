import Head from 'next/head'
import { useAuth } from 'lib/context/auth'
import { Button, Link } from 'components/custom'
import OnboardingLayout from 'components/layouts/OnBoardingLayout'
import { useOnBoardingContext } from 'lib/context/onBoarding'
import { useEffect } from 'react'
import { BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi'

const PersonalInfo = () => {
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
      <Link to='/onboarding' className='self-center'>
        <BiLeftArrowAlt className='w-14 h-14 text-primary'></BiLeftArrowAlt>
      </Link>
      <section className='flex-1 flex justify-center items-center gap-8'>
        <Button onClick={() => signinGoogle()}>Signup google</Button>
        {/* <Button onClick={() => signinFacebook()}>Signup facebook</Button> */}
        {/* <Button onClick={() => signout()}>Logout</Button> */}
        {user && <div>{JSON.stringify(user.displayName)}</div>}
        {JSON.stringify(form?.accType)}
      </section>
      <Link to='/onboarding/personal-info' className='self-center'>
        <BiRightArrowAlt className='w-14 h-14 text-primary'></BiRightArrowAlt>
      </Link>
    </>
  )
}

PersonalInfo.getLayout = OnboardingLayout

export default PersonalInfo
