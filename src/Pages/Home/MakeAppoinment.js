import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appoinment from '../../assets/images/appointment.png'
const MakeAppoinment = () => {
    return (
        <section className='flex justify-center items-center' style={{
            background: `url(${appoinment})`
        }}>
            <div className='flex-1'>
                <img className='mt-[-150px] hidden lg:block' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary'>Appoinment</h3>
                <h2 className='text-3xl text-white'>Make an appoinment today</h2>
                <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, temporibus pariatur. Dolorem rerum ad quibusdam cupiditate perferendis vero nobis odit. Similique reiciendis illo esse laudantium, amet voluptate quas in qui.</p>
                <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-primary to-secondary">Get Started</button>
            </div>

        </section>
    );
};

export default MakeAppoinment;