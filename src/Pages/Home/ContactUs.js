import React from 'react';
import bgContact from '../../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <div style={{
            background: `url(${bgContact})`
        }} className='flex justify-center py-12 text-center'>
            <div>
                <h4 className='text-primary uppercase'>Contsct us</h4>
                <h2 className='text-3xl text-white'>Stay Conneted With Us</h2>
                <form>
                    <input type="text" placeholder="Type here" class="mt-10 input w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="my-2 input w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="my-2 h-40 input w-full max-w-xs" />
                </form>
                    <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
            </div>
        </div>
    );
};

export default ContactUs;