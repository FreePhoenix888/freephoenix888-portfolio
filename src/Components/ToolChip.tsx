import {ToolData as ToolData} from "../Models/ToolData";
import {Chip, Icon} from "@mui/material";

interface Props {
    toolData: ToolData
}

export const ToolChip = ({toolData}: Props) => {
    return <Chip color={"default"} icon={toolData.imgSrc ?
        <Icon><img src={toolData.imgSrc} alt={toolData.name}/></Icon> : undefined}
                 label={toolData.name}/>
}