import {
    TableRow,
    TableCell,
    TextField,
    IconButton,
    FormControlLabel,
    Button,
    Switch
} from "@mui/material"
import { Search, Add } from "@mui/icons-material"
import { useTranslation } from "react-i18next"

export default function HeaderControls({ onSearch, onFilter }){

    const { t:translate } = useTranslation()

    return <TableRow sx={{ backgroundColor:'#fafafa', p:0, m:0 }}>
    <TableCell colSpan={2} sx={{ p:0 }}>
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
        />
    </TableCell>
    <TableCell colSpan={3}>
        <FormControlLabel control={<Switch onChange={onFilter} />} label={translate('select_active')} labelPlacement='start' />
    </TableCell>
    <TableCell colSpan={2}>
        <Button variant='contained' sx={{ borderRadius:10, width:'120%', left:'-20%', fontWeight:'bold' }} startIcon={<Add sx={{ px:0 }}/>}>{translate('new_product')}</Button>
    </TableCell>
</TableRow>
}
