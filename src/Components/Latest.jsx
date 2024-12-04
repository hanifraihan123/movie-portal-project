import React from 'react';

const Latest = () => {
    return (
        <div style={{ backgroundImage: `url("https://i.ibb.co.com/DfSSKmy/cool-background-4.png")` }}>
            <h3 className='text-center font-bold text-2xl py-6 text-sky-200'>Our Latest Movies Coming Soon</h3>
            <p className='text-sm text-center text-violet-200 pb-4'>The upcoming Peaky Blinders movie has begun filming in north Wales, with Hollywood star Cillian Murphy spotted on set. <br /> The Oscar-winning actor returns to the role of Tommy Shelby for the upcoming Peaky Blinders film – a continuation of the hit crime drama.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-4 mx-12 px-12'>
                <img className='h-64 rounded-xl' src="https://i.ibb.co.com/kBg4kMF/112218494.webp" alt="" />
                <img className='h-64 rounded-xl' src="https://i.ibb.co.com/0KNSJLk/c104f1bfed20481f35bc96cb9addc940-240x360-crop-center-progressive.jpg" alt="" />
                <img className='h-64 rounded-xl' src="https://i.ibb.co.com/tDS1Nvv/christmas-movies-for-kids-1639008083.jpg" alt="" />
                <img className='h-64 rounded-xl' src="https://i.ibb.co.com/B4QK1wL/1131w-GG58-WASM1-E.webp" alt="" />
                <img className='h-64 rounded-xl' src="https://i.ibb.co.com/MZJrj3S/download.jpg" alt="" />
                <img className='h-64 rounded-xl' src="https://i.ibb.co.com/PTG3mry/small-hollywood-movie-poster-blade-runner-2049-ridley-scott-original-imaf3qvx88xenydd.webp" alt="" />
                <img className='h-64 rounded-xl' src="https://i.ibb.co.com/zhxRbQb/PM1096-US-EA-Alt-1080x1600px-D-R-V1-R1.webp" alt="" />
                <img className='h-64 rounded-xl' src="https://i.ibb.co.com/XkZNh9f/best-action-movies-1675193014.jpg" alt="" />
            </div>
        </div>
    );
};

export default Latest;