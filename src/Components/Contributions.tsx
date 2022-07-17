import React, {useState} from 'react';
import '../App.css';
import {Autocomplete, Box, Checkbox, InputAdornment, SelectChangeEvent, TextField, Typography} from "@mui/material";
import {CONTRIBUTIONS} from "../Data/Contributions";
import {Contribution} from "./Contribution";
import {ALL_TOOLS} from "../Data/TOOLS";
import {
    CheckBox as CheckBoxIcon,
    CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon,
    Search as SearchIcon
} from "@mui/icons-material";
import {ToolData} from "../Models/ToolData";
import {ToolDataGroupEnum} from "../Enums/ToolDataGroupEnum";

export const Contributions = () => {
    const [filterTools, setFilterTools] = useState<ToolData[]>([]);
    var contributions = Object.values(CONTRIBUTIONS);
    const [age, setAge] = React.useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
    return (
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
            <Typography variant="h2">
                Contributions
            </Typography>
            <Autocomplete
                sx={{width: "550px", marginY: "24px"}}
                disablePortal
                value={filterTools}
                onChange={(event, newValue) => {
                    setFilterTools(newValue)
                }}
                options={ALL_TOOLS}
                groupBy={option => ToolDataGroupEnum[option.group]}
                getOptionLabel={option => option.name}
                renderInput={(params) =>
                    <TextField {...params} InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                            <>
                                <InputAdornment position="start">
                                    <SearchIcon/>
                                </InputAdornment>
                                {params.InputProps.startAdornment}
                            </>
                        )
                    }} label="Tool"/>
                }
                renderOption={(props, option, {selected}) => <li {...props}>
                    <Checkbox icon={<CheckBoxOutlineBlankIcon fontSize="small"/>}
                              checkedIcon={<CheckBoxIcon fontSize="small"/>} style={{marginRight: 8}}
                              checked={selected}/>
                    {option.name}
                </li>}
                disableCloseOnSelect
                multiple
            />
            <Box sx={{display: 'flex', gap: '50px', flexDirection: 'column'}}>
                {(filterTools.length == 0 ? contributions : contributions.filter(contribution => contribution.toolsData.some(toolData => filterTools.some(filterToolData => filterToolData == toolData)))).map(contributionData =>
                    <Contribution contributionData={contributionData}/>)}
            </Box>
        </Box>
    );
}
