// import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

//cost

const emptyarr1: any[] = [];
const emptyarr2: any[] = [];

const genRand = (max: any, min: any) => {
  return Math.floor(Math.random() * (max - min));
};

//items
const genAlphabet = "eddfghjkuytrghjklkjh";

Array.from({ length: 10 }, () => {
  emptyarr1.push({
    cost: genRand(90, 20),
  });

  emptyarr2.push({
    items: genAlphabet[Math.floor(Math.random() * genAlphabet.length)],
  });
});

export const data: any = {
  labels: emptyarr2.map((el: any) => el.items),
  datasets: [
    {
      label: "Dataset 1",
      data: emptyarr1.map((el: any) => el.cost),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export function Barchat() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Bar options={options} data={data} />
      {/* <div>
        <p>{JSON.stringify(emptyarr1.map((el) => el.cost))}</p>
        <p>{JSON.stringify(emptyarr2.map((el) => el.items))}</p>
      </div> */}
    </div>
  );
}
