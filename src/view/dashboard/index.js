import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js'
import { Bar, Doughnut } from 'react-chartjs-2'
import { Grid, Typography } from '@mui/material'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement)

export const options = {
    responsive: true,
    // plugins: {
    //     legend: {
    //         position: 'top',
    //     },
    // title: {
    //     display: true,
    //     text: 'Yillik statistika',
    // },
    // },
}

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export const data = {
    labels,
    datasets: [
        {
            label: 'Yillik Statistika',
            data: [111, 142, 176, 131, 94, 131, 142, 207, 181, 152, 111, 168],
            backgroundColor: '#5932EA',
        },
    ],
}

export const data1 = {
    // labels: ['Red', 'Blue', 'Purple'],
    datasets: [
        {
            label: '# of Votes',
            data: [5, 10, 8],
            backgroundColor: ['#FF007A', '#5932EA', '#F1EFFB'],
            borderColor: ['#FF007A', '#5932EA', '#F1EFFB'],
            borderWidth: 1,
        },
    ],
}

const Dashboard = () => {
    return (
        <Grid container spacing={4}>
            <Grid item xl={6}>
                <Typography variant='h5'>Yillik Statistika</Typography>
                <Bar options={options} data={data} />
            </Grid>
            <Grid item xl={6}>
                <Typography variant='h5'>O’quvchilar</Typography>
                <Typography>Guruhdagi o’quchilar guruhi</Typography>
                <Doughnut data={data1} />
            </Grid>
        </Grid>
    )
}

export default Dashboard
