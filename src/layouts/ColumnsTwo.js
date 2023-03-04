import { Grid } from "@mui/material";

export default function ColumnsTwo({ columnOne, columnTwo, xs = 8 }){

    return <Grid container>
        <Grid xs={ 12 - xs }>
            { columnOne }
        </Grid>
        <Grid xs={ xs }>
            { columnTwo }
        </Grid>
    </Grid>
}