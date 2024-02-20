import { useEffect } from "react"
import About from "./components/About"
import Banner from "./components/Banner"
import Contact from "./components/Contact"
import Educations from "./components/Educations"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
import Tools from "./components/Tools"
import Projects from "./components/projects"
import Aos from "aos"
import "aos/dist/aos.css"
import Achievement from "./components/Achievement"
import MessengerCustomerChat from 'react-messenger-customer-chat';

function App() {

  useEffect(() => {
    Aos.init();
  }, [])
 
  return ( 
    <div > 
      <MessengerCustomerChat 
        pageId="<218456764676563>" 
        appId="<343438875131861>" 
        // htmlRef="<REF_STRING>" 
      />,  
      <Navbar /> 
      <Banner /> 
      <div className=" px-2 md:px-20 overflow-hidden"> 
        <About />
        <Skills />
        <Projects />
        <Educations />
        <Experience />
        <Achievement />
        <Tools />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App
