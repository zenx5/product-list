import {
    Box,
    Card,
    FormControlLabel,
    useMediaQuery,
    TextField,
    Stack,
    Typography,
    Button,
    Switch,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { BarNav, CustomBreadcrumbs } from "../../../components";
import { getProduct, setProduct } from "../../../redux/slices/product";



export default function Index(){
    const { id } = useParams()
    const [sku, setSku] = useState('')
    const [description, setDescription] = useState('')
    const [brand, setBrand] = useState('')
    const [price, setPrice] = useState('')
    const [active, setActive] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const dispatch = useDispatch()

    const { products, isLoading, product, createProduct } = useSelector((state) => state.product)

    console.log(products, isLoading, product)
    useEffect(()=>{
        dispatch(getProduct(id))
    },[id, dispatch])

    useEffect(() => {
        if (product) {
            setSku( prev => product.SKU )
            setDescription( prev => product.description )
            setBrand( prev => product.brand )
            setPrice( prev => product.price )
            setActive( prev => product.active )
        }
    }, [product])

    const { t:translate } = useTranslation()

    const breadcrumbs = [
        { href:'/test-visual-software', label:translate('catalog') },
        { href:'/test-visual-software', label:translate('product') },
        { href:'/test-visual-software', label:translate('new') },
    ]


    let mainColumnWidth = useMediaQuery('(max-width:1900px)') ? '1150px' : '1150px'
    mainColumnWidth = useMediaQuery('(max-width:1200px)') ? '900px' : mainColumnWidth
    mainColumnWidth = useMediaQuery('(max-width:900px)') ? '600px' : mainColumnWidth
    mainColumnWidth = useMediaQuery('(max-width:610px)') ? 'auto' : mainColumnWidth
    const isMovilWidth = useMediaQuery('(max-width:610px)')

    const handlerChange = key => (event) => {
        switch( key ){
            case 'sku':
                if( validateSKU(event.target.value) ){
                    setSku( prev => event.target.value )
                }else{
                    setErrorMessage( prev => translate('sku_used'))
                }
                break
            case 'description':
                setDescription(event.target.value);
                break
            case 'brand':
                setBrand(event.target.value);
                break
            case 'price':
                setPrice(event.target.value);
                break
            case 'active':
                setActive(event.target.checked);
                break
            default:
                // silent is golden
        }
    }

    const validateSKU = (value) => !!products?.find( item=>item.SKU===value )

    const handlerSave = () => {
        dispatch(setProduct({
            id,
            sku,
            description,
            brand,
            price,
            active
        }))
        setSku( prev => '' )
        setDescription( prev => '' )
        setBrand( prev => '' )
        setPrice( prev => '' )
        setActive( prev => false )
    }

    return <Box sx={{ backgroundColor:'#eeeeee', height:'100vh' }}>
        <CustomBreadcrumbs data-testid='breadcrumb' items={breadcrumbs} sx={{ width:mainColumnWidth, mx:'auto', py:3 }}/>
        <Card sx={{ width:mainColumnWidth, mx:'auto', py:3 }}>
            <Stack spacing={3} p={2}>
                <TextField
                    value={sku}
                    onChange={handlerChange('sku')}
                    placeholder={translate('sku')}
                    InputLabelProps={{shrink:true}}
                    label={translate('sku')}
                    helperText={<Typography sx={{color:'red'}}>{errorMessage}</Typography>}/>
                <TextField
                    value={description}
                    onChange={handlerChange('description')}
                    placeholder={translate('description')}
                    InputLabelProps={{shrink:true}}
                    label={translate('description')} />
                <TextField
                    value={brand}
                    onChange={handlerChange('brand')}
                    placeholder={translate('brand')}
                    InputLabelProps={{shrink:true}}
                    label={translate('brand')} />
                <TextField
                    value={price}
                    onChange={handlerChange('price')}
                    placeholder={translate('price')}
                    InputLabelProps={{shrink:true}}
                    inputProps={{type:'number'}}
                    label={translate('price')} />
                <FormControlLabel
                    value={active}
                    control={<Switch onChange={handlerChange('active')} />}
                    label={translate('active')}
                    labelPlacement='end' />
            </Stack>
            <Button variant='contained' sx={{ mx:2 }} onClick={handlerSave}>{translate('save')}</Button>
            <Button variant='outlined' component={NavLink} to='/test-visual-software' >{translate('back')}</Button>
        </Card>
    </Box>
}