import {ToolData} from "./ToolData";

export class ContributionData {
    public readonly name: string;
    public readonly toolsData: ToolData[];
    public readonly url: string;
    public readonly description?: string;
    public readonly body?: React.ReactNode;

    constructor(params: {name: string, tools: ToolData[], url: string, description?: string, body?: React.ReactNode}) {
        this.name = params.name;
        this.toolsData = params.tools;
        this.url = params.url;
        this.description = params.description;
        this.body = params.body;
    }
}

// import {Chip, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Typography} from "@mui/material";
// import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
// import {jsx} from "@emotion/react";
// import JSX = jsx.JSX;
// import React from "react";
//
// interface Props{
//     name: string;
//     tools: Tool[];
//     url: string;
//     description?: string | undefined;
//     body?: React.ReactNode | undefined;
// }
//
// export const Contribution = (props: Props) => {
//     return <>
//         <Link href={props.url}>
//             <Typography variant="h3">
//                 props.name
//             </Typography>
//         </Link>
//         <Typography variant="h4">
//             props.description
//         </Typography>
//         {props.body}
//         <Paper>
//             {props.tools.map(tool => <ListItem key={tool.name}><Chip icon={<img src={tool.imgSrc} alt={tool.name} />} label={tool.name} /></ListItem>)}
//         </Paper>
//         {/*<List>*/}
//         {/*    <ListItemButton>*/}
//         {/*        <ListItemIcon>*/}
//         {/*            <AccessTimeRoundedIcon/>*/}
//         {/*        </ListItemIcon>*/}
//         {/*        <ListItemText primary="Triggers "/>*/}
//         {/*        {open ?*/}
//         {/*            </ListItemButton>*/}
//         {/*            <\List>*/}
//     </>
// }