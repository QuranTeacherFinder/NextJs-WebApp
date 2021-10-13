import { ThemeProvider } from 'next-themes'
import { AuthProvider } from './auth'
import AppWrapper from 'components/layouts/AppWrapper'
import { OnboardingProvider } from './onBoarding'

interface props {
  layout:
    | {
        name: 'OnboardingLayout'
      }
    | undefined
}
const EmptyProvider: React.FC = ({ children }) => {
  return <>{children}</>
}
const RootContext: React.FC<props> = ({ children, layout }) => {
  const PageProvider = layout?.name === 'OnboardingLayout' ? OnboardingProvider : EmptyProvider
  return (
    <AuthProvider>
      <PageProvider>
        <ThemeProvider attribute='class'>
          <AppWrapper>{children}</AppWrapper>
        </ThemeProvider>
      </PageProvider>
    </AuthProvider>
  )
}

export default RootContext
