import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import './OfferStateSelect.css'

const OfferStateSelect = ({ valueOfferState, onChange }) => {
    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Offer State</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={valueOfferState}
                label="Offer State"
                onChange={onChange}
            >
                <MenuItem value={"All"}>All</MenuItem>
                <MenuItem value={"Open"}>Open</MenuItem>
                <MenuItem value={"Suspended"}>Suspended</MenuItem>
                <MenuItem value={"Close"}>Close</MenuItem>
            </Select>
        </FormControl>
    );
}


export default OfferStateSelect

