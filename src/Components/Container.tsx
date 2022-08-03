import {Box} from "@mui/material"
import {Container as MuiContainer} from "@mui/material";

interface Props {
    children: React.ReactNode
}

export const Container = ({children}: Props) => {
    return <MuiContainer maxWidth={"md"} >
        {children}
    </MuiContainer>
}