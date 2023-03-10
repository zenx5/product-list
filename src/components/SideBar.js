import { useState } from "react";
import { MenuItem } from "@mui/material"
import { Apps, Business, Dashboard, Person, Redeem, ShoppingBasket, Store } from '@mui/icons-material';

export default function SideBar({ items }) {
    const [select, setSelect] = useState(0);

    const handlerSelectMenu = (value) => () => {
        setSelect(prev => value)
    }

    return <>
        <MenuItem onClick={handlerSelectMenu(0)}>
            <Dashboard sx={{ mx:'auto', py:1, opacity: select===0?1:0.5 }} />
        </MenuItem>
        <MenuItem onClick={handlerSelectMenu(1)}>
            <Business sx={{ mx:'auto', py:1, opacity: select===1?1:0.5 }} />
        </MenuItem>
        <MenuItem onClick={handlerSelectMenu(2)}>
            <Store sx={{ mx:'auto', py:1, opacity: select===2?1:0.5 }} />
        </MenuItem>
        <MenuItem onClick={handlerSelectMenu(3)}>
            <Person sx={{ mx:'auto', py:1, opacity: select===3?1:0.5 }} />
        </MenuItem>
        <MenuItem onClick={handlerSelectMenu(4)}>
            <Apps sx={{ mx:'auto', py:1, opacity: select===4?1:0.5 }} />
        </MenuItem>
        <MenuItem onClick={handlerSelectMenu(5)}>
            <Redeem sx={{ mx:'auto', py:1, opacity: select===5?1:0.5 }} />
        </MenuItem>
        <MenuItem onClick={handlerSelectMenu(6)}>
            <ShoppingBasket sx={{ mx:'auto', py:1, opacity: select===6?1:0.5 }} />
        </MenuItem>
    </>
}