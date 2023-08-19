import React from "react";

function SelectDropdown({ label, name, options, value, onChange }) {
    return (
        <div className={`title input_content `}>
            <label>{label}</label>
            <select
                id="title"
                name="title"
                defaultValue={value}
                onChange={(e) => onChange(name, e.target.value)}
                value={value}
            >
                <option value="">- Select -</option>
                {options.map((option, index) => (
                    <option key={`${option.label}-${index}`} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {/* {validationSpan} */}
        </div>
    );
}

export default SelectDropdown;
