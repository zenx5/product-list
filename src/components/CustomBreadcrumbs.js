import { Link, Breadcrumbs } from "@mui/material"

export default function CustomBreadcrumbs({ items = [], separator = '>', onClick }){
    return <Breadcrumbs separator={separator}>
        { items.map(
            (item, index) =>
            <Link
                underline="hover"
                key={`breadcrumb-${index}`}
                href={item.href}
                onClick={()=>onClick && onClick(item)}
            > { item.label } </Link>) }
    </Breadcrumbs>
}