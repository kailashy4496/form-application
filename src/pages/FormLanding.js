import React from 'react';
import '../styles/page.css';

import Program from '../components/Program';
// import FormPlan from '../components/FormPlan';

const FormLanding = () => {
    return (
        <div className='form-landing'>
            <div className='class-form'>
                <div className='heading'>
                    <h1>Coaching Classes Admission Form</h1>
                    <p>If you'd like to our Classes, please fill in this Coaching Classes Admission Form and we will contact you as soon as possible.</p>
                </div>
                <div className='cl-form'>
                    <Program />
                </div>
            </div>
        </div>
    )
}

export default FormLanding;
