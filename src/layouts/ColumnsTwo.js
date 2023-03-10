import { Grid } from "@mui/material";
import { BarNav } from "../components";

export default function ColumnsTwo({ columnOne, columnTwo, xs = 8 }){

    return <Grid container>
        <BarNav />
        <Grid item xs={ 12 - xs }>
            { columnOne }
        </Grid>
        <Grid item xs={ xs }>
            { columnTwo }
        </Grid>
    </Grid>
}