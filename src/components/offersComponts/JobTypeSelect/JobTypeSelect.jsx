import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
//import { useState, useEffect } from 'react';
import './JobTypeSelect.css'

const JobTypeSelect = ({ valueJobType, onChange }) => {
    // const [jobType, setJobType] = useState('');

    // const handleChange = (event) => {
    //     setJobType(event.target.value);
    // };

    // useEffect(() => {
    //     console.log("JobTypeSelect --> JobType", jobType)
    // }, [jobType]);

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Job Type</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                //value={jobType}
                value={valueJobType}
                label="Job Type"
                onChange={onChange}
            >
                <MenuItem value={"All"}>All</MenuItem>
                <MenuItem value={"Remote"}>Remote</MenuItem>
                <MenuItem value={"Office"}>Office</MenuItem>
                <MenuItem value={"Hybrid"}>Hybrid</MenuItem>
            </Select>
        </FormControl>
    );
}


export default JobTypeSelect

