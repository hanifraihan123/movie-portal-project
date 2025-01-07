import { Helmet } from "react-helmet";
import Footer from "./Footer";
import Navbar from "./Navbar";


const ContactUs = () => {
    return (
        <div className="bg-red-200">
      <Helmet>
        <title>Movie Portal || Contact</title>
      </Helmet>
            <Navbar></Navbar>
            <img className="mx-auto items-center py-6 pt-24" src="https://i.ibb.co.com/BVjdGVm/gradient-contact-us-landing-page-with-operator-desk-23-2148270613.jpg" alt="" />
            <Footer></Footer>
        </div>
    );
};

export default ContactUs;