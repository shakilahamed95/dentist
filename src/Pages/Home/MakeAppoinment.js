
import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white py-4'>Make an Appointment Today</h2>
                <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente earum ab cupiditate autem accusantium expedita sequi, temporibus, aut illo doloribus quaerat explicabo, assumenda consectetur est vel ad sed maiores doloremque consequatur. Amet consequuntur quibusdam autem, quod maxime qui itaque quaerat.</p>
                <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-primary to-secondary mt-5">Get Started</button>
            </div>
        </section>
    );
};

export default MakeAppointment;