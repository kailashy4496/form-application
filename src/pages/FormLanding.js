import React from 'react';
import '../styles/page.css';

import Program from '../components/Program';
import FormPlan from '../components/FormPlan';

const FormLanding = () => {
    return (
        <div className='cl-p-1'>
            <div className='cl-p-2'>
                <div className='cl-p-3'>
                    <h1>International College Admission Form</h1>
                    <h4>If you'd like to our college, please fill in this College Admission Form and we will contact you as soon as possible.</h4>
                </div>
                <div className='cl-form'>
                    <Program />
                    <FormPlan />
                </div>
            </div>
        </div>
    )
}

export default FormLanding;
