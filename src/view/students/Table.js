import {
    TableContainer,
    Table as Table1,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TableFooter,
    TablePagination,
    useTheme,
    Box,
    IconButton,
} from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import FirstPageIcon from '@mui/icons-material/FirstPage'
import LastPageIcon from '@mui/icons-material/LastPage'

function TablePaginationActions(props) {
    const theme = useTheme()
    const { count, page, rowsPerPage, onPageChange } = props

    const handleFirstPageButtonClick = event => onPageChange(event, 0)

    const handleBackButtonClick = event => onPageChange(event, page - 1)

    const handleNextButtonClick = event => onPageChange(event, page + 1)

    const handleLastPageButtonClick = event =>
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1))

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label='first page'
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label='previous page'
            >
                {theme.direction === 'rtl' ? <ArrowForwardIosIcon /> : <ArrowBackIosIcon />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label='next page'
            >
                {theme.direction === 'rtl' ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label='last page'
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    )
}

const Table = ({
    columns,
    rowsPerPage,
    filteredStudents,
    page,
    emptyRows,
    handleChangeRowsPerPage,
    setPage,
}) => {
    return (
        <TableContainer>
            <Table1 stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>№</TableCell>
                        {columns.map((column, index) => (
                            <TableCell key={index}>{column.name}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(rowsPerPage > 0
                        ? filteredStudents.slice(
                              page * rowsPerPage,
                              page * rowsPerPage + rowsPerPage
                          )
                        : filteredStudents
                    ).map((student, indexD) => (
                        <TableRow key={indexD} hover tabIndex={-1}>
                            <TableCell width={100}>{page * rowsPerPage + indexD + 1}</TableCell>
                            {columns.map((column, indexC) => (
                                <TableCell
                                    key={indexC}
                                    align={column?.align}
                                    className={column?.className}
                                    width={column?.width}
                                >
                                    {column.cell
                                        ? column.cell(student, indexD)
                                        : student[column.selecter]}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            colSpan={columns.length + 1}
                            count={filteredStudents.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{ native: true }}
                            onPageChange={(event, newPage) => setPage(newPage)}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
            </Table1>
        </TableContainer>
    )
}

export default Table
