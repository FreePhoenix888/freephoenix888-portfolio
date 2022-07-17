import {Avatar, Box} from "@mui/material";
import React from "react";

interface Props {
    avatar: string;
    name: string;
    fontSize: number;
}

export const AvatarAndName = ({avatar, name, fontSize}: Props) => {
    return <>
        <Box display={"inline-flex"} justifyContent={"space-between"} gap={"0.5rem"} alignItems={"center"}>
            <Avatar
                alt="name" src={avatar} component={"span"}
                sx={{
                    display: "inline-flex",
                    width: fontSize,
                    height: fontSize,
                    verticalAlign: "middle"
                }}/>
            <Box component={"span"} fontWeight={900} sx={{}}>{name}</Box>
        </Box>
    </>
}