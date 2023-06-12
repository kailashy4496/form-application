import React from 'react';
import '../styles/box.css';


const Program = () => {
    return (
        <div className=''>
            <div className=''>
                <h3>Program Applied for:</h3>
                <div className='pro-bx'>
                    <div className='bx'>
                        <input type='checkbox' id='program1' name='program1' value='' />
                        <label>Computer Hardware Technician</label>
                    </div>
                    <div className='bx'>
                        <input type='checkbox' id='program2' name='program2' value='' />
                        <label>Computer Network Technician</label>
                    </div>
                    <div className='bx'>
                        <input type='checkbox' id='program3' name='program3' value='' />
                        <label>General Electrician</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Program;
