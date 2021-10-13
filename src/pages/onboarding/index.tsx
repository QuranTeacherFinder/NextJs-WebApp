import Head from 'next/head'
import { Button, Link } from 'components/custom'
import { BiRightArrowAlt } from 'react-icons/bi'
import OnboardingLayout from 'components/layouts/OnBoardingLayout'
import { useOnBoardingContext } from 'lib/context/onBoarding'
import { useRouter } from 'next/router'

const Login = () => {
  const router = useRouter()
  const { setForm } = useOnBoardingContext()
  const AccTypeHandler = (type: 'Teacher' | 'Parent' | 'Student' | null) => {
    setForm({
      accType: type
    })
    router.push('/onboarding/personal-info')
  }
  return (
    <>
      <Head>
        <title>Onboarding - QariFinder</title>
        <meta name='description' content='Onboarding QariFinder' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* <Button>Back</Button> */}
      <section className='flex-1 flex justify-center items-center gap-8'>
        <Button onClick={() => AccTypeHandler('Teacher')}>Teacher</Button>
        <Button onClick={() => AccTypeHandler('Parent')}>Parent</Button>
        <Button onClick={() => AccTypeHandler('Student')}>Student</Button>
      </section>
      <Link to='/onboarding/personal-info' className='self-center'>
        <BiRightArrowAlt className='w-14 h-14 text-primary'></BiRightArrowAlt>
      </Link>
    </>
  )
}

Login.getLayout = OnboardingLayout

export default Login
