import { useState } from "react";
import { Grid, useMediaQuery } from "@mui/material";
import { BarNav } from "../components";

export default function ColumnsTwo({ columnOne, columnTwo, xs = 8 }){
    const [open, setOpen] = useState(true);

    const isMovilWidth = useMediaQuery('(max-width:610px)')

    return <Grid container>
        <BarNav onToggleMenu={()=>setOpen(!open)}/>
        {open && <Grid item xs={ isMovilWidth ? xs : 12 - xs }>
            { columnOne }
        </Grid>}
        { (!isMovilWidth || !open) && <Grid item xs={ xs }>
            { columnTwo }
        </Grid>}
    </Grid>
}