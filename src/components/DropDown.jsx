import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const DropDown = ({
    label,
    id, 
    value,
    handleChange,
    name, 
    options,
    ...props
}) => {
    return (
        <FormControl>
            <InputLabel id={id}>{label}</InputLabel>
            <Select
                labelId={id}
                id={id}
                value={value}
                label={label}
                onChange={handleChange}
                name={name}
                {...props}
            >
                {
                    options.map(option => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    );
};

export default DropDown;
