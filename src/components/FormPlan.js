import React, { useEffect, useState } from 'react';
import '../styles/form.css';
import { SelectDropdown } from './common';

const FormPlan = () => {
    const initialValues = {
        fName: "",
        mName: "",
        lName: "",
        faName: "",
        miName: "",
        laName: "",
        occupation: "",
        dob: "",
        email: "",
        address: "",
        city: "",
        state: "",
        pinCode: "",
        phone: "",
        qualification: "",
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);


    const handleChange = (e) => {
        console.log(e.target);
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors])
    const validate = (values) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.fName) {
            errors.fName = "First Name is required!";
        }
        if (!values.mName) {
            errors.mName = "Middle Name is required!";
        }
        if (!values.lName) {
            errors.lName = "Last Name is required!";
        }
        if (!values.faName) {
            errors.faName = "First Name is required!";
        }
        if (!values.miName) {
            errors.miName = "Middle Name is required!";
        }
        if (!values.laName) {
            errors.laName = "Last Name is required!";
        }
        if (!values.occupation) {
            errors.occupation = "Occupation is required!";
        }
        if (!values.dob) {
            errors.dob = "Date of Birth is required!";
        }

        if (!values.email) {
            errors.email = "Email is required!";
        } else if (regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }

        if (!values.address) {
            errors.address = "Address is required!";
        }
        if (!values.city) {
            errors.city = "City is required!";
        }
        if (!values.state) {
            errors.state = "State is required!";
        }
        if (!values.pinCode) {
            errors.pinCode = "Zip Code is required!";
        }
        if (!values.phone) {
            errors.phone = "Phone is required!";
        }
        if (!values.qualification) {
            errors.qualification = "Qualification is required!";
        }
        return errors;
    };

    return (
        <div className='formPlan'>
            <form onSubmit={handleSubmit}>
                <div className='candidate-name'>
                    <div className='app-name'>
                        <label>Full Name of Applicant</label>
                    </div>
                    <div className='form-input'>
                        <div className='name'>
                            <input
                                type='text'
                                name='fName'
                                placeholder='First'
                                value={formValues.fName}
                                onChange={handleChange}
                            />
                            <p className='colors'>{formErrors.fName}</p>
                        </div>
                        <div className='name'>
                            <input
                                type='text'
                                name='mName'
                                placeholder='Middle'
                                value={formValues.mName}
                                onChange={handleChange}
                            />
                            <p className='colors'>{formErrors.mName}</p>
                        </div>
                        <div className='name'>
                            <input
                                type='text'
                                name='lName'
                                placeholder='Last'
                                value={formValues.lName}
                                onChange={handleChange}
                            />
                            <p className='colors'>{formErrors.lName}</p>
                        </div>
                    </div>
                </div>
                <div className='parent-name'>
                    <div className='app-name'>
                        <label>Parent / Guardian's Name</label>
                    </div>
                    <div className='form-input'>
                        <div className='name'>
                            <input
                                type='text'
                                name='faName'
                                placeholder='First'
                                value={formValues.faName}
                                onChange={handleChange}
                            />
                            <p className='colors'>{formErrors.faName}</p>
                        </div>
                        <div className='name'>
                            <input
                                type='text'
                                name='miName'
                                placeholder='Middle'
                                value={formValues.miName}
                                onChange={handleChange}
                            />
                            <p className='colors'>{formErrors.miName}</p>
                        </div>
                        <div className='name'>
                            <input
                                type='text'
                                name='laName'
                                placeholder='Last'
                                value={formValues.laName}
                                onChange={handleChange}
                            />
                            <p className='colors'>{formErrors.laName}</p>
                        </div>
                    </div>
                </div>

                <div className='occupation'>
                    <div className='app-name'>
                        <label>Parent / Guardian's Occupation</label>
                    </div>
                    <div className='name'>
                        <input
                            type='text'
                            name='occupation'
                            placeholder='Occupation'
                            value={formValues.occupation}
                            onChange={handleChange}
                            className=''
                        />
                    </div>
                    <p className='colors'>{formErrors.occupation}</p>
                </div>
                <div className='date-of-birth'>
                    <div className='app-name'>
                        <label>Date of birth</label>
                    </div>
                    <div className='name'>
                        <input
                            type='date'
                            name='dob'
                            placeholder=''
                            value={formValues.dob}
                            onChange={handleChange}
                        />
                    </div>
                    <p className='colors'>{formErrors.dob}</p>
                </div>

                <div className='email'>
                    <div className='app-name'>
                        <label>Email</label>
                    </div>
                    <div className='name'>
                        <input
                            type='email'
                            name='email'
                            placeholder='Email'
                            value={formValues.email}
                            onChange={handleChange}
                        />
                    </div>
                    <p className='colors'>{formErrors.email}</p>
                </div>
                <div className='address'>
                    <div className='app-name'>
                        <label>Permanent Address</label>
                    </div>
                    <div className='address-form-input'>
                        <div className='street'>
                            <input
                                type='text'
                                name='address'
                                placeholder='Street Address'
                                value={formValues.address}
                                onChange={handleChange}
                            />
                            <p className='colors'>{formErrors.address}</p>
                        </div>
                        <div className='street'>
                            <input
                                type='text'
                                name='city'
                                placeholder='City'
                                value={formValues.city}
                                onChange={handleChange}
                            />
                            <p className='colors'>{formErrors.city}</p>
                        </div>
                    </div>

                    <div className="address-form-input">
                        <div className='street option'>
                            <SelectDropdown
                                options={[
                                    { label: "Andaman & Nicobar Islands", value: "AAN" },
                                    { label: "Andhra Pradesh", value: "ANDH" },
                                    { label: "Arunachal Pradesh", value: "ARUN" },
                                    { label: "Assam", value: "ASSM" },
                                    { label: "Bihar", value: "BIHA" },
                                    { label: "Chandigarh", value: "CHAN" },
                                    { label: "Chattisgarh", value: "CHHA" },
                                    { label: "Dadra & Nagar Haveli", value: "DNH" },
                                    { label: "Daman & Diu", value: "DAD" },
                                    { label: "Delhi", value: "DELH" },
                                    { label: "Goa", value: "GOA" },
                                    { label: "Gujarat", value: "GUJA" },
                                    { label: "Haryana", value: "HARY" },
                                    { label: "Himachal Pradesh", value: "HP" },
                                    { label: "Jammu & Kashmir", value: "JAK" },
                                    { label: "Jharkhand", value: "JHAR" },
                                    { label: "Karnataka", value: "KARN" },
                                    { label: "Kerala", value: "KERA" },
                                    { label: "Lakshadweep", value: "LAKS" },
                                    { label: "Madhya Pradesh", value: "MP" },
                                    { label: "Maharashtra", value: "MAHA" },
                                    { label: "Manipur", value: "MANI" },
                                    { label: "Meghalaya", value: "MEGH" },
                                    { label: "Mizoram", value: "MIZO" },
                                    { label: "Nagaland", value: "NAGA" },
                                    { label: "Odisha", value: "ORIS" },
                                    { label: "Pondicherry", value: "POND" },
                                    { label: "Punjab", value: "PUNJ" },
                                    { label: "Rajasthan", value: "RAJA" },
                                    { label: "Sikkim", value: "SIKK" },
                                    { label: "Tamil Nadu", value: "TN" },
                                    { label: "Telangana", value: "TNG" },
                                    { label: "Tripura", value: "TRIP" },
                                    { label: "Uttar Pradesh", value: "UP" },
                                    { label: "Uttarakhand", value: "UTTD" },
                                    { label: "West Bengal", value: "WB" }
                                ]}
                                name='state'
                                value={formValues.state}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='street'>
                            <input
                                type='text'
                                name='pinCode'
                                placeholder='Postal/Zip Code'
                                value={formValues.pinCode}
                                onChange={handleChange}
                            />
                            <p className='colors'>{formErrors.pinCode}</p>
                        </div>
                    </div>
                </div>

                <div className='contact'>
                    <div className='app-name'>
                        <label>Applicant's Phone</label>
                    </div>
                    <div className='name'>
                        <input
                            type='text'
                            name='phone'
                            placeholder='### ### ####'
                            value={formValues.phone}
                            onChange={handleChange}
                        />
                        <p className='colors'>{formErrors.phone}</p>
                    </div>
                </div>
                <div className='contact'>
                    <div className='app-name'>
                        <label>Parent / Guardian's Phone</label>
                    </div>
                    <div className='name'>
                        <input
                            type='text'
                            name='phone'
                            placeholder='### ### ####'
                            value={formValues.phone}
                            onChange={handleChange}
                        />
                        <p className='colors'>{formErrors.phone}</p>
                    </div>
                </div>
                <div className='qualification'>
                    <div className='app-name'>
                        <label>Academic Qualifications</label>
                    </div>
                    <div className='qualification-field'>
                        <textarea
                            name="qualification"
                            cols="80"
                            rows="6"
                            value={formValues.qualification}
                            onChange={handleChange}
                        >
                        </textarea>
                    </div>
                    <p className='colors'>{formErrors.qualification}</p>
                </div>
                <div className='col-btn'>
                    <button className='btn'>Submit Form</button>
                </div>
            </form >
        </div>

    )
}

export default FormPlan;
