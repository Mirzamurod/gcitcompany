import { Avatar, AvatarGroup, Box, Grid, Typography } from '@mui/material'
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined'
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined'
import { CardBox } from '../'

const Cards = ({ items }) => {
    const colors = {
        success: 'linear-gradient(201.18deg, #D3FFE7 3.14%, #EFFFF6 86.04%)',
        error: 'linear-gradient(201.18deg, #FFA3CF 3.14%, #FFD5F3 86.04%)',
    }

    return (
        <CardBox>
            <Grid container spacing={3}>
                {items.map((item, index) => (
                    <Grid item md={12 / items.length} key={index}>
                        <Box display='flex'>
                            <Box
                                display='flex'
                                justifyContent='center'
                                alignItems='center'
                                width='90px'
                                height='90px'
                                borderRadius='50%'
                                sx={{ background: colors[item.status] }}
                            >
                                <item.icon fontSize='large' color={item.status} />
                            </Box>
                            <Box ml={2} my='auto'>
                                <Typography>{item.name}</Typography>
                                <Typography variant='h5'>{item.number} ta</Typography>
                                {item.pay && (
                                    <Typography display='flex' alignItems='center'>
                                        {item.pay.split(' ')[1] === 'up' ? (
                                            <ArrowUpwardOutlinedIcon color='success' />
                                        ) : (
                                            <ArrowDownwardOutlinedIcon color='error' />
                                        )}
                                        <Box
                                            component='span'
                                            color={
                                                item.pay.split(' ')[1] === 'up' ? 'green' : 'red'
                                            }
                                            mr={1}
                                        >
                                            {item.pay.split(' ')[0]}
                                        </Box>
                                        Oylik
                                    </Typography>
                                )}
                                {item?.avatars?.length && (
                                    <AvatarGroup max={5}>
                                        {item.avatars.map((avatar, index) => (
                                            <Avatar key={index} alt='Remy Sharp' src={avatar} />
                                        ))}
                                    </AvatarGroup>
                                )}
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </CardBox>
    )
}

export default Cards
