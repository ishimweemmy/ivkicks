import { MenuItem, OutlinedInput, SelectChangeEvent, TextField, Select, FormControl, FormControlLabel } from "@mui/material"
import { SetStateAction, useEffect, useState } from "react";
import VisitorAPI from 'visitorapi';
import FTextField from "../../FormComponents/FTextField";
import { Checkbox } from "@material-ui/core";

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

const fetchCountries = async () => {
    return new Promise((resolve, reject) => {
        resolve(fetch('https://restcountries.com/v3.1/all').then(data => data.json()));
        reject(() => console.log("failed to fetch..."))
    })
}


const Address = () => {
    const [country, setCountry] = useState<string>("");
    const [countries, setCountries] = useState<any>([]);
    const [saveDInfo, setSaveDInfo] = useState(false)

    const handleSaveDInfo = () => setSaveDInfo(prev => !prev)

    useEffect(() => {
        fetchCountries().then(res => setCountries(res));
        VisitorAPI('OH1CA2yn2CodfSiBnRIo', (data: any) => {
            setCountry(data.countryName)
        })
    }, [])

    const handleChange = (event: SelectChangeEvent<typeof country>) => {
        const {
            target: { value },
        } = event;
        setCountry(value);
    };

    return (
        <div className="w-full h-full flex flex-col items-center gap-4 xlssm:w-[90%] xMiniTablet:mt-[5rem]">
            <FTextField label="Email" />
            <div className="w-full h-fit flex gap-2">
                <FTextField label="First name" />
                <FTextField label="Last name" />
            </div>
            <FTextField label="Adress 1" />

            <FormControl fullWidth className="tableLr:col-span-2">
                <Select
                    value={country}
                    onChange={handleChange}
                    input={<OutlinedInput />}
                    MenuProps={MenuProps}
                >
                    {countries?.map((cname: any) => (
                        <MenuItem
                            key={cname.name.common}
                            value={cname.name.common}
                            className="w-full flex justify-center items-center gap-4"
                        >
                            <span className="w-fit text-white">{cname.flag}</span>
                            <span className="w-fit text-black">{cname.name.common}</span>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <div className="w-full flex gap-4">
                <Select
                    value={country}
                    onChange={handleChange}
                    input={<OutlinedInput />}
                    MenuProps={MenuProps}
                    className="w-full"
                >
                    {countries?.map((cname: any) => (
                        <MenuItem
                            key={cname.name.common}
                            value={cname.name.common}
                            className="w-full flex justify-center items-center gap-4"
                        >
                            <span className="w-fit text-white">{cname.flag}</span>
                            <span className="w-fit text-black">{cname.name.common}</span>
                        </MenuItem>
                    ))}
                </Select>
                <FTextField label="ZIP" type="number" />
            </div>
            <div className="w-full h-fit flex gap-4">
                <FTextField label="State" />
                <FTextField label="Apt/suite" />
            </div>
            <FormControlLabel
                label="Save information for delivery"
                className="w-full"
                control={
                    <Checkbox
                        defaultChecked
                        checked={saveDInfo}
                        color="primary"
                        size="small"
                        onChange={handleSaveDInfo}
                    />
                }
            />
        </div>
    );
}

export default Address;