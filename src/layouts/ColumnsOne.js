import { Box } from "@mui/material";

export default function ColumnsOne({ header, children }){

    return <Box sx={{ m:0, p:0 }}>
        <Box>{ header }</Box>
        <Box p={1}>{children}</Box>
    </Box>
}