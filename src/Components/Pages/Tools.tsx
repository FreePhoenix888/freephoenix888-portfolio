import {GROUPED_TOOLS, TOOLS} from "../../Data/TOOLS";
import {Icon, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader} from "@mui/material";
import {ToolChip} from "../ToolChip";
import {ToolData} from "../../Models/ToolData";
import {ToolListItemButton} from "../ToolListItemButton";
import * as _ from "lodash";
import React, {ReactNode} from "react";
import {ToolDataGroupEnum} from "../../Enums/ToolDataGroupEnum";
import {Container} from "../Container";
import {TopBar} from "../TopBar";

interface Props {
    toolsData: ToolData[]
}

export const Tools = () => {
    return <Container>
        <TopBar/>
        <List >
            {
                Object.keys(GROUPED_TOOLS).map(groupIndex =>
                    <>
                        <ListSubheader>{ToolDataGroupEnum[parseInt(groupIndex)]}</ListSubheader>
                        {GROUPED_TOOLS[groupIndex].map(toolData => <ToolListItemButton toolData={toolData} key={toolData.name} />)}
                    </>
                )
            }
        </List>
    </Container>
}