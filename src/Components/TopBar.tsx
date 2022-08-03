import {Box, Button, Link as MuiLink, Paper} from "@mui/material";
import {Link} from "react-router-dom";
import {Github as GithubIcon, Home as HomeIcon} from "mdi-material-ui";
import {Container} from "./Container";
import React from "react";
import {THEME} from "../Data/Theme";

export const TopBar = () => {
    return <Paper><Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>

                <Link to={"/"}>
                    <HomeIcon />
                </Link>

        </Box>
    </Paper>

}