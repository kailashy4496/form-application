import React from 'react';
import '../styles/form.css';
// import { SelectDropdown } from './common';

const FormPlan = () => {
    return (
        <div className=''>
            <div className=''>
                <div className='flex'>
                    <h3>Full Name of Applicant</h3>
                    <div className='d-flex'>
                        <div className='col-1'>
                            <div className='col-1-mt'>
                                <input type='text' name='fName' placeholder='First' />
                            </div>
                        </div>
                        <div className='col-1'>
                            <div className='col-1-mt'>
                                <input type='text' name='fName' placeholder='Middle' />
                            </div>
                        </div>
                        <div className='col-1'>
                            <div className='col-1-mt'>
                                <input type='text' name='fName' placeholder='Last' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <h3>Parent / Guardian's Name</h3>
                    <div className='d-flex'>
                        <div className='col-2'>
                            <div className='col-1-mt'>
                                <input type='text' name='fName' placeholder='First' />
                            </div>
                        </div>
                        <div className='col-2'>
                            <div className='col-1-mt'>
                                <input type='text' name='fName' placeholder='Middle' />
                            </div>
                        </div>
                        <div className='col-2'>
                            <div className='col-1-mt'>
                                <input type='text' name='fName' placeholder='Last' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <h3>Parent / Guardian's Occupation</h3>
                    <div className='col-3'>
                        <div className='col-3-pl'>
                            <input type='text' name='' placeholder='Occupation' />
                        </div>
                    </div>
                </div>
                <div className=''>
                    <h3>Date of birth</h3>
                    <div className='col-4'>
                        <div className='col-3-pl'>
                            <input type='date' name='' placeholder='' />
                        </div>
                    </div>
                </div>
                <div className=''>
                    <h3>Email</h3>
                    <div className='col-5'>
                        <div className='col-3-pl'>
                            <input type='email' name='' placeholder='Email' />
                        </div>
                    </div>
                </div>
                <div className=''>
                    <h3>Permanent Address</h3>
                    <div className='d-grid'>
                        <div className='rw-1'>
                            <div className='db-rw-1'>
                                <input type='text' name='' placeholder='Street Address' />
                            </div>
                        </div>
                        <div className='rw-2'>
                            <div className='rw'>
                                <input type='text' name='' placeholder='City' />
                            </div>
                        </div>
                        <div className='rw-3'>
                            <div className='rw'>
                                <input type='text' name='' placeholder='State' />
                            </div>
                        </div>
                        <div className='rw-4'>
                            <div className='rw'>
                                <input type='text' name='' placeholder='Postal/Zip Code' />
                            </div>
                        </div>
                        <div className='rw-5'>
                            <div className='rw'>
                                <select>
                                    <option value='country'>select country</option>
                                    <option value='India'>India</option>
                                    <option value='India'>India</option>
                                    <option value='India'>India</option>
                                    <option value='India'>India</option>
                                </select>
                                {/* <SelectDropdown
                                name="country"
                                options={[
                                    { label: "Afganistan", value: "Afg" },
                                    { label: "Pakistan", value: "Pak" },
                                    { label: "India", value: "Ind" },
                                    { label: "Bangladesh", value: "Bng" },
                                    { label: "Nepal", value: "Npl" },
                                    { label: "China", value: "Chn" },
                                ]}
                            /> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <h3>Applicant's Phone</h3>
                    <div className='col-7'>
                        <div className='col-3-pl'>
                            <input type='text' name='' placeholder='### ### ####' />
                        </div>
                    </div>
                </div>
                <div className=''>
                    <h3>Parent / Guardian's Phone</h3>
                    <div className='col-8'>
                        <div className='col-3-pl'>
                            <input type='text' name='' placeholder='### ### ####' />
                        </div>
                    </div>
                </div>
                <div className=''>
                    <h3>Academic Qualifications</h3>
                    <div className='col-9'>
                        <div className='col-9-tx'>
                            <textarea name="" id="" cols="50" rows="6"></textarea>
                        </div>
                    </div>
                </div>
                <div className='col-btn'>
                    <button className='btn'>Reset Form</button>
                    <button className='btn'>Submit Form</button>
                </div>
            </div>
        </div >
    )
}

export default FormPlan;
