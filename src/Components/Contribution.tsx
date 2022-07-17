import {ContributionData as ContributionData} from "../Models/ContributionData";
import {Box, Link, Paper, Typography} from "@mui/material";
import {Tools} from "./Tools";

interface Props {
    contributionData: ContributionData
}

export const Contribution = ({contributionData}: Props) => {
    return <Paper sx={{padding: "25px"}}>
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Link href={contributionData.url}><Typography variant={"h2"}>{contributionData.name}</Typography></Link>
            <Typography variant={"h3"}>{contributionData.description}</Typography>
            {contributionData.body}
            <Tools toolsData={contributionData.toolsData}/>
        </Box>
    </Paper>
}