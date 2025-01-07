import reviewLogo from '../assets/reviews.jpg';
import reviewLogo2 from '../assets/review2.avif';
import reviewLogo3 from '../assets/review3.jpg';
import reviewLogo4 from '../assets/review4.jpg';
import reviewLogo5 from '../assets/review5.webp';
import reviewLogo6 from '../assets/review6.jpg';
import reviewLogo7 from '../assets/review7.jpg';
import reviewLogo8 from '../assets/review8.jpg';


const HappyClient = () => {
    return (
        <div className='bg-pink-300 pb-6'>
            <h3 className="text-center font-bold text-3xl py-6">Our Happy Clients Reviews</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:ml-8 ml-24 md:ml-16'>
                    <img className='h-64 object-cover' src={reviewLogo} alt="" />
                    <img className='h-64 object-cover' src={reviewLogo2} alt="" />
                    <img className='h-64 object-cover' src={reviewLogo3} alt="" />
                    <img className='h-64 object-cover' src={reviewLogo4} alt="" />
                    <img className='h-64 object-cover' src={reviewLogo5} alt="" />
                    <img className='h-64 object-cover' src={reviewLogo6} alt="" />
                    <img className='h-64 object-cover' src={reviewLogo7} alt="" />
                    <img className='h-64 object-cover' src={reviewLogo8} alt="" />
                </div>
                <div>
                </div>
            </div>
    );
};

export default HappyClient;