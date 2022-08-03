import {Box, Button, Typography} from "@mui/material";
import {AvatarAndName} from "../AvatarAndName";
import avatar from "../../static/media/images/avatar.png";
import {THEME} from "../../Data/Theme";
import TextTransition, {presets} from "react-text-transition";
import {Link} from "react-router-dom";
import React, {useState} from "react";
import {ToolData} from "../../Models/ToolData";
import {randomIntFromInterval} from "../../Utils";
import {Container} from "../Container";
import {grey} from "@mui/material/colors";
import computerRoom from "../../static/media/images/computer_room.jpg";
import {Work as WorkIcon} from "@mui/icons-material";
import {Tools as ToolsIcon} from "mdi-material-ui";

interface Props {
    languageTools: ToolData[]
}

const Background = () => {
    return <Box sx={{
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
    }}/>
}

export const Home = ({languageTools}: Props) => {

    const [languageIndex, setLanguageIndex] = useState(randomIntFromInterval(0, languageTools.length - 1));

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setLanguageIndex(languageIndex => {
                const randomIndex = randomIntFromInterval(0, languageTools.length - 1);
                return randomIndex != languageIndex ? randomIndex : languageIndex + 1;
            });
        }, 3000)
        return () => clearInterval(intervalId);
    }, [])

    return <Box display={"flex"} flexDirection={"column"}
                justifyContent={"center"} alignItems={"center"}
                sx={{minHeight: "100vh"}}>
        <Background/>
            <Container>
            <Typography variant={"h1"} sx={{outline: "red"}}>
                <Box>
                    I am
                </Box>
                <AvatarAndName avatar={avatar} name={"FreePhoenix888"}
                               fontSize={THEME.typography.h1.fontSize as number}/>
            </Typography>
            <Typography variant={"h2"} sx={{outline: "red"}}>
                A developer, not tied to any tool.
                <Box minWidth={"10px"} fontWeight={"600"}>
                    <TextTransition springConfig={presets.slow} direction={"down"} inline>
                        {languageTools[languageIndex % languageTools.length].name}
                    </TextTransition>
                </Box>
            </Typography>
            <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
                <Link to={"/contributions"}>
                    <Button variant={"contained"} sx={{marginTop: "24px"}} size={"large"} startIcon={<WorkIcon/>}>
                        <Typography>
                            What I do
                        </Typography>
                    </Button>
                </Link>
                <Link to={"/tools"}>
                    <Button variant={"contained"} sx={{marginTop: "24px"}} size={"large"} startIcon={<ToolsIcon/>}>
                        Tools I use
                    </Button>
                </Link>
            </Box>
            </Container>
        </Box>
}