import { Hero, Features, MainFeatures, Pricing, Testimonials, FAQ, GetStarted } from 'components/landing'
import LandingLayout from 'components/layouts/LandingLayout'
import { LandingPageDetails } from 'public/LandingDeatils'
import Head from 'next/head'
import { withPageAuthToDash } from 'lib/middleware/pageMiddleware'
import { GetServerSidePropsContext } from 'next'

const Home = () => {
  return (
    <>
      <Head>
        <title>QuranTeacher Finder</title>
        <meta name='description' content='QuranTeacher Finder landing page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero {...LandingPageDetails.Hero} />
      <Features {...LandingPageDetails.Features} />
      <MainFeatures {...LandingPageDetails.MainFeatures} />
      <Pricing {...LandingPageDetails.Pricing} />
      <Testimonials {...LandingPageDetails.Testimonials} />
      <FAQ {...LandingPageDetails.FAQ} />
      <GetStarted {...LandingPageDetails.GetStarted} />
    </>
  )
}

export const getServerSideProps = withPageAuthToDash((ctx: GetServerSidePropsContext) => {
  return { props: {} }
})

Home.getLayout = LandingLayout

export default Home
