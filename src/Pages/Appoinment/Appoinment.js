import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import AppoinmentBanner from './AppoinmentBanner';
import AvailableAppoinments from './AvailableAppoinments';

const Appoinment = () => {
    const [date, setdate] = useState(new Date())
    return (
        <div>
            <AppoinmentBanner date={date} setdate={setdate}></AppoinmentBanner>
            <AvailableAppoinments date={date}></AvailableAppoinments>
            <Footer></Footer>
        </div>
    );
};

export default Appoinment;