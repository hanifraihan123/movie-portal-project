import { Link } from 'react-router-dom';
import error from '../assets/404.gif'

const Error = () => {
    return (
        <div>
            <div className='text-center items-center'>
                <h3 className='font-bold text-xl my-8'>Error Code: 404</h3>
                <Link to='/'><button className='btn btn-warning my-4'>Back to Home</button></Link>
                <img className='m-auto h-80' src={error} alt="" />
            </div>
        </div>
    );
};

export default Error;