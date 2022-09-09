import { useEffect, useState } from 'react'
import Chart from "react-apexcharts";

function App() {
  const [option, setOption] = useState({
    options: {
      chart: {
        type: 'line',
        zoom: {
          enabled: true
        }
      },
      stroke: {
        curve: 'smooth'
      },
    },
    series: [
      {
        name: "Line_01",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      },
      {
        name: "Line_02",
        data: [10, 41, 2, 35, 6, 69, 7, 148]
      },
      {
        name: "Line_03",
        data: [3, 60, 2, 100, 170, 80, 50, 100, 200,]
      }
    ]
  })

  const handleRandom = () => {
    for (var i = 0; i < 5; i++) {
      window['random' + i] = + Math.floor(Math.random() * 201);
    }
    const items = [...option.series]
    items.map((_, index) => items[index] = { ...items[index], data: [...items[index].data, window['random' + index]] })
    const newItem = { ...option, series: items }
    setOption(newItem)
  }


  return (
    <div className="App">
      <Chart
        options={option.options}
        series={option.series}
        type="line"
        width="800"
      />
      <button onClick={() => handleRandom()}>Update</button>
    </div>
  )
}

export default App
