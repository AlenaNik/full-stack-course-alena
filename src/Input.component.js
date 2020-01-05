import React from 'react';

const Input = ({ setFilter }) => {
    const handleFilterChange = e => {
        const inputfilter = e.target.value;
        setFilter(inputfilter);
    }
    return (
        <div>
            find countries <input
            onChange={handleFilterChange}
        />
        </div>
    )
}
export default Input
