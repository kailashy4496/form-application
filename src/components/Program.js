import React from 'react';
import '../styles/box.css';

import FormPlan from '../components/FormPlan';


const Program = () => {
    return (
        <div className='all-sec'>
            <div className='sel-class'>
                <h3>Applied for:</h3>
                <div className='pro-bx'>
                    <div className='bx'>
                        <input type='checkbox' id='program1' name='class' value='class6' />
                        <span>6th Class</span>
                    </div>
                    <div className='bx'>
                        <input type='checkbox' id='program2' name='class' value='class7' />
                        <span>7th Class</span>
                    </div>
                    <div className='bx'>
                        <input type='checkbox' id='program3' name='class' value='class8' />
                        <span>8th Class</span>
                    </div>
                    <div className='bx'>
                        <input type='checkbox' id='program4' name='class' value='class9' />
                        <span>9th Class</span>
                    </div>
                    <div className='bx'>
                        <input type='checkbox' id='program5' name='class' value='class10' />
                        <span>10th Class</span>
                    </div>
                </div>
            </div>
            <div className='appliction-form'>
                <FormPlan />
            </div>
        </div>
    )
}

export default Program;
