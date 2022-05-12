import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-120px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 px-12'>
                <h3 className='text-xl text-primary font-bold uppercase'>Appointment</h3>
                <h2 className='text-3xl text-white py-1'>Make an Appointment Today.</h2>
                <p className='text-white text-justify pb-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet quas totam culpa architecto cumque accusantium at libero dolor laborum natus qui inventore autem perferendis itaque sint quam blanditiis, alias ut? Nemo quibusdam veritatis aperiam nihil nostrum similique alias accusantium saepe?</p>
                <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
            </div>
        </section>
    );
};

export default MakeAppointment;