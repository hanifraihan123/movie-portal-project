import { Carousel } from "@coreui/coreui"
import Banner from "./Components/Banner"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import Statistics from "./Components/Statistics"
import Featured from "./Components/Featured."
import Latest from "./Components/Latest"

function Home() {

  return (
    <>
     <Navbar></Navbar>
     <Banner></Banner>
     <Featured></Featured>
     <Latest></Latest>
     <Statistics></Statistics>
     <Footer></Footer>
    </>
  )
}

export default Home
