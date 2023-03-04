import {
    Box,
    Button,
    Card,
    FormControl,
    FormControlLabel,
    Switch,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField
} from "@mui/material";
import { useState } from "react";
import { CustomBreadcrumbs } from "../../../components";


export default function Index(){
    const [dense, setDense] = useState(false)
    const [rows, setRows] = useState([
        {
            createdAt: "2023-03-04T01:20:28.913Z",
            SKU: 91944,
            description: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
            mark: "veritatis",
            price: "489.00",
            stock: 5,
            id: "1"
           },
           {
            createdAt: "2023-03-03T07:09:53.574Z",
            SKU: 51429,
            description: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
            mark: "modi",
            price: "78.00",
            stock: 10,
            id: "2"
           },
    ])
    const breadcrumbs = [
        { href:'/', label:'Catalogo' },
        { href:'/', label:'Productos' },
    ]

    const trans = key => key

    return <Box sx={{ backgroundColor:'#f0f0f0', height:'100vh' }}>
        <CustomBreadcrumbs items={breadcrumbs}/>
        <TableContainer
            data-testid='table-product-list'
            component={Card}
            sx={{ borderRadius:2, width:'80%', mx:'auto' }}
        >
            <Table size={ dense ? 'small' : 'medium' }>
                <TableHead>
                {/* <Box
                    sx={{
                        display:'grid',
                        width:'100%',
                        m:0,
                        p:0,
                        border:'1px solid red'
                    }}
                    gap={1}
                    gridTemplateColumns={{
                    xs: `repeat(3, 1fr)`,
                    sm: `minmax(3, 1fr)`,
                    md: `minmax(3, 1fr)`,
                    }}
                    > */}
                    <TableRow>
                        <TableCell colSpan={2}>
                            <TextField
                                InputProps={{
                                    startAdornment:'S'
                                }}
                                placeholder={trans('placeholder_search_reg')}
                            />
                        </TableCell>
                        <TableCell colSpan={2}>
                            <FormControlLabel control={<Switch />} label={trans('select_active')} labelPlacement='start' />
                        </TableCell>
                        <TableCell colSpan={3}>
                            <Button variant='contained' sx={{borderRadius:10}} startIcon='+'>{trans('new_product')}</Button>
                        </TableCell>
                    </TableRow>
                    {/* </Box> */}
                    <TableRow>
                        <TableCell>{trans('sku')}</TableCell>
                        <TableCell>{trans('description')}</TableCell>
                        <TableCell>{trans('mark')}</TableCell>
                        <TableCell>{trans('price')}</TableCell>
                        <TableCell>{trans('stok')}</TableCell>
                        <TableCell>{trans('status')}</TableCell>
                        <TableCell>{trans('options')}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody data-testid='table-content'>
                    { rows.map( row => <TableRow>
                        <TableCell>
                            { row.SKU }
                        </TableCell>
                        <TableCell>
                            { row.description }
                        </TableCell>
                        <TableCell>
                            { row.mark }
                        </TableCell>
                        <TableCell>
                            { row.price }
                        </TableCell>
                        <TableCell>
                            { row.stock }
                        </TableCell>
                        <TableCell>
                            { row.status }
                        </TableCell>
                        <TableCell>
                            options
                        </TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
        </TableContainer>
    </Box>
}