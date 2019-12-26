import React from 'react';

const Filter = ({filter, setFilter}) => {
    const handleFilterChange = e => {
        const inputFilter = e.target.value;
        setFilter(inputFilter);
    }
    return (
        <div>
            <p>Type to search</p>
            <input value={filter} onChange={handleFilterChange}/>
        </div>
    )
}
export default Filter;
