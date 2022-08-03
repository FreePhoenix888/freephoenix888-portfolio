import React, {useEffect, useState} from 'react';
import '../../App.css';
import {
    Autocomplete,
    Box,
    Button,
    Checkbox, Chip, Icon,
    InputAdornment,
    SelectChangeEvent, Stack,
    TextField,
    Typography
} from "@mui/material";
import {ALL_CONTRIBUTIONS, CONTRIBUTIONS} from "../../Data/Contributions";
import {Contribution} from "../Contribution";
import {ALL_TOOLS} from "../../Data/Tools";
import {
    ArrowLeft as ArrowLeftIcon,
    ArrowRight as ArrowRightIcon,
    CheckBox as CheckBoxIcon,
    CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon,
    Search as SearchIcon
} from "@mui/icons-material";
import {ToolData} from "../../Models/ToolData";
import {ToolDataGroupEnum} from "../../Enums/ToolDataGroupEnum";
import {Container} from "../Container";
import {ContributionData} from "../../Models/ContributionData";
import {THEME} from "../../Data/Theme";
import {ToolChip} from "../ToolChip";
import {TopBar} from "../TopBar";

export const Contributions = () => {
    const [filterTools, setFilterTools] = useState<ToolData[]>([]);
    const [filteredContributions, setFilteredContributions] = useState<ContributionData[]>(ALL_CONTRIBUTIONS);
    useEffect(() => {
        const filteredContributions = filterTools.length == 0 ? ALL_CONTRIBUTIONS : ALL_CONTRIBUTIONS.filter(contribution => filterTools.every(filterTool => contribution.toolsData.includes(filterTool)));
        setFilteredContributions(filteredContributions);
    }, [filterTools])
    const [contributionIndex, setContributionIndex] = useState(0);
    return (
        <Box >
            <TopBar/>
            <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"} sx={{ minHeight: "100vh", alignItems: "center"}} >
                <Button sx={{fontSize: "150px", opacity: 0.5}} variant={"contained"}
                        onClick={() => setContributionIndex(prevState => prevState == 0 ? filteredContributions.length - 1 : prevState - 1)}>
                    <ArrowLeftIcon fontSize={"inherit"}/>
                </Button>
                <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
                    <Container>
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
                                renderTags={(tags, getTagProps) => tags.map((tag, index) => <Chip color={"default"} icon={tag.imgSrc ?
                                    <Icon><img src={tag.imgSrc} alt={tag.name}/></Icon> : undefined}
                                                                                                  label={tag.name} onDelete={() => console.log("Deleting")} />)}
                                renderOption={(props, option, {selected}) => <li {...props}>
                                    <Checkbox icon={<CheckBoxOutlineBlankIcon fontSize="small"/>}
                                              checkedIcon={<CheckBoxIcon fontSize="small"/>} style={{marginRight: 8}}
                                              checked={selected}/>
                                    <Stack gap={"4px"} flexDirection={"row"}>
                                        <Icon><img src={option.imgSrc} /></Icon>
                                        <Typography>{option.name}</Typography>
                                    </Stack>
                                </li>}
                                disableCloseOnSelect
                                multiple
                            />
                            <Box sx={{display: 'flex', gap: '50px', flexDirection: 'column'}}>
                                {/*{(filterTools.length == 0 ? contributions : contributions.filter(contribution => contribution.toolsData.some(toolData => filterTools.some(filterToolData => filterToolData == toolData)))).map(contributionData =>*/}
                                {/*    <Contribution contributionData={contributionData}/>)}*/}
                                {filteredContributions.length > 0 && <Contribution contributionData={filteredContributions[contributionIndex]}/>}
                            </Box>
                        </Box>
                    </Container>
                </Box>
                <Button sx={{fontSize: "150px", opacity: 0.5}} variant={"contained"}
                        onClick={() => setContributionIndex(prevState => prevState == filteredContributions.length - 1 ? 0 : prevState + 1)}>
                    <ArrowRightIcon fontSize={"inherit"}/>
                </Button>

            </Box>
        </Box>
    );
}
