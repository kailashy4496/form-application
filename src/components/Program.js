import React from 'react';
import '../styles/box.css';

import FormPlan from '../components/FormPlan';


const Program = () => {
    return (
        <div className='all-sec'>
            <h3 className='section_heading'>Applied for :</h3>
            <div className='pro-box'>
                <div className='box'>
                    <input type='checkbox' id='program1' name='class' value='class6' />
                    <label>6th Class</label>
                </div>
                <div className='box'>
                    <input type='checkbox' id='program2' name='class' value='class7' />
                    <label>7th Class</label>
                </div>
                <div className='box'>
                    <input type='checkbox' id='program3' name='class' value='class8' />
                    <label>8th Class</label>
                </div>
                <div className='box'>
                    <input type='checkbox' id='program4' name='class' value='class9' />
                    <label>9th Class</label>
                </div>
                <div className='box'>
                    <input type='checkbox' id='program5' name='class' value='class10' />
                    <label>10th Class</label>
                </div>
            </div>
            <div className='application-form'>
                <FormPlan />
            </div>
        </div>
    )
}

export default Program;
