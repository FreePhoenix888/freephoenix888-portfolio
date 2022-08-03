// @ts-ignore
import {Collapse, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {MonitorEye} from "mdi-material-ui";
import {ContributionData} from "../Models/ContributionData";
import {TOOLS} from "./Tools";
import React, {useState} from "react";
import {ExpandLess, ExpandMore} from "@mui/icons-material";

const BotContributionBody = () => {
    const [isTriggersListOpen, setIsTriggersListOpen] = useState(false);
    const [isOneTimeActionsListOpen, setIsOneTimeActionsListOpen] = useState(false);

    return <>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <ListItemButton onClick={() => setIsTriggersListOpen(!isTriggersListOpen)}>
                <ListItemIcon>
                    <MonitorEye/>
                </ListItemIcon>
                <ListItemText primary={"Triggers"}/>
                {isTriggersListOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={isTriggersListOpen} timeout="auto" unmountOnExit>
                <ListItemButton component={"a"} href={"https://github.com/linksplatform/Bot/blob/main/csharp/Platform.Bot/Triggers/ChangeOrganizationRepositoriesDefaultBranchTrigger.cs"} target={"_blank"}>
                    <ListItemText primary={"Change default branch for organization repositories"}/>
                </ListItemButton>
                <ListItemButton component={"a"} href={"https://github.com/linksplatform/Bot/blob/main/csharp/Platform.Bot/Triggers/ChangeOrganizationPullRequestsBaseBranchTrigger.cs"} target={"_blank"}>
                    <ListItemText primary={"Change default branch of pull requests for organization repositories"}/>
                </ListItemButton>
                <ListItemButton component={"a"} href={"https://github.com/linksplatform/Bot/blob/main/csharp/Platform.Bot/Triggers/CreateAndSaveOrganizationRepositoriesMigrationTrigger.cs"} target={"_blank"}>
                    <ListItemText primary={"Create and save migrations for organization repositories"}/>
                </ListItemButton>
                <ListItemButton component={"a"} href={"https://github.com/linksplatform/Bot/blob/main/csharp/Platform.Bot/Triggers/MergeDependabotBumpsTrigger.cs"} target={"_blank"}>
                    <ListItemText primary={"Merge dependabot dependency bumps"}/>
                </ListItemButton>
                <ListItemButton component={"a"} href={"https://github.com/linksplatform/Bot/blob/main/csharp/Platform.Bot/Triggers/LastCommitActivityTrigger.cs"} target={"_blank"}>
                    <ListItemText primary={"Get contributors in n time to organization repositories"}/>
                </ListItemButton>
                <ListItemButton component={"a"} href={"https://github.com/linksplatform/Bot/blob/main/csharp/Platform.Bot/Triggers/Decorators/AdminAuthorTriggerDecorator.cs"} target={"_blank"}>
                    <ListItemText primary={"Decorator to execute only if issue's author is organization admin"}/>
                </ListItemButton>
            </Collapse>
            <ListItemButton>One-time actions</ListItemButton>
            <Collapse in={isOneTimeActionsListOpen} timeout="auto" unmountOnExit>
                <ListItemText>Remove project from sln</ListItemText>
            </Collapse>
            <ListItemButton component={"a"} href={"https://github.com/linksplatform/Bot/tree/main/csharp/TraderBot"} target={"_blank"}>Trader bot to trade on Tinkoff investment platform</ListItemButton>
        </List>
       </>
}


export const CONTRIBUTIONS = {
    "saveMyLife": new ContributionData({
        name: "SaveMyLife",
        tools: [TOOLS.kotlin, TOOLS.jetpack],
        url: "https://github.com/FreePhoenix888/SaveMyLife",
        description: "An android app to contact your friends when you are in danger",

    }), "habiticaSubtasksHelper": new ContributionData({
        name: "Habitica subtasks helper",
        tools: [TOOLS.javascript, TOOLS.typescript, TOOLS.react, TOOLS.css, TOOLS["sass/scss"]],
        url: "https://github.com/FreePhoenix888/Habitica-Subtasks-Helper",
        description: "A website for splitting plain text into subtasks and saving them in the Habitica app.",

    }), "linksplatform/bot": new ContributionData({
        name: "linksplatform/bot",
        tools: [TOOLS.python],
        url: "https://github.com/linksplatform/Bot",
        description: "A console application that lets automate actions by using one-time actions or actions triggered by triggers.",
        body: <BotContributionBody />    }), "linksplatform/memory": new ContributionData({
        name: "linksplatform/memory",
        tools: [TOOLS["c++"]],
        url: "https://github.com/linksplatform/Memory",
        description: "A library for memory management simplification.",
        body:
<List>
    <ListItemButton>Made CRUD methods to use callbacks</ListItemButton>
    <ListItemButton>Translated code from C# to C++</ListItemButton>
</List>

    }), "linksplatform/data": new ContributionData({
        name: "linksplatform/data",
        tools: [TOOLS["c++"], TOOLS.testing],
        url: "https://github.com/linksplatform/Data",
        description: "A library for links storage implementation.",
        body: `
<ul>
    <li>Made CRUD methods of memory managers to use callbacks</li>
    <li>Translated code from C# to C++</li>
</ul>
`
    }), "linksplatform/data.doublets": new ContributionData({
        name: "linksplatform/data.doublets",
        tools: [TOOLS["c++"], TOOLS.testing],
        url: "https://github.com/linksplatform/Data.Doublets",
        description: "A library with links storage implementation called doublets.",
        body: `
<ul>
    <li>Made CRUD methods of memory managers to use callbacks</li>
    <li>Translated code from C# to C++</li>
</ul>
`
    }), "linksplatform/data.doublets.sequences": new ContributionData({
        name: "linksplatform/data.doublets.sequences",
        tools: [TOOLS["c#"], TOOLS.testing],
        url: "https://github.com/linksplatform/Data.Doublets.Sequences",
        description: "A library for doublets sequences management simplification.",
        body: `
<ul>
    <li>Created Byte converters: https://github.com/linksplatform/Data.Doublets.Sequences/tree/main/csharp/Platform.Data.Doublets.Sequences/Numbers/Byte</li>
    <li>Created Rational number converters: https://github.com/linksplatform/Data.Doublets.Sequences/tree/main/csharp/Platform.Data.Doublets.Sequences/Numbers/Rational</li>
    <li>Created BigInteger converters: https://github.com/linksplatform/Data.Doublets.Sequences/tree/main/csharp/Platform.Data.Doublets.Sequences/Numbers/Raw</li>
</ul>
`
    }), "linksplatform/data.doublets.json": new ContributionData({
        name: "linksplatform/data.doublets.json",
        tools: [TOOLS["c#"], TOOLS.testing],
        url: "https://github.com/linksplatform/Data.Doublets.Json",
        description: "A library, console applications, tools to import json to links storage and export json from links storage.",
    }), "linksplatform/data.doublets.xml": new ContributionData({
        name: "linksplatform/data.doublets.xml",
        tools: [TOOLS["c#"], TOOLS.testing],
        url: "https://github.com/linksplatform/Data.Doublets.Xml",
        description: "A library, console applications, tools to import xml to links storage and export xml from links storage.",
    }), "linksplatform/data.doublets.gql": new ContributionData({
        name: "linksplatform/data.doublets.gql",
        tools: [TOOLS["c#"], TOOLS.testing],
        url: "https://github.com/linksplatform/Data.Doublets.Gql",
        description: "A gql server console application to work with doublets storage.",
    }), "linksplatform/data.doublets.gql.client": new ContributionData({
        name: "linksplatform/data.doublets.gql.client",
        tools: [TOOLS["c#"], TOOLS.testing],
        url: "https://github.com/linksplatform/Data.Doublets.Gql.Client",
        description: "A gql client to work with doublets storage."
    }), "linksplatform/scripts": new ContributionData({
        name: "linksplatform/scripts",
        tools: [TOOLS.bash],
        url: "https://github.com/linksplatform/Scripts",
        description: "Bash scripts.",
        body: <List>
            <ListItemButton>One-time scripts for users</ListItemButton>
            <ListItemButton>Scripts for CI/CD</ListItemButton>
        </List>


    }),
};

export const ALL_CONTRIBUTIONS = Object.values(CONTRIBUTIONS);