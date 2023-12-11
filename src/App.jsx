import About from "./components/About"
import Banner from "./components/Banner"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"


function App() {



  return (
    <div >
      <Navbar />
      <div className="px-5">
        <Banner />
        <About/>
        <Contact/>
      </div>
      <Footer />
    </div>
  )
}

export default App
