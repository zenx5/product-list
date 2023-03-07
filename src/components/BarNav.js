import { Grid, Typography, ButtonBase, Avatar, IconButton } from '@mui/material'
import { ArrowDropDown, Menu } from '@mui/icons-material'

export default function BarNav() {

    return <Grid container sx={{ backgroundColor: 'primary.main', p:3 }} data-testid='barnav'>
        <Grid item xs={6}>
            <Typography variant='h5' color='#fff' sx={{ fontWeight:'bold' }}> <IconButton><Menu sx={{ color:'#fff' }}/></IconButton> MeuErpOnline</Typography>
        </Grid>
        <Grid item xs={6} sx={{ display:'flex', justifyContent:'flex-end' }}>
            <ButtonBase>
                <Avatar />
                <Typography sx={{ mx:2, color:'#fff', fontWeight:'bold' }}>omartinez@gmail.com</Typography>
                <ArrowDropDown sx={{ color:'#fff' }}/>
            </ButtonBase>
        </Grid>
    </Grid>
}