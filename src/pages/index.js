import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import WelcomeContainer from '../components/WelcomeContainer'
import NewsContainer from '../components/NewsContainer'
import IntroContainer from '../components/IntroContainer'
import PreviewContainer from '../components/PreviewContainer'
import ImpressionsContainer from '../components/ImpressionsContainer'
import OKContainer from '../components/OKContainer'
import ContactForm from '../components/ContactForm'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <WelcomeContainer/>
    <NewsContainer/>
    <IntroContainer/>
    <PreviewContainer/>
    <OKContainer/>
    <ImpressionsContainer/>
    <ContactForm/>
  </Layout>
)

export default IndexPage
