import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import './OfferTypeSelect.css'

const OfferTypeSelect = ({ valueOfferType, onChange }) => {
    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Offer Type</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={valueOfferType}
                label="Offer Type"
                onChange={onChange}
            >
                <MenuItem value={"All"}>All</MenuItem>
                <MenuItem value={"CompanyOffer"}>Company</MenuItem>
                <MenuItem value={"FreelandOffer"}>Freeland</MenuItem>
            </Select>
        </FormControl>
    );
}


export default OfferTypeSelect

