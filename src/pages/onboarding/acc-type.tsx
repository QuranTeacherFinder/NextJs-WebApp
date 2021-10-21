import Head from 'next/head'
import { useAuth } from 'lib/context/auth'
import { Button, Link } from 'components/custom'
import OnboardingLayout from 'components/layouts/OnBoardingLayout'
import { useOnBoardingContext } from 'lib/context/onBoarding'
import { useEffect } from 'react'
import { BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi'
import { useRouter } from 'next/router'

const PersonalInfo = () => {
  const router = useRouter()
  const { form, setForm } = useOnBoardingContext()
  const AccTypeHandler = (type: 'Teacher' | 'Parent' | 'Student' | null) => {
    setForm({ ...form, accType: type })
    router.push('/onboarding/acc-type')
  }
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
        <Button onClick={() => AccTypeHandler('Teacher')}>Teacher</Button>
        <Button onClick={() => AccTypeHandler('Parent')}>Parent</Button>
        <Button onClick={() => AccTypeHandler('Student')}>Student</Button>
        <pre className='text-sm'>{JSON.stringify(form, null, 2)}</pre>
      </section>
      <Link to='/onboarding/acc-type' className='self-center'>
        <BiRightArrowAlt className='w-14 h-14 text-primary'></BiRightArrowAlt>
      </Link>
    </>
  )
}

PersonalInfo.getLayout = OnboardingLayout

export default PersonalInfo
