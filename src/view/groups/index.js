import {
    Avatar,
    AvatarGroup,
    Box,
    Grid,
    IconButton,
    LinearProgress,
    Typography,
} from '@mui/material'
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined'
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined'
import PeopleIcon from '@mui/icons-material/People'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { CardBox, Cards } from '../../components'

const Groups = () => {
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
            name: 'Ketgan o’quvchilar',
            pay: '16% down',
            number: 10,
            status: 'success',
        },
        {
            icon: DesktopWindowsOutlinedIcon,
            name: 'Faol o’quvchilar',
            number: 54,
            status: 'success',
        },
    ]

    const colors = { blue: '#DBF6FD', pink: '#FEE4CB' }

    const cards = [
        { name: 'Frontent 010', number: 6, percent: 70, teacher: true, color: 'pink' },
        { name: 'Backend 001', number: 6, percent: 70, color: 'blue' },
        { name: 'Frontent 011', number: 6, percent: 70, color: 'pink' },
        { name: 'Frontent 013', number: 6, percent: 70, color: 'pink' },
        { name: 'Frontent 018', number: 6, percent: 70, color: 'pink' },
        { name: 'Backend 002', number: 6, percent: 70, color: 'blue' },
    ]

    return (
        <Box>
            <Cards items={items} />
            <CardBox sx={{ mt: 4 }}>
                <Box display='flex' justifyContent='space-between'>
                    <Typography variant='h5'>Guruhlar</Typography>
                    <Typography>Oktabr, 27</Typography>
                </Box>
                <Box sx={{ mt: 2, display: 'flex' }}>
                    {[
                        { num: 7, text: 'Faol Guruhlar' },
                        { num: 2, text: 'Tugatgan guruh' },
                        { num: 9, text: 'Umumiy guruh' },
                    ].map(({ num, text }, index) => (
                        <Box key={index} mr={3}>
                            <Typography variant='h5'>{num}</Typography>
                            <Typography>{text}</Typography>
                        </Box>
                    ))}
                </Box>
                <Grid container spacing={4} sx={{ color: 'black', mt: 1 }}>
                    {cards.map((card, index) => (
                        <Grid item md={4} key={index}>
                            <Box
                                sx={{
                                    bgcolor: colors[card.color],
                                    borderRadius: '25px',
                                    p: 4,
                                    height: '100%',
                                }}
                            >
                                <Box
                                    display='flex'
                                    justifyContent='space-between'
                                    alignItems='center'
                                >
                                    <Typography color='gray'>December 20, 2022</Typography>
                                    <IconButton>
                                        <MoreVertIcon sx={{ color: 'black' }} />
                                    </IconButton>
                                </Box>
                                <Box mt={3}>
                                    <Typography variant='h5' fontWeight={700}>
                                        {card.name}
                                    </Typography>
                                    <Typography>O'quvchilar soni: {card.number}</Typography>
                                    <Box mt={3}>
                                        <Typography fontWeight={700}>O'rtacha o'z</Typography>
                                        <LinearProgress
                                            value={card.percent}
                                            variant='determinate'
                                            color='warning'
                                        />
                                        <Typography textAlign='end'>{card.percent}%</Typography>
                                    </Box>
                                    {card.teacher && (
                                        <Box
                                            display='flex'
                                            justifyContent='space-between'
                                            alignItems='center'
                                            mt={3}
                                        >
                                            <Typography>O'qituvchi</Typography>
                                            <AvatarGroup max={5}>
                                                {[...new Array(3)].map((_, index) => (
                                                    <Avatar
                                                        key={index}
                                                        alt='Remy Sharp'
                                                        src='https://s.ws.pho.to/76eeee/img/index/ai/source.jpg'
                                                    />
                                                ))}
                                            </AvatarGroup>
                                        </Box>
                                    )}
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </CardBox>
        </Box>
    )
}

export default Groups
