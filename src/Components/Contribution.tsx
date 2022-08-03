import {ContributionData as ContributionData} from "../Models/ContributionData";
import {Box, Link, Paper, Typography} from "@mui/material";
import {ToolsTags} from "./ToolsTags";
import {grey} from "@mui/material/colors";
import computerRoom from "../static/media/images/computer_room.jpg";
import React from "react";
import {THEME} from "../Data/Theme";

interface Props {
    contributionData: ContributionData
}

export const Contribution = ({contributionData}: Props) => {
    return <Paper sx={{padding: "25px"}}>
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Link href={contributionData.url}><Typography variant={"h2"}>{contributionData.name}</Typography></Link>
            <Typography variant={"h3"}>{contributionData.description}</Typography>
            {contributionData.body}
            <ToolsTags toolsData={contributionData.toolsData}/>
        </Box>
    </Paper>
}