import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Filters = ({ filters, setFilters }) => {
    const [options, setOptions] = useState({
        end_year: [],
        topic: [],
        sector: [],
        region: [],
        pestle: [],
        source: [],
        swot: [],
        country: [],
        city: []
    });

    useEffect(() => {
        axios.get('http://localhost:5000/api/filters/filter-options')
            .then(response => setOptions(response.data))
            .catch(error => console.error('Error fetching filter options', error));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="filters">
            {Object.keys(options).map(key => (
                <label key={key}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}:
                    <select
                        name={key}
                        value={filters[key] || ''}
                        onChange={handleChange}
                    >
                        <option value="">All</option>
                        {options[key].map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </select>
                </label>
            ))}
        </div>
    );
};

export default Filters;
