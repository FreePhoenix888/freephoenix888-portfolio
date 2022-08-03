import {ToolData} from "../Models/ToolData";
import {
    Bash, Git,
    Graphql,
    LanguageC,
    LanguageCpp,
    LanguageCsharp,
    LanguageJava, LanguageJavascript,
    LanguageKotlin, LanguageMarkdown,
    LanguagePython,
    LanguageTypescript, Nodejs, React, Sass, Webpack
} from "mdi-material-ui";
import {Css, Html} from "@mui/icons-material";
import {Node} from "postcss";
import {camelCaseToTitleCase} from "../Utils";
import {ToolDataGroupEnum} from "../Enums/ToolDataGroupEnum";
import * as _ from "lodash";

// const LANGUAGE_TOOLS = {
//     "c": new ToolData({name: "C", imgSrc: "https://img.icons8.com/color/48/c-programming.svg", infoSrc: "https://en.wikipedia.org/wiki/C_(programming_language)", group: ToolDataGroupEnum.Language}),
//     "c++": new ToolData({name: "C++", imgSrc: "https://img.icons8.com/color/48/c-plus-plus-logo.svg", infoSrc: "https://en.wikipedia.org/wiki/C%2B%2B", group: ToolDataGroupEnum.Language}),
//     "c#": new ToolData({name: "C#", imgSrc: "https://img.icons8.com/color/48/c-sharp-logo.svg", infoSrc: "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)", group: ToolDataGroupEnum.Language}),
//     "kotlin": new ToolData({name: "Kotlin", imgSrc: "https://img.icons8.com/color/48/javascript.svg", infoSrc: "https://kotlinlang.org", group: ToolDataGroupEnum.Language}),
//     "java": new ToolData({name: "Java", imgSrc: "https://img.icons8.com/color/48/java-coffee-cup-logo--v1.svg", infoSrc:"https://en.wikipedia.org/wiki/Java_(programming_language)", group: ToolDataGroupEnum.Language}),
//     "python": new ToolData({name: "Python", imgSrc: "https://img.icons8.com/color/48/python--v1.svg", infoSrc:"https://www.python.org", group: ToolDataGroupEnum.Language}),
//     "javascript": new ToolData({name: "JavaScript", imgSrc: "https://img.icons8.com/color/48/javascript.svg", infoSrc:"https://en.wikipedia.org/wiki/JavaScript", group: ToolDataGroupEnum.Language}),
//     "typescript": new ToolData({name: "TypeScript", imgSrc: "https://img.icons8.com/color/48/typescript.svg", infoSrc:"https://www.typescriptlang.org", group: ToolDataGroupEnum.Language}),
//     "graphql": new ToolData({name: "GraphQL", imgSrc: "https://img.icons8.com/color/48/graphql.svg", infoSrc:"https://img.icons8.com/color/344/graphql.svg", group: ToolDataGroupEnum.Language}),
//     "bash": new ToolData({name: "Bash", imgSrc: "https://img.icons8.com/color/48/console.png", infoSrc:"https://www.gnu.org/software/bash", group: ToolDataGroupEnum.Language}),
//     "html": new ToolData({name: "HTML", imgSrc: "https://img.icons8.com/color/48/html-5.svg", infoSrc:"https://en.wikipedia.org/wiki/HTML", group: ToolDataGroupEnum.Language}),
//     "css": new ToolData({name: "CSS", imgSrc: "https://img.icons8.com/color/48/css3.svg", infoSrc:"https://www.w3schools.com/css", group: ToolDataGroupEnum.Language}),
//     "sass/scss": new ToolData({name: "SASS/SCSS", imgSrc: "https://img.icons8.com/color/48/sass.svg", infoSrc:"https://sass-lang.com", group: ToolDataGroupEnum.Language}),
// };
//
// const DATA_TOOLS = {
//     "linksplatform": new ToolData({name: "LinksPlatform", imgSrc: "https://avatars.githubusercontent.com/u/15116341?s=48&v=4", infoSrc: "https://github.com/linksplatform", group: ToolDataGroupEnum.DataTools}),
//     "mysql": new ToolData({name: "MySQL", imgSrc: "https://img.icons8.com/fluent/48/000000/mysql-logo.svg", infoSrc: "https://www.mysql.com", group: ToolDataGroupEnum.DataTools}),
//     "postresql": new ToolData({name: "PostgresQL", imgSrc: "https://img.icons8.com/color/48/postgreesql.svg", infoSrc: "https://www.postgresql.org", group: ToolDataGroupEnum.DataTools}),
//     "json": new ToolData({name: "JSON", imgSrc: "https://img.icons8.com/color/48/json--v1.svg", infoSrc:"https://www.json.org/json-en.html", group: ToolDataGroupEnum.DataTools}),
//     "xml": new ToolData({name: "XML", imgSrc: "https://img.icons8.com/color/48/xml.svg", infoSrc:"https://en.wikipedia.org/wiki/XML", group: ToolDataGroupEnum.DataTools}),
//     "markdown": new ToolData({name: "MarkDown", imgSrc: "https://img.icons8.com/color/48/markdown.svg", infoSrc:"https://en.wikipedia.org/wiki/Markdown", group: ToolDataGroupEnum.DataTools}),
// };
//
// const OPERATION_SYSTEMS_TOOLS = {
//     "windows": new ToolData({name: "Windows", infoSrc:"https://www.microsoft.com/en-us/windows", imgSrc: "https://img.icons8.com/fluency/48/windows-10.svg", group: ToolDataGroupEnum.OperationSystems}),
//     "linux": new ToolData({name: "Linux", infoSrc:"https://www.linux.org/", imgSrc: "https://img.icons8.com/color/48/linux--v1.svg", group: ToolDataGroupEnum.OperationSystems}),
//     "android": new ToolData({name: "Android", infoSrc:"https://www.android.com", imgSrc: "https://img.icons8.com/fluency/48/android-os.svg", group: ToolDataGroupEnum.OperationSystems}),
// };
//
// const PACKAGE_MANAGERS_TOOLS = {
//     "npm": new ToolData({name: "NPM", imgSrc: "https://img.icons8.com/color/48/npm.svg", infoSrc:"https://www.npmjs.com/", group: ToolDataGroupEnum.PackageManagers}),
//     "yarn": new ToolData({name: "Yarn", imgSrc: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-yarn-fast-reliable-and-secure-dependency-management-web-portal-logo-color-tal-revivo.svg", infoSrc:"https://yarnpkg.com/", group: ToolDataGroupEnum.PackageManagers}),
//     "nuget": new ToolData({name: "Nuget", imgSrc: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-nuget-a-free-and-open-source-package-manager-designed-for-the-microsoft-development-platform-logo-color-tal-revivo.svg", infoSrc:"https://www.nuget.org", group: ToolDataGroupEnum.PackageManagers}),
//     "conan": new ToolData({name: "Conan", imgSrc: "https://avatars.githubusercontent.com/u/15212165?s=48&v=4", infoSrc:"https://conan.io/", group: ToolDataGroupEnum.PackageManagers}),
// };
//
// const FRAMEWORKS_TOOLS = {
//     "react": new ToolData({name: "React", imgSrc: "https://img.icons8.com/office/48/react.svg", infoSrc:"https://reactjs.org/", group: ToolDataGroupEnum.Frameworks}),
// };
//
// const LIBRARIES_TOOLS = {
//     "jetpack": new ToolData({name: "Jetpack", infoSrc:"https://developer.android.com/jetpack", group: ToolDataGroupEnum.Libraries})
// };
//
// const OTHER_TOOLS = {
//     "git": new ToolData({name: "Git", imgSrc: "https://img.icons8.com/color/48/git.svg", infoSrc:"https://git-scm.com/", group: ToolDataGroupEnum.Other}),
//     "node": new ToolData({name: "Node", imgSrc: "https://img.icons8.com/color/48/nodejs.svg", infoSrc:"https://nodejs.org", group: ToolDataGroupEnum.Other}),
//     "webpack": new ToolData({name: "Webpack", imgSrc: "https://img.icons8.com/color/48/webpack.svg", infoSrc:"https://webpack.js.org", group: ToolDataGroupEnum.Other}),
//     "unitTesting": new ToolData({name: "Unit testing", imgSrc: "https://img.icons8.com/fluency/48/thin-test-tube.svg", infoSrc:"https://en.wikipedia.org/wiki/Unit_testing", group: ToolDataGroupEnum.Other}),
// };

export const TOOLS = {
    "c": new ToolData({
        name: "C",
        imgSrc: "https://img.icons8.com/color/48/c-programming.svg",
        infoSrc: "https://en.wikipedia.org/wiki/C_(programming_language)",
        group: ToolDataGroupEnum.Language
    }),
    "c++": new ToolData({
        name: "C++",
        imgSrc: "https://img.icons8.com/color/48/c-plus-plus-logo.svg",
        infoSrc: "https://en.wikipedia.org/wiki/C%2B%2B",
        group: ToolDataGroupEnum.Language
    }),
    "c#": new ToolData({
        name: "C#",
        imgSrc: "https://img.icons8.com/color/48/c-sharp-logo.svg",
        infoSrc: "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)",
        group: ToolDataGroupEnum.Language
    }),
    "kotlin": new ToolData({
        name: "Kotlin",
        imgSrc: "https://img.icons8.com/color/48/javascript.svg",
        infoSrc: "https://kotlinlang.org",
        group: ToolDataGroupEnum.Language
    }),
    "java": new ToolData({
        name: "Java",
        imgSrc: "https://img.icons8.com/color/48/java-coffee-cup-logo--v1.svg",
        infoSrc: "https://en.wikipedia.org/wiki/Java_(programming_language)",
        group: ToolDataGroupEnum.Language
    }),
    "python": new ToolData({
        name: "Python",
        imgSrc: "https://img.icons8.com/color/48/python--v1.svg",
        infoSrc: "https://www.python.org",
        group: ToolDataGroupEnum.Language
    }),
    "javascript": new ToolData({
        name: "JavaScript",
        imgSrc: "https://img.icons8.com/color/48/javascript.svg",
        infoSrc: "https://en.wikipedia.org/wiki/JavaScript",
        group: ToolDataGroupEnum.Language
    }),
    "typescript": new ToolData({
        name: "TypeScript",
        imgSrc: "https://img.icons8.com/color/48/typescript.svg",
        infoSrc: "https://www.typescriptlang.org",
        group: ToolDataGroupEnum.Language
    }),
    "graphql": new ToolData({
        name: "GraphQL",
        imgSrc: "https://img.icons8.com/color/48/graphql.svg",
        infoSrc: "https://img.icons8.com/color/344/graphql.svg",
        group: ToolDataGroupEnum.Language
    }),
    "bash": new ToolData({
        name: "Bash",
        imgSrc: "https://img.icons8.com/color/48/console.png",
        infoSrc: "https://www.gnu.org/software/bash",
        group: ToolDataGroupEnum.Language
    }),
    "html": new ToolData({
        name: "HTML",
        imgSrc: "https://img.icons8.com/color/48/html-5.svg",
        infoSrc: "https://en.wikipedia.org/wiki/HTML",
        group: ToolDataGroupEnum.Language
    }),
    "css": new ToolData({
        name: "CSS",
        imgSrc: "https://img.icons8.com/color/48/css3.svg",
        infoSrc: "https://www.w3schools.com/css",
        group: ToolDataGroupEnum.Language
    }),
    "sass/scss": new ToolData({
        name: "SASS/SCSS",
        imgSrc: "https://img.icons8.com/color/48/sass.svg",
        infoSrc: "https://sass-lang.com",
        group: ToolDataGroupEnum.Language
    }),
    "linksplatform": new ToolData({
        name: "LinksPlatform",
        imgSrc: "https://avatars.githubusercontent.com/u/15116341?s=48&v=4",
        infoSrc: "https://github.com/linksplatform",
        group: ToolDataGroupEnum.DataTools
    }),
    "mysql": new ToolData({
        name: "MySQL",
        imgSrc: "https://img.icons8.com/fluent/48/000000/mysql-logo.svg",
        infoSrc: "https://www.mysql.com",
        group: ToolDataGroupEnum.DataTools
    }),
    "postresql": new ToolData({
        name: "PostgresQL",
        imgSrc: "https://img.icons8.com/color/48/postgreesql.svg",
        infoSrc: "https://www.postgresql.org",
        group: ToolDataGroupEnum.DataTools
    }),
    "json": new ToolData({
        name: "JSON",
        imgSrc: "https://img.icons8.com/color/48/json--v1.png",
        infoSrc: "https://www.json.org/json-en.html",
        group: ToolDataGroupEnum.DataTools
    }),
    "xml": new ToolData({
        name: "XML",
        imgSrc: "https://img.icons8.com/color/48/xml.png",
        infoSrc: "https://en.wikipedia.org/wiki/XML",
        group: ToolDataGroupEnum.DataTools
    }),
    "markdown": new ToolData({
        name: "MarkDown",
        imgSrc: "https://img.icons8.com/color/48/markdown.png",
        infoSrc: "https://en.wikipedia.org/wiki/Markdown",
        group: ToolDataGroupEnum.DataTools
    }),
    "windows": new ToolData({
        name: "Windows",
        infoSrc: "https://www.microsoft.com/en-us/windows",
        imgSrc: "https://img.icons8.com/fluency/48/windows-10.svg",
        group: ToolDataGroupEnum.OperationSystems
    }),
    "linux": new ToolData({
        name: "Linux",
        infoSrc: "https://www.linux.org/",
        imgSrc: "https://img.icons8.com/color/48/linux--v1.png",
        group: ToolDataGroupEnum.OperationSystems
    }),
    "android": new ToolData({
        name: "Android",
        infoSrc: "https://www.android.com",
        imgSrc: "https://img.icons8.com/fluency/48/android-os.svg",
        group: ToolDataGroupEnum.OperationSystems
    }),
    "npm": new ToolData({
        name: "NPM",
        imgSrc: "https://img.icons8.com/color/48/npm.svg",
        infoSrc: "https://www.npmjs.com/",
        group: ToolDataGroupEnum.PackageManagers
    }),
    "yarn": new ToolData({
        name: "Yarn",
        imgSrc: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-yarn-fast-reliable-and-secure-dependency-management-web-portal-logo-color-tal-revivo.png",
        infoSrc: "https://yarnpkg.com/",
        group: ToolDataGroupEnum.PackageManagers
    }),
    "nuget": new ToolData({
        name: "Nuget",
        imgSrc: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-nuget-a-free-and-open-source-package-manager-designed-for-the-microsoft-development-platform-logo-color-tal-revivo.png",
        infoSrc: "https://www.nuget.org",
        group: ToolDataGroupEnum.PackageManagers
    }),
    "conan": new ToolData({
        name: "Conan",
        imgSrc: "https://avatars.githubusercontent.com/u/15212165?s=48&v=4",
        infoSrc: "https://conan.io/",
        group: ToolDataGroupEnum.PackageManagers
    }),
    "react": new ToolData({
        name: "React",
        imgSrc: "https://img.icons8.com/office/48/react.svg",
        infoSrc: "https://reactjs.org/",
        group: ToolDataGroupEnum.Frameworks
    }),
    "jetpack": new ToolData({
        name: "Jetpack",
        infoSrc: "https://developer.android.com/jetpack",
        group: ToolDataGroupEnum.Libraries
    }),
    "git": new ToolData({
        name: "Git",
        imgSrc: "https://img.icons8.com/color/48/git.svg",
        infoSrc: "https://git-scm.com/",
        group: ToolDataGroupEnum.Other
    }),
    "node": new ToolData({
        name: "Node",
        imgSrc: "https://img.icons8.com/color/48/nodejs.svg",
        infoSrc: "https://nodejs.org",
        group: ToolDataGroupEnum.Other
    }),
    "webpack": new ToolData({
        name: "Webpack",
        imgSrc: "https://img.icons8.com/color/48/webpack.svg",
        infoSrc: "https://webpack.js.org",
        group: ToolDataGroupEnum.Other
    }),
    "testing": new ToolData({
        name: "Testing",
        imgSrc: "https://img.icons8.com/fluency/48/thin-test-tube.png",
        infoSrc: "https://en.wikipedia.org/wiki/Software_testing",
        group: ToolDataGroupEnum.Other
    }),
};

export const ALL_TOOLS = Object.values(TOOLS);
export const GROUPED_TOOLS = _.groupBy(ALL_TOOLS, "group");
export const LANGUAGE_TOOLS = GROUPED_TOOLS[ToolDataGroupEnum.Language];
