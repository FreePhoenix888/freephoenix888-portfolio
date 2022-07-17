import React, {useState} from 'react';
import './App.css';
import {Box, Button, createTheme, Paper, ThemeProvider, Typography} from "@mui/material";
import avatar from "./static/media/images/avatar.png";
import computerRoom from "./static/media/images/computer_room.jpg";
import {grey} from "@mui/material/colors";
import {AvatarAndName} from "./Components/AvatarAndName";
import {LANGUAGE_TOOLS, TOOLS} from "./Data/TOOLS";
import TextTransition, {presets} from "react-text-transition";
import {randomIntFromInterval} from "./Utils";
import {Link, Route, Routes} from "react-router-dom";
import {Contributions} from "./Components/Contributions";
import {THEME} from "./Data/Theme"
import {Home} from "./Components/Home";


function App() {
    return (
        <ThemeProvider theme={THEME}>
            <Box sx={{
                position: "fixed",
                left: 0,
                right: 0,
                zIndex: -1,
                height: "100vh",
                backgroundColor: grey[400],
                backgroundImage: `url(${computerRoom})`,
                backgroundPosition: "center",
                backgroundRepeat: "noRepeat",
                backgroundSize: "cover",
                filter: "blur(6px)",
                transform: "scale(1.1)"
            }}>
            </Box>
            <Paper className="App"
                   sx={{backgroundColor: "transparent", height: "100%", width: "100%", minHeight: "100vh", minWidth: "100vw"}}>
                <Box sx={{maxWidth: "708px", margin: "0px auto"}}>
                    <Routes>
                        <Route path={"/"} element={<Home languageTools={LANGUAGE_TOOLS} />}/>
                        <Route path={"/contributions"}
                               element={<Contributions/>}/>
                    </Routes>
                </Box>

            </Paper>
        </ThemeProvider>
    );
}

export default App;
