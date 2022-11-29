import { useDispatch, useSelector } from 'react-redux'
import { Box, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { changeMode } from '../../store'
import classNames from 'classnames'

const Navbar = () => {
    const dispatch = useDispatch()
    const { dark_mode } = useSelector(state => state.changeTheme)

    return (
        <Box display='flex' alignItems='center' justifyContent='space-between' width='100%'>
            <Box>
                <Typography color={classNames({ black: !dark_mode })}>Hello World</Typography>
            </Box>
            <Box display='flex' alignItems='center'>
                <IconButton onClick={() => dispatch(changeMode())}>
                    {dark_mode ? <LightModeOutlinedIcon /> : <DarkModeIcon />}
                </IconButton>
                <IconButton>
                    <AddCircleIcon />
                </IconButton>
                <IconButton>
                    <NotificationsNoneOutlinedIcon />
                </IconButton>
                <TextField
                    placeholder='Qidiruv'
                    variant='standard'
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position='start'>
                                <SearchOutlinedIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>
        </Box>
    )
}

export default Navbar
