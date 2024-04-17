import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.defaults.font.family = 'Geist Variable';

const chartData: ChartData<'doughnut', number[]> = {
    labels: ['TypeScript JSX', 'SCSS', 'TypeScript'],
    datasets: [
        {
            label: 'linie kodu',
            data: [768, 531, 248],
            backgroundColor: [
                'rgba(44, 126, 161, 0.5)',
                'rgba(198, 83, 140, 0.5)',
                'rgba(49, 120, 198, 0.5)',
            ],
            borderColor: [
                'rgba(44, 126, 161, 1)',
                'rgba(198, 83, 140, 1)',
                'rgba(49, 120, 198, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

function CodeChart() {
    return <Doughnut data={chartData} />;
}

export default CodeChart;
