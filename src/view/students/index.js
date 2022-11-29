import { useState } from 'react'
import {
    Box,
    Button,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    MenuItem,
    Modal as Modal1,
    Select,
    TextField,
    Typography,
} from '@mui/material'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined'
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import PeopleIcon from '@mui/icons-material/People'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { CardBox, Cards, InputOptions } from '../../components'
import data from './data'
import Table from './Table'

const Students = () => {
    const formSchema = Yup.object().shape({
        first_name: Yup.string().required('First name required'),
        last_name: Yup.string().required('Last name required'),
        direction: Yup.string().required('Price required'),
        phone_number: Yup.string().required('Phone number required'),
        pay: Yup.string().required('Pay required'),
        group: Yup.string().required('Group required'),
        show: Yup.boolean(),
    })
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm({ mode: 'onTouched', resolver: yupResolver(formSchema) })
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(5)
    const [students, setStudents] = useState(data)
    const [status, setStatus] = useState('faol')
    const [search, setSearch] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [choose, setChoose] = useState(false)
    const [idStatus, setIdStatus] = useState({})

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - students.length) : 0

    const items = [
        {
            icon: PeopleIcon,
            name: 'Hamma o’quvchilar',
            pay: '16% up',
            number: 125,
            status: 'success',
        },
        {
            icon: Person2OutlinedIcon,
            name: 'Bitirgan o’quvchilar',
            number: 61,
            status: 'success',
        },
        {
            icon: Person2OutlinedIcon,
            name: 'Ketgan O’quvchilar',
            pay: '1% down',
            number: 10,
            status: 'error',
        },
        {
            icon: DesktopWindowsOutlinedIcon,
            name: 'Faol o’quvchilar',
            number: 54,
            avatars: [
                'https://s.ws.pho.to/76eeee/img/index/ai/source.jpg',
                'https://s.ws.pho.to/76eeee/img/index/ai/source.jpg',
                'https://s.ws.pho.to/76eeee/img/index/ai/source.jpg',
                'https://s.ws.pho.to/76eeee/img/index/ai/source.jpg',
                'https://s.ws.pho.to/76eeee/img/index/ai/source.jpg',
            ],
            status: 'success',
        },
    ]

    const columns = [
        {
            name: 'F.I.O',
            selecter: 'fio',
            cell: (row, index) => `${row.first_name} ${row.last_name}`,
        },
        { name: "Yo'nalish", selecter: 'direction' },
        { name: 'Telefon nomer', selecter: 'phone_number' },
        { name: "To'lov", selecter: 'pay' },
        { name: 'Guruh', selecter: 'group' },
        {
            name: 'Status',
            selecter: 'status',
            cell: (row, index) => (
                <Button
                    variant='outlined'
                    color={row.status === 'active' ? 'success' : 'error'}
                    onClick={() => changeStatus(row.id, row.status)}
                >
                    {row.status}
                </Button>
            ),
        },
        {
            name: '',
            selecter: 'editdelete',
            cell: (row, index) => (
                <Box>
                    <IconButton onClick={() => edit(row)}>
                        <EditIcon />
                    </IconButton>
                    <IconButton
                        onClick={() => {
                            const students1 = students.filter(student => row.id !== student.id)
                            setStudents([...students1])
                        }}
                    >
                        <DeleteIcon />
                    </IconButton>
                </Box>
            ),
        },
    ]

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0)
    }

    function changeStatus(id, status) {
        let arr = []
        students.forEach(student => {
            if (student.id === id)
                arr.push({ ...student, status: status === 'active' ? 'inactive' : 'active' })
            else arr.push(student)
        })

        setStudents([...arr])
    }

    const filteredStudents = students.filter(
        contact => contact.first_name.toLowerCase().indexOf(search.toLowerCase()) !== -1
    )

    const inputs = [
        { name: 'first_name', label: 'First name' },
        { name: 'last_name', label: 'Last name' },
        { name: 'direction', label: 'Direction' },
        { name: 'phone_number', label: 'Phone number' },
        { name: 'pay', label: 'Pay' },
        { name: 'group', label: 'Group' },
    ]

    const edit = values => {
        Object.keys(values).forEach(key => setValue(key, values[key]))
        setIdStatus({ id: values.id, status: values.status })
        setChoose(true)
        setIsOpen(true)
    }

    const onSubmit = values => {
        if (choose) {
            let arr = []
            students.forEach(student => {
                if (student.id === idStatus.id) {
                    arr.push({ ...idStatus, ...values })
                } else arr.push(student)
            })
            setStudents([...arr])
        } else {
            students.unshift({ id: Math.random(), ...values, status: 'inactive' })
            setStudents([...students])
        }
        setIsOpen(false)
        setChoose(false)
        inputs.forEach(({ name }) => setValue(name, ''))
    }

    return (
        <Box>
            <Cards items={items} />
            <Box mt={4}>
                <CardBox>
                    <Box display='flex' justifyContent='space-between' mb={3}>
                        <Box>
                            <Typography variant='h5'>Hamma O'quvchilar</Typography>
                            <Typography color='green'>Faol o'quvchilar</Typography>
                        </Box>
                        <Box display='flex'>
                            <TextField
                                placeholder='Qidiruv'
                                sx={{ mr: 2 }}
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                inputProps={{
                                    startAdornment: (
                                        <InputAdornment position='start'>
                                            <SearchOutlinedIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <FormControl fullWidth sx={{ mr: 2 }}>
                                <InputLabel id='demo-simple-select-label'>Age</InputLabel>
                                <Select
                                    labelId='demo-simple-select-label'
                                    id='demo-simple-select'
                                    value={status}
                                    label='Age'
                                    onChange={e => setStatus(e.target.value)}
                                >
                                    <MenuItem value='faol'>Faol</MenuItem>
                                    <MenuItem value='faolemas'>Faol emas</MenuItem>
                                </Select>
                            </FormControl>
                            <Button
                                color='success'
                                fullWidth
                                variant='outlined'
                                onClick={() => setIsOpen(true)}
                            >
                                Add student
                            </Button>
                        </Box>
                    </Box>
                    <Table
                        columns={columns}
                        rowsPerPage={rowsPerPage}
                        filteredStudents={filteredStudents}
                        page={page}
                        emptyRows={emptyRows}
                        handleChangeRowsPerPage={handleChangeRowsPerPage}
                        setPage={setPage}
                    />
                </CardBox>
            </Box>
            <Modal1
                open={isOpen}
                onClose={() => setIsOpen(false)}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <Box
                    component='form'
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'background.paper',
                        width: '25%',
                        p: 4,
                    }}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Typography variant='h5'>Add student</Typography>
                    <InputOptions options={inputs} register={register} errors={errors} />
                    <Box sx={{ textAlign: 'end' }}>
                        <Button type='submit' color='success' variant='outlined' sx={{ mr: 2 }}>
                            save
                        </Button>
                        <Button type='submit' color='error' variant='outlined'>
                            Cancel
                        </Button>
                    </Box>
                </Box>
            </Modal1>
        </Box>
    )
}

export default Students
