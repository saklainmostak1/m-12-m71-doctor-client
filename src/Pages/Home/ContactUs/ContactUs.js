import React from 'react';
import PrimaryBtn from '../../../components/PrimaryBtn/PrimaryBtn';
import appointment from '../../../assets/images/appointment.png'

const ContactUs = () => {
    return (
        <div className='mt-32 p-10' 
        style={{
            background: `url(${appointment})`
        }}
        >
            <div className='grid justify-center mb-8'>
                <h2 className='text-xl text-primary font-bold '>Contact Us</h2>
                <h1 className='text-3xl text-white'>Stay Connected With Us</h1>
            </div>
            <form className='grid justify-center'>
                <div className='grid grid-cols-1 gap-4'>
                    <input name='name' type="text" placeholder="Your Name" className="input input-bordered input-success " required />
                    <input name='email' type="email" placeholder="email" className=" input input-bordered input-success  " />
                
                <textarea name='message' className="textarea textarea-info mt-5 h-28 mb-5" placeholder="Send Your Message" required></textarea>
               <PrimaryBtn>Send Review</PrimaryBtn>
                </div>
            </form>
        </div>
    );
};

export default ContactUs;