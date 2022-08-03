import React, {useState} from 'react';
import './App.css';
import {Box, Button, createTheme, IconButton, Paper, ThemeProvider, Typography, Link as MuiLink} from "@mui/material";
import avatar from "./static/media/images/avatar.png";
import computerRoom from "./static/media/images/computer_room.jpg";
import {grey} from "@mui/material/colors";
import {AvatarAndName} from "./Components/AvatarAndName";
import {ALL_TOOLS, LANGUAGE_TOOLS, TOOLS} from "./Data/TOOLS";
import TextTransition, {presets} from "react-text-transition";
import {randomIntFromInterval} from "./Utils";
import {Link, Route, Routes, useLocation} from "react-router-dom";
import {Contributions} from "./Components/Pages/Contributions";
import {THEME} from "./Data/Theme"
import {Home} from "./Components/Pages/Home";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import {Tools} from "./Components/Pages/Tools";
import {Home as HomeIcon, Github as GithubIcon} from "mdi-material-ui";
import {Container} from "./Components/Container";
import {TopBar} from "./Components/TopBar";


function App() {
    let location = useLocation();
    return (
        <ThemeProvider theme={THEME}>
            <Box sx={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: -1,
                height: "100vh",
                width: "100%",
                backgroundColor: THEME.palette.background.default,
                backgroundPosition: "center",
                backgroundRepeat: "noRepeat",
                backgroundSize: "cover",
            }}/>
            <Paper className="App"
                   sx={{backgroundColor: "transparent", height: "100%", width: "100%", minHeight: "100vh"}}>
                <Routes location={location}>
                    <Route path={"/"} element={<Home languageTools={LANGUAGE_TOOLS} />}/>
                    <Route path={"/contributions"}
                           element={<Contributions/>}/>
                    <Route path={"/tools"}
                           element={<Tools />}/>
                </Routes>
            </Paper>
        </ThemeProvider>
    );
}

export default App;
