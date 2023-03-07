import {
    Box,
    Card,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BarNav, CustomBreadcrumbs } from "../../../components";
import HeaderControls from "./HeaderControls";
import ProductRow from "./ProductRow";


export default function Index(){
    const [filterByActive, setFilterByActive] = useState(false)
    const [filterBySearch, setFilterBySearch] = useState('')
    const [dense] = useState(false)
    const [rows] = useState([
        {
            createdAt: "2023-03-04T01:20:28.913Z",
            SKU: 91944,
            description: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
            mark: "veritatis",
            price: "489.00",
            stock: 5,
            active:true,
            id: "1"
           },
           {
            createdAt: "2023-03-03T07:09:53.574Z",
            SKU: 51429,
            description: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
            mark: "modi",
            price: "78.00",
            stock: 10,
            active:false,
            id: "2"
           },
    ])
    const { t:translate } = useTranslation()

    const breadcrumbs = [
        { href:'/', label:'Catalogo' },
        { href:'/', label:'Productos' },
    ]

    const trans = key => translate( key )

    const handlerSearch = (event) => setFilterBySearch( prev => event.target.value )

    const handlerFilter = (event) => setFilterByActive( prev => event.target.checked )

    const filterActiveElements = item => filterByActive ? item.active : true

    const filterSearchInput = item => item.description.includes(filterBySearch)

    return <Box sx={{ backgroundColor:'#eeeeee', height:'100vh' }}>
        <BarNav />
        <CustomBreadcrumbs data-testid='breadcrumb' items={breadcrumbs} sx={{ width:'60%', mx:'auto', py:3 }}/>
        <TableContainer
            data-testid='table-product-list'
            component={Card}
            sx={{ borderRadius:3, width:'60%', mx:'auto' }}
        >
            <Table size={ dense ? 'small' : 'medium' }>
                <TableHead>
                    <HeaderControls onSearch={handlerSearch} onFilter={handlerFilter} />
                    <TableRow sx={{ fontWeight:'bold' }}>
                        <TableCell sx={{ width:'8%'}}>{trans('sku')}</TableCell>
                        <TableCell sx={{ width:'52%' }}>{trans('description')}</TableCell>
                        <TableCell sx={{ width:'8%'}}>{trans('mark')}</TableCell>
                        <TableCell sx={{ width:'8%'}}>{trans('price')}</TableCell>
                        <TableCell sx={{ width:'8%'}}>{trans('stok')}</TableCell>
                        <TableCell sx={{ width:'8%'}}>{trans('active')}</TableCell>
                        <TableCell sx={{ width:'8%'}}>{trans('options')}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody data-testid='table-content'>
                    { rows.filter(filterActiveElements).filter(filterSearchInput).map( row => <ProductRow key={row.SKU} row={row}/>)}
                </TableBody>
            </Table>
        </TableContainer>
    </Box>
}