import { Carousel } from "@coreui/coreui"
import Banner from "./Components/Banner"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import Statistics from "./Components/Statistics"
import Featured from "./Components/Featured."
import Latest from "./Components/Latest"
import { useLoaderData } from "react-router-dom"

function Home() {

  const movies = useLoaderData();

  return (
    <div className="bg-gray-300">
     <Navbar></Navbar>
     <Banner></Banner>
     <Featured key={movies._id} movies={movies}></Featured>
     <Latest></Latest>
     <Statistics></Statistics>
     <Footer></Footer>
    </div>
  )
}

export default Home
