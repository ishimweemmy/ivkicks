import { MenuItem, OutlinedInput, SelectChangeEvent, TextField, Select, FormControl } from "@mui/material"
import { useEffect, useState } from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const Address = () => {
    const [country, setCountry] = useState<string[]>([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=flag,name').then(data => data.json()).then(res => setCountry(res))
    }, [])

    const handleChange = (event: SelectChangeEvent<typeof country>) => {
        const {
            target: { value },
        } = event;
        setCountry(typeof value === "string" ? value.split(",") : value);
    };

    return (
        <div className="w-full h-full flex flex-col items-center gap-2">
            <TextField
                label="Email"
                variant="outlined"
                className="w-full text-white"
                InputLabelProps={{ style: { color: "rgb(10,8,58)" } }}
            />
            <div className="w-full h-fit flex gap-2">
                <TextField
                    label="Name"
                    variant="outlined"
                    className="w-full text-white"
                    InputLabelProps={{ style: { color: "rgb(10,8,58)" } }}
                />
                <TextField
                    label="Last name"
                    variant="outlined"
                    className="w-full text-white"
                    InputLabelProps={{ style: { color: "rgb(10,8,58)" } }}
                />
            </div>
            <TextField
                label="Adress 1"
                variant="outlined"
                className="w-full text-white"
                InputLabelProps={{ style: { color: "rgb(10,8,58)" } }}
            />
            <FormControl fullWidth className="tableLr:col-span-2">
                <Select
                    multiple
                    value={country}
                    onChange={handleChange}
                    input={<OutlinedInput />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                >
                    {country?.map((cname: any) => (
                        <MenuItem
                            key={cname.name.common}
                            value={cname.name.common}
                            className="w-full flex justify-center"
                        >
                            <span className="w-fit text-white">{cname.flag}</span>
                            <span className="w-fit text-black">
                                {cname.name.common}
                            </span>
                        </MenuItem>
                    ))}
                </Select>

            </FormControl>

        </div>
    )
}

export default Address