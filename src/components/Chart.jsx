import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend)

const data = {
  labels: ['06:00','09:00','12:00','15:00','18:00','21:00'],
  datasets: [
    {
      label: 'ETH / INR',
      data: [15280,15300,15360,15420,15450,15416],
      tension: 0.3,
      fill: true,
      borderWidth: 2
    }
  ]
}

const options = {
  plugins: { legend: { display: false } },
  scales: {
    x: { grid: { display: false }, ticks: { color: '#9aa4b2' } },
    y: { grid: { color: 'rgba(255,255,255,0.03)' }, ticks: { color: '#9aa4b2' } }
  },
  maintainAspectRatio: false
}

export default function Chart() {
  return (
    <div style={{height:300}}>
      <Line data={data} options={options} />
    </div>
  )
}
