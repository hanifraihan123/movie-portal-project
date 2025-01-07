import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
               <nav className='flex gap-4'>
               <img className='h-12 w-10 rounded-full' src="https://i.ibb.co.com/8K2SHKC/images-1.jpg" alt="" />
               <h3 className='font-bold text-xl text-center'>Movie Portal Industries Ltd.</h3>
               </nav>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a href='https://www.youtube.com/'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
      <a href='https://www.facebook.com/hanifraihanctg/?viewas=&should_open_composer=false&show_switched_toast=false&show_invite_to_follow=false&show_switched_tooltip=false&show_podcast_settings=false&show_community_review_changes=false&show_community_rollback=false&show_follower_visibility_disclosure=false&bypass_exit_warning=true'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div>
  </nav>
  <nav className="grid grid-flow-col gap-4">
    <Link to="/"><a className="link link-hover">Home</a></Link>
    <Link to={'/contactus'}><a className="link link-hover">Contact</a></Link>
  </nav>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Movie Portal Ltd</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;