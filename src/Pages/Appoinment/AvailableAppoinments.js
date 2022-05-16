import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Looding from '../Shared/Looding';
import AppoinmentService from './AppoinmentService';
import BookingModal from './BookingModal';

const AvailableAppoinments = ({ date }) => {
    const [treatment, setTreatment] = useState(null)
    const formatedDate = format(date, 'PP');
    const { isLoading, refetch, data: services } = useQuery(['available', formatedDate], () =>
        fetch(`http://localhost:5000/available?date=${formatedDate}`)
            .then(res => res.json())
    )
    if (isLoading) {
        return <Looding></Looding>
    }
    return (
        <div>
            <p className='text-2xl text-secondary text-center'>Available date :{format(date, 'PP')}.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    services?.map(service => <AppoinmentService
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></AppoinmentService>)
                }
            </div>
            {
                treatment && <BookingModal date={date} treatment={treatment} refetch={refetch} setTreatment={setTreatment}></BookingModal>
            }

        </div>

    );
};

export default AvailableAppoinments;