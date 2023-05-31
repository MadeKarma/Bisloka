import '../css/style.css'
import AboutUs from '../component/AboutUs'
import Contact from '../component/Contact'
import DirectSearch from '../component/DirectSearch'
import Feedback from '../component/Feedback'
import HeroSec from '../component/HeroSec'
import Navbar from '../component/Navbar'
import OurFleet from '../component/OurFleet'
import Footer from '../component/Footer'

const Home = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar />
      {/* header sections */}
      <HeroSec />
      {/* Direct Search */}
      <DirectSearch />
      {/* About */}
      <AboutUs />
      {/* Our Fleet */}
      <OurFleet />
      {/* Feedback costumer */}
      <Feedback />
      {/* Contact */}
      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home