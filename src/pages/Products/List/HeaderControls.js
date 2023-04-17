import {
    TableRow,
    TableCell,
    TextField,
    IconButton,
    FormControlLabel,
    Button,
    Switch,
    useMediaQuery
} from "@mui/material"
import { Search, Add } from "@mui/icons-material"
import { useTranslation } from "react-i18next"
import { useState } from "react"
import { fontSize, padding } from "@mui/system"
import { NavLink } from "react-router-dom"

export default function HeaderControls({ onSearch, onFilter }){
    const [activeMovilSearch, setActiveMovilSearch] = useState(false)
    const { t:translate } = useTranslation()

    const isTableWidth = useMediaQuery('(max-width:900px)')
    const isMovilWidth = useMediaQuery('(max-width:610px)')

    return <>
        <TableRow sx={{ backgroundColor:'#fafafa', p:0, m:0 }}>
            <TableCell colSpan={2} sx={{ p:0 }}>
                { isMovilWidth ?
                    <IconButton sx={{ m:2, opacity:0.6 }} onClick={()=>setActiveMovilSearch(prev => !prev)}><Search /></IconButton>
                    :
                    <TextField
                    sx={{
                        width:'100%',
                        opacity:1,
                        '.MuiInputBase-root':{
                            p:'15px'
                        }
                    }}
                    variant='filled'
                    inputProps={{
                        'data-testid':'search',
                        style:{
                            padding:0
                        }
                    }}
                    InputProps={{
                        sx: {
                            backgroundColor:'#fafafa',
                            ':hover':{
                                backgroundColor:'#fafafa'
                            },
                            ':focus':{
                                backgroundColor:'#fafafa'
                            },
                            ':active':{
                                backgroundColor:'#fafafa'
                            },
                            ':blur':{
                                backgroundColor:'#fafafa'
                            }
                        },
                        disableUnderline: true,
                        startAdornment:<IconButton sx={{ opacity:0.6 }}><Search /></IconButton>
                    }}
                    placeholder={translate('placeholder_search_reg')}
                    onChange={onSearch}
                />}
            </TableCell>
            <TableCell colSpan={isTableWidth ? 4 : 3}>
                <FormControlLabel control={<Switch onChange={onFilter} />} label={translate('select_active')} labelPlacement='start' />
            </TableCell>
            <TableCell colSpan={isTableWidth ? 1 : 2}>
                { !isTableWidth && <Button component={NavLink} to='/test-visual-software/new' variant='contained' sx={{ borderRadius:10, width:'190px', left:'-40px', fontWeight:'bold' }} startIcon={<Add sx={{ px:0 }}/>}>{translate('new_product')}</Button> }
                { isTableWidth && <IconButton component={NavLink} to='/test-visual-software/new' sx={{ backgroundColor: 'primary.main', color:'#fff' }}><Add /></IconButton> }
            </TableCell>
        </TableRow>
        { ( isMovilWidth && activeMovilSearch) && <TableRow>
            <TableCell sx={{ p:0 }} colSpan={7}>
                <TextField
                    sx={{
                        width:'100%',
                        opacity:1,
                        '.MuiInputBase-root':{
                            p:0
                        }
                    }}
                    placeholder={translate('placeholder_search_reg')}
                    onChange={onSearch}
                    variant='filled'
                    inputProps={{
                        'data-testid':'search',
                        style:{
                            textAlign:'center',
                            pointerEvents:'painted',
                            fontSize:30,
                            paddingTop:5,
                            paddingBottom:5,
                        }
                    }}
                />
            </TableCell>
        </TableRow>}
</>
}
