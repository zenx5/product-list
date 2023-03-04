import { Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import { useState } from "react";


export default function Index(){
    const [dense, setDense] = useState(false)
    const [rows, setRows] = useState([{sku:2}])

    return <TableContainer>
        <Table size={ dense ? 'small' : 'medium' }>
            <TableBody>
                { rows.map( row => <TableRow>
                    <TableCell>
                        { row.sku }
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
}