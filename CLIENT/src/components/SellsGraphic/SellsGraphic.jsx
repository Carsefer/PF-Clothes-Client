import React from 'react';
import { Chart as ChartJS,
         CategoryScale,
         LinearScale,
         PointElement,
         LineElement,
         Title,
         Tooltip,
         Legend,
         Filler } from "chart.js";

import { Line } from "react-chartjs-2"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
)

const SellsGraphic = ({ sells, days }) => {

    const labels = days

    const data = {
        datasets: [
            {
                label: "Gráfica de ventas",
                data: sells
            },
        ],
        labels
    }
    const options = {
        responsive: true
    }

    return (
        <div>
            <Line data={data} options={options}/>
        </div>
    );
};

export default SellsGraphic;