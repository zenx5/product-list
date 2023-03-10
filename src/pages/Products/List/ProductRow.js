import { useState } from 'react'
import { Grid, TableRow, TableCell, IconButton, Popover, MenuItem, Divider, useMediaQuery, Typography, ListItem } from '@mui/material'
import { MoreVert, Check, Edit, Delete, CheckBox, CheckBoxOutlineBlank } from '@mui/icons-material'
import { useTranslation } from 'react-i18next';

export default function ProductRow({ row, renderOptions = () => {} }) {
    const [changeStatus, setChangeStatus] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null);
    const { t:translate } = useTranslation()

    const isMovilWidth = useMediaQuery('(max-width:610px)')


    const open = Boolean(anchorEl)

    const { SKU, description, mark, price, stock, active } = row

    const handlerActive = () => {
        setChangeStatus( prev => !prev )
    }

    const getStatus = value => {
        return (changeStatus && (!value)) || ((!changeStatus) && value)
    }

    if( isMovilWidth ){
        return <>
            <TableRow>
                <TableCell colSpan={2}>
                    <b>SKU:</b> { SKU }
                </TableCell>
                <TableCell colSpan={4}>
                    { description }
                </TableCell>
                <TableCell colSpan={1}>
                    <IconButton onClick={(event)=>setAnchorEl(event.currentTarget)}>
                        <MoreVert />
                    </IconButton>
                    <Popover
                        open={open}
                        onClose={()=>setAnchorEl(false)}
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical:'bottom',
                            horizontal:'left'
                        }}
                        sx={{
                            borderRadius:4,
                            '.MuiMenuItem-root':{
                                width: 170
                            }
                        }}
                    >
                        <MenuItem sx={{ backgroundColor:'#fff0', px:3 }} onClick={handlerActive}>
                            { getStatus( active ) ? <CheckBox sx={{ pr:2 }} /> : <CheckBoxOutlineBlank sx={{ pr:2 }} /> }
                            { getStatus( active ) ? translate('deactive') : translate('active') }
                        </MenuItem>
                        <Divider />
                        <MenuItem sx={{ backgroundColor:'#fff0', px:3 }}>
                            <Edit sx={{ pr:2 }} /> {translate('edit')}
                        </MenuItem>
                        <Divider />
                        <MenuItem sx={{ backgroundColor:'#fff0', px:3 }}>
                            <Delete sx={{ pr:2 }} /> {translate('delete')}
                        </MenuItem>
                    </Popover>
                </TableCell>
            </TableRow>
            <TableRow sx={{ '.MuiTableCell-root':{ borderBottomWidth:5 } }}>
                <TableCell colSpan={2}>
                    <ListItem sx={{ py:0, my:0, fontWeight:'bold' }}>Mark:</ListItem>
                    <ListItem sx={{ py:0, my:0, fontWeight:'bold' }}>Price:</ListItem>
                    <ListItem sx={{ py:0, my:0, fontWeight:'bold' }}>Stock:</ListItem>
                </TableCell>
                <TableCell colSpan={4}>
                    <ListItem sx={{ py:0, my:0, justifyContent:'center' }}>{ mark }</ListItem>
                    <ListItem sx={{ py:0, my:0, justifyContent:'center' }}>{ price }</ListItem>
                    <ListItem sx={{ py:0, my:0, justifyContent:'center' }}>{ stock }</ListItem>
                </TableCell>
                <TableCell colSpan={1}>
                    { getStatus( active ) ? <Check sx={{ color:"#19c969" }} /> : <CheckBoxOutlineBlank sx={{ color:'#0005' }} />  }
                </TableCell>
            </TableRow>
        </>
    }
    else{
        return <TableRow key={SKU}>
            <TableCell>
                { SKU }
            </TableCell>
            <TableCell>
                { description }
            </TableCell>
            <TableCell>
                { mark }
            </TableCell>
            <TableCell>
                { price }
            </TableCell>
            <TableCell>
                { stock }
            </TableCell>
            <TableCell>
                { getStatus( active ) && <Check sx={{ color:"#19c969" }} />  }
            </TableCell>
            <TableCell>
                <IconButton onClick={(event)=>setAnchorEl(event.currentTarget)}>
                    <MoreVert />
                </IconButton>
                <Popover
                    open={open}
                    onClose={()=>setAnchorEl(false)}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical:'bottom',
                        horizontal:'left'
                    }}
                    sx={{
                        borderRadius:4,
                        '.MuiMenuItem-root':{
                            width: 170
                        }
                    }}
                >
                    <MenuItem sx={{ backgroundColor:'#fff0', px:3 }} onClick={handlerActive}>
                        { getStatus( active ) ? <CheckBox sx={{ pr:2 }} /> : <CheckBoxOutlineBlank sx={{ pr:2 }} /> }
                        { getStatus( active ) ? translate('deactive') : translate('active') }
                    </MenuItem>
                    <Divider />
                    <MenuItem sx={{ backgroundColor:'#fff0', px:3 }}>
                        <Edit sx={{ pr:2 }} /> {translate('edit')}
                    </MenuItem>
                    <Divider />
                    <MenuItem sx={{ backgroundColor:'#fff0', px:3 }}>
                        <Delete sx={{ pr:2 }} /> {translate('delete')}
                    </MenuItem>
                </Popover>
            </TableCell>
        </TableRow>
    }
}