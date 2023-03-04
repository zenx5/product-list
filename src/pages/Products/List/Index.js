import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow
} from "@mui/material";
import { useState } from "react";


export default function Index(){
    const [dense, setDense] = useState(false)
    const [rows, setRows] = useState([{sku:2}])

    return <Box>
        <TableContainer data-testid='table-product-list'>
            <Table size={ dense ? 'small' : 'medium' }>
                <TableBody data-testid='table-content'>
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
    </Box>
}