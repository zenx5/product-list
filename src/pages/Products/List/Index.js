import {
    Box,
    Card,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { BarNav, CustomBreadcrumbs } from "../../../components";
import { getProducts } from "../../../redux/slices/product";
import HeaderControls from "./HeaderControls";
import ProductRow from "./ProductRow";


export default function Index(){
    const [filterByActive, setFilterByActive] = useState(false)
    const [filterBySearch, setFilterBySearch] = useState('')
    const [dense] = useState(false)
    // const [rows, setRows] = useState([])
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

    // const dispatch = useDispatch()

    // const { products, isLoading } = useSelector((state) => state.product)

    // useEffect(()=>{
    //     dispatch(getProducts())
    // },[dispatch])

    // useEffect(() => {
    //     if (products.length) {
    //       setRows(products)
    //     }
    // }, [products])

    const { t:translate } = useTranslation()

    const breadcrumbs = [
        { href:'/', label:'Catalogo' },
        { href:'/', label:'Productos' },
    ]


    let mainColumnWidth = useMediaQuery('(max-width:1900px)') ? '1150px' : '1150px'
    mainColumnWidth = useMediaQuery('(max-width:1200px)') ? '900px' : mainColumnWidth
    mainColumnWidth = useMediaQuery('(max-width:900px)') ? '600px' : mainColumnWidth
    mainColumnWidth = useMediaQuery('(max-width:610px)') ? 'auto' : mainColumnWidth
    // mainColumnWidth = useMediaQuery('(max-width:320px)') ? '800px' : mainColumnWidth
    const isMovilWidth = useMediaQuery('(max-width:610px)')
    console.log('mainColumnWidth', mainColumnWidth)
    const trans = key => translate( key )

    const handlerSearch = ({ target:{value}}) => setFilterBySearch( prev => value )

    const handlerFilter = ({ target:{checked}}) => setFilterByActive( prev => checked )

    const filterActiveElements = item => filterByActive ? item.active : true

    const filterSearchInput = item => item.description.includes(filterBySearch)

    return <Box sx={{ backgroundColor:'#eeeeee', height:'100vh' }}>
        <CustomBreadcrumbs data-testid='breadcrumb' items={breadcrumbs} sx={{ width:mainColumnWidth, mx:'auto', py:3 }}/>
        <TableContainer
            data-testid='table-product-list'
            component={Card}
            sx={{ borderRadius:3, width:mainColumnWidth, mx:'auto' }}
        >
            <Table size='medium' sx={{ width:'100%', p:0, m:0 }}>
                <TableHead sx={{ p:0, m:0 }}>
                    <HeaderControls onSearch={handlerSearch} onFilter={handlerFilter} />
                    {!isMovilWidth && <TableRow sx={{ width:'100%', fontWeight:'bold' }}>
                        <TableCell>{trans('sku')}</TableCell>
                        <TableCell>{trans('description')}</TableCell>
                        <TableCell>{trans('mark')}</TableCell>
                        <TableCell>{trans('price')}</TableCell>
                        <TableCell>{trans('stock')}</TableCell>
                        <TableCell>{trans('active')}</TableCell>
                        <TableCell sx={{width:'auto'}}>{trans('options')}</TableCell>
                    </TableRow>}
                </TableHead>
                <TableBody data-testid='table-content'>
                    { rows.filter(filterActiveElements).filter(filterSearchInput).map( row => <ProductRow key={row.SKU} row={row}/>)}
                </TableBody>
            </Table>
        </TableContainer>
    </Box>
}