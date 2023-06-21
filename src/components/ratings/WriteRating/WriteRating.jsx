import Rating from '@mui/material/Rating';
import { useState } from 'react';

const WriteRating = () => {
    const [value, setValue] = useState(0);

    return (
        <div>
            <Rating
                name="simple Rating component"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
        </div>
    );
}

export default WriteRating