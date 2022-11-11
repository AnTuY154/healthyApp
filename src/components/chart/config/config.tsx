export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: false
    }
  },
  scales: {
    y: {
      display: false,
      grid: {
        display: false
      }
    },
    x: {
      ticks: {
        color: '#FFFFFF',
        font: {
          size: 12,
          family: 'Hiragino Kaku Gothic Pro'
        }
      },
      grid: {
        color: '#777777',
        drawBorder: false
      }
    }
  },
  maintainAspectRatio: false
}
