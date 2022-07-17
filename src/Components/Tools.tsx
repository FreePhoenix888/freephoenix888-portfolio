import {ToolData} from "../Models/ToolData";
import {Tool} from "./Tool";
import {Paper} from "@mui/material";
import {THEME} from "../Data/Theme";

interface Props {
    toolsData: ToolData[]
}

export const Tools = ({toolsData}: Props) => {
    return <Paper sx={{padding: "15px", opacity: 0.83}} >
        {toolsData.map(toolData => <Tool toolData={toolData}/>)}
    </Paper>
}