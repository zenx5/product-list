import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, Box, Typography, ButtonBase, Avatar, IconButton, useMediaQuery, Popover, MenuItem, Slider, Icon, ToggleButtonGroup, ToggleButton } from '@mui/material'
import { ArrowDropDown, Menu } from '@mui/icons-material'
import EnCircle from '../assets/icons/en-circle.png'
import EsCircle from '../assets/icons/es-circle.png'
import PtCircle from '../assets/icons/pt-circle.png'

export default function BarNav() {
    const [currentLang, setCurrentLang] = useState( localStorage.getItem('i18nextLng') ?? 'pt')
    const [anchorEl, setAnchorEl] = useState(null);
    const isMovilWidth = useMediaQuery('(max-width:610px)')
    const { i18n } = useTranslation();


    const open = Boolean(anchorEl)

    const langs = [
        { value:'es', label:'es' }, // <Icon><EsCircle /></Icon>
        { value:'pt', label:'pt' }, // <Icon><PtCircle /></Icon>
        { value:'en', label:'en' }, // <Icon><EnCircle /></Icon>
    ]

    const handlerChangeLanguage = (event, newLanguage) => {
        if( newLanguage ){
            setCurrentLang(prev => newLanguage)
            localStorage.setItem('i18nextLng', newLanguage)
            i18n.changeLanguage(newLanguage);
        }
    }


    return <Grid container sx={{ backgroundColor: 'primary.main', p:3 }} data-testid='barnav'>
        <Grid item xs={6}>
            { !isMovilWidth && <Typography variant='h5' color='#fff' sx={{ fontWeight:'bold' }}> <IconButton><Menu sx={{ color:'#fff' }}/></IconButton> MeuErpOnline</Typography> }
            { isMovilWidth && <IconButton><Menu sx={{ color:'#fff' }}/></IconButton> }
        </Grid>
        <Grid item xs={6} sx={{ display:'flex', justifyContent:'flex-end' }}>
            <ButtonBase  onClick={(event)=>setAnchorEl(event.currentTarget)}>
                <Avatar />
                { !isMovilWidth && <Typography sx={{ mx:2, color:'#fff', fontWeight:'bold' }}>omartinez@gmail.com</Typography> }
                { !isMovilWidth && <ArrowDropDown sx={{ color:'#fff' }}/> }
            </ButtonBase>
            <Popover
                open={open}
                onClose={()=>setAnchorEl(false)}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical:'bottom',
                    horizontal:'right'
                }}
                sx={{
                    borderRadius:4,
                    '.MuiMenuItem-root':{
                        width: 170
                    }
                }}
            >
                <Box sx={{ display:'flex', mt:2, mb:1, justifyContent:'center' }}>
                    <ToggleButtonGroup
                        value={currentLang}
                        exclusive
                        onChange={handlerChangeLanguage}
                        >
                        <ToggleButton value='es'>
                            <img src={EsCircle} width={16} height={16} />
                        </ToggleButton>
                        <ToggleButton value='pt'>
                            <img src={PtCircle} width={16} height={16} />
                        </ToggleButton>
                        <ToggleButton value='en'>
                            <img src={EnCircle} width={16} height={16} />
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Box>
                <MenuItem sx={{ justifyContent:'center' }}>Logout</MenuItem>
            </Popover>
        </Grid>
    </Grid>
}