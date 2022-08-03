import {Icon, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {ToolData} from "../Models/ToolData";

interface Props {
    toolData: ToolData
}

export const ToolListItemButton = ({toolData} :Props) => {
    return <ListItemButton component={"a"}  href={toolData.infoSrc} target={"_blank"}>
        {
            toolData.imgSrc ?
                <ListItemIcon >
                    <Icon><img src={toolData.imgSrc} alt={toolData.name}/></Icon>
                </ListItemIcon>
                : undefined
        }
        <ListItemText primary={toolData.name} />
    </ListItemButton>
}