import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { getRandomColors, getRandomNames, getRandomNumbers } from "./utils";
import Select from "./Select";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function App() {
  const [selectedYear, setSelectedYear] = useState("");
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    setChartData({
      labels: getRandomNames(6),
      datasets: [
        {
          data: getRandomNumbers(6),
          backgroundColor: getRandomColors(6),
          borderWidth: 4,
        },
      ],
    });
  }, [selectedYear]);

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <>
      {selectedYear && <Doughnut data={chartData} />}
      {!selectedYear && <h1>Select a year please</h1>}
      {selectedYear && <h1>Selected year is {selectedYear}</h1>}
      <Select handleYearChange={handleYearChange} selectedYear={selectedYear} />
    </>
  );
}
