import React from 'react';

const AppoinmentService = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>{
                    slots.length ? <span>{slots[0]}</span> : <span className='text-red-500'> No sloat available</span>
                }</p>
                <p>{slots.length} spaces available</p>
                <div className="card-actions justify-center">
                    <label for="booking-modal" onClick={() => setTreatment(service)} disabled={slots.length === 0} className="btn btn-secondary uppercase" class="btn modal-button btn btn-secondary uppercase">Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentService;