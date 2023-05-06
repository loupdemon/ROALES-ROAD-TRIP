import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import './style.scss';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
const axios = require('axios');

export const options = {
    // responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
    },
    scales: {
        y: {
            // beginAtZero: true
        }
    }
};

class LineChart extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            chart: {
                labels: [],
                datasets: [
                    {
                        label: '',
                        data: [],
                        borderColor: '#576DD1',
                        backgroundColor: '#576DD1',
                        tension: 0.3,
                    }
                ],
            },
            crypto: props?.crypto
        }
        this.getDailyHistory("minute")
    }

    getDailyHistory(historyType) {
        axios.get(`http://localhost:8800/api/v1/cryptos/${this.state.crypto?.id}/history/${historyType}`)
            .then(res => {
                const responseData = res.data;
                const labels = responseData.map((item) => item.time)
                const data = responseData.map((item) => item.price)
                this.updateChart(labels, data)
            }).catch(function (error) {
                console.log(error)
            });
    }

    updateChart(labels, data) {
        this.setState({
            chart: {
                labels,
                datasets: [
                    {
                        label: '',
                        data,
                        borderColor: '#576DD1',
                        backgroundColor: '#576DD1',
                        tension: 0.3,
                    }
                ],
            }
        })
    }

    render() {
        return (
            <>
                <div className="buttons">
                    <button onClick={() => this.getDailyHistory("minute")}>Minutes</button>
                    <button onClick={() => this.getDailyHistory("hourly")}>Heures</button>
                    <button onClick={() => this.getDailyHistory("daily")}>Jours</button>
                </div>
                <Line options={options} data={this.state.chart} />
            </>
        );
    }
}

export default LineChart