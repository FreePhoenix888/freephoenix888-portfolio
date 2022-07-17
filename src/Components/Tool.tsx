import {ToolData as ToolData} from "../Models/ToolData";
import {Chip, Icon} from "@mui/material";

interface Props {
    toolData: ToolData
}

export const Tool = ({toolData}: Props) => {
    return <Chip color={"default"} icon={toolData.imgSrc ?
        <Icon sx={{fill: "red"}}><img src={toolData.imgSrc} alt={toolData.name}/></Icon> : undefined}
                 label={toolData.name}/>
}