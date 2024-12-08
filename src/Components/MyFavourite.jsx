import Footer from "./Footer";
import Navbar from "./Navbar";

const MyFavourite = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h3 className="my-4 font-bold text-2xl text-center">My Favoureite Movies Here</h3>
      <div className="card card-compact justify-center my-8 mx-auto bg-base-100 w-96 shadow-xl">
        <figure>
          <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Delete Favourite</button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MyFavourite;
