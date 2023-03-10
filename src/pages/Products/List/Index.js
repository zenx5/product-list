import {
    Box,
    Card,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TablePagination,
    useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BarNav, CustomBreadcrumbs } from "../../../components";
import { getProducts, setProduct, deleteProduct } from "../../../redux/slices/product";
import HeaderControls from "./HeaderControls";
import ProductRow from "./ProductRow";


export default function Index(){
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [filterByActive, setFilterByActive] = useState(false)
    const [filterBySearch, setFilterBySearch] = useState('')
    const [dense] = useState(false)
    const [rows, setRows] = useState([])

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const { products, isLoading } = useSelector((state) => state.product)

    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])

    useEffect(() => {
        if (products.length) {
          setRows(products)
        }
    }, [products])

    const { t:translate } = useTranslation()

    const breadcrumbs = [
        { href:'/', label:translate('catalog') },
        { href:'/', label:translate('product') },
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

    const handlerChangePage = (event, newPage) => {
        setPage(newPage);
    }

     const handlerChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    }

    const handlerEdit = id => {
        navigate(`/edit/${id}`)
    }

    const handlerDelete = id => {
        dispatch(deleteProduct(id))
    }

    const handlerUpdateState = (row) => {
        dispatch(setProduct({...row, active:!row.active}))
    }

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
                        <TableCell sx={{ width:'615px'}}>{trans('description')}</TableCell>
                        <TableCell>{trans('brand')}</TableCell>
                        <TableCell>{trans('price')}</TableCell>
                        <TableCell>{trans('stock')}</TableCell>
                        <TableCell>{trans('active')}</TableCell>
                        <TableCell sx={{width:'auto'}}>{trans('options')}</TableCell>
                    </TableRow>}
                </TableHead>
                <TableBody data-testid='table-content'>
                    {
                        rows
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .filter(filterActiveElements)
                        .filter(filterSearchInput)
                        .map( row =>
                            <ProductRow
                                key={row.SKU}
                                row={row}
                                onEdit={()=>handlerEdit(row.id)}
                                onDelete={()=>handlerDelete(row.id)}
                                onUpdateState={()=>handlerUpdateState(row)}
                                 />)
                    }
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                sx={{ width:mainColumnWidth, mx:'auto', py:3 }}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handlerChangePage}
                onRowsPerPageChange={handlerChangeRowsPerPage}
            />
        </TableContainer>
    </Box>
}