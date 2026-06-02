import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Location from './components/Location'
import Footer from './components/Footer'
import OurStory from './pages/OurStory'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Menu />
            <Location />
            <Footer />
          </>
        } />
        <Route path="/our-story" element={<OurStory />} />
      </Routes>
    </>
  )
}

export default App