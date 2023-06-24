import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import './OrderByRatingSelect.css'

const OrderByRatingSelect = ({ valueJobType, onChange }) => {
    return (
        <FormControl fullWidth>
            <InputLabel id="orderByRatingSelect-label"></InputLabel>
            <Select
                labelId="orderByRatingSelect-label"
                id="orderByRatingSelect-select"
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


export default OrderByRatingSelect

