import React, { PropTypes } from 'react';

const propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

function Picker({ value, onChange, options }) {
    return (
        <span>
            <h1>{value}</h1>
            <select onChange={e => onChange(e.target.value)}>
                {options.map(option =>
                    <option key={option} value={option}>
                        {option}
                    </option>)
                }
            </select>
        </span>
    );
}

Picker.propTypes = propTypes;
export default Picker;
