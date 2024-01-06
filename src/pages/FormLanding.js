import React from 'react';
import '../styles/page.css';
import { FaBookOpen } from 'react-icons/fa';

import Program from '../components/Program';
// import FormPlan from '../components/FormPlan';

const FormLanding = () => {
    return (
        <div className='form-landing'>
            <div className='class-form'>
                <div className='heading'>
                    <FaBookOpen color='white' />
                    <h1>Admission Application Form</h1>
                    <FaBookOpen color='white' />
                </div>
                <p className='paragraph'>If you'd like to our Classes, please fill in this Coaching Classes Admission Form and we will contact you as soon as possible.</p>
                <div className='cl-form'>
                    <Program />
                </div>
            </div>
        </div>
    )
}

export default FormLanding;
