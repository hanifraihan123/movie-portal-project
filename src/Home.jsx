import { Carousel } from "@coreui/coreui"
import Banner from "./Components/Banner"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import Statistics from "./Components/Statistics"
import Featured from "./Components/Featured."
import Latest from "./Components/Latest"
import { useLoaderData } from "react-router-dom"
import ExtraSection from "./Components/ExtraSection"
import { Helmet } from "react-helmet"
import HappyClient from "./Components/HappyClient"

function Home() {

  const movies = useLoaderData();

  return (
    <div className="bg-pink-100">
      <Helmet>
        <title>Movie Portal || Home</title>
      </Helmet>
     <Navbar></Navbar>
     <div className="pt-16">
     <Banner></Banner>
     <Featured key={movies._id} movies={movies}></Featured>
     <Latest></Latest>
     <Statistics></Statistics>
     <ExtraSection></ExtraSection>
     <HappyClient></HappyClient>
     <Footer></Footer>
     </div>
    </div>
  )
}

export default Home
