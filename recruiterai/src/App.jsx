import Hero from './components/Hero'
import TrustSection from './components/TrustSection'
import Flowcharts from './components/Flowcharts'
import Metrics from './components/Metrics'
import Platforms from './components/Platforms'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-shell">
      <Hero />
      <TrustSection />
      <Flowcharts />
      <Metrics />
      <Platforms />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default App
