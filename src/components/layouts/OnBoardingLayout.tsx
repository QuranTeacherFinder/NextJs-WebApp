import { Button, Link } from 'components/custom'
import { useRouter } from 'next/router'
import { OnboardingProvider, useOnBoardingContext } from 'lib/context/onBoarding'
import { AiOutlineCheck } from 'react-icons/ai'

const OnboardingLayout: React.FC = ({ children }) => {
  const Styles = {
    Container: 'p-8 flex',
    FlexContainer: 'max-w-screen-2xl m-0 sm:m-20 bg-primary shadow-lg flex flex-col lg:flex-row flex-1',
    NavContainer: '',
    FormContainer: 'flex flex-col flex-1 bg-bg shadow-lg rounded-b-lg lg:rounded-l-none lg:rounded-r-lg '
  }
  const router = useRouter()
  // const { form } = useOnBoardingContext()
  const onBoardingPages = [
    { name: 'Account Type', path: '/onboarding' },
    { name: 'Personal info', path: '/onboarding/personal-info' }
  ]
  const currPath = router.pathname
  return (
    <>
      <Link to='/' className='fixed top-0 left-0'>
        <h2 className=''>QariFinder</h2>
      </Link>
      <nav className='space-x-4 fixed left-0 right-0 top-0 h-0 text-center pt-4'>
        {onBoardingPages.map((formPage, i) => (
          <Link to={formPage.path} key={formPage.path}>
            <Button type={`${currPath === formPage.path ? 'primary' : 'primary-i'}`}>
              {formPage.name}
              {/* {form. && <AiOutlineCheck className='text-red-700 inline ml-2' />} */}
            </Button>
          </Link>
        ))}
      </nav>
      <main id='OnboardingLayout' className={Styles.Container}>
        {children}
      </main>
    </>
  )
}

export default OnboardingLayout
