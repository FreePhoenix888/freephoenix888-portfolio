import {ToolData} from "../Models/ToolData";
import {ToolChip} from "./ToolChip";
import {List, ListItemButton, Paper} from "@mui/material";
import {THEME} from "../Data/Theme";

interface Props {
    toolsData: ToolData[]
}

export const ToolsTags = ({toolsData}: Props) => {
    return <Paper sx={{padding: "15px", opacity: 0.83}} >
        <List>
        {toolsData.map(toolData =>
            <ListItemButton key={toolData.name}>
                <ToolChip toolData={toolData}/>
            </ListItemButton>
        )}
        </List>
    </Paper>
}