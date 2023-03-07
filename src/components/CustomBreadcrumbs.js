import { Business } from "@mui/icons-material"
import { Box, Link, Breadcrumbs, IconButton } from "@mui/material"

export default function CustomBreadcrumbs({ items = [], separator = '>', onClick, ...other }){
    return <Box sx={{ ...other.sx, display:'flex', flexDirection:'row' }} {...other}>
        <IconButton>
            <Business />
        </IconButton>
        <Breadcrumbs sx={{ display:'inline-flex' }} separator={separator}>
            { items.map(
                (item, index) => (index===items.length-1) ?
                <Link
                    underline="hover"
                    key={`breadcrumb-${index}`}
                    href={item.href}
                    onClick={()=>onClick && onClick(item)}
                > { item.label } </Link>
                : <Link
                    underline="hover"
                    key={`breadcrumb-${index}`}
                    href={item.href}
                    color='#6d6d6d'
                    onClick={()=>onClick && onClick(item)}
                > { item.label } </Link>
            )}
        </Breadcrumbs>
    </Box>
}