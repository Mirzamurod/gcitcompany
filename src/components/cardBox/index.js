import { useSelector } from 'react-redux'
import { Box } from '@mui/material'

const CardBox = ({ children, sx }) => {
    const { dark_mode } = useSelector(state => state.changeTheme)

    return (
        <Box sx={sx} className={`fon ${dark_mode ? 'dark' : 'light'}`}>
            {children}
        </Box>
    )
}

export default CardBox
