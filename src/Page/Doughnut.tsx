// import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
const userdata = [
  {
    cost: 1000,
    items: "Rice",
  },
  {
    cost: 2000,
    items: "Beans",
  },
  {
    cost: 5000,
    items: "Yam",
  },
  {
    cost: 7000,
    items: "Potatoes",
  },
  {
    cost: 4000,
    items: "Maggi",
  },
  {
    cost: 3000,
    items: "semo",
  },
];

// console.log("This is the data", userdata);

export const data = {
  labels: userdata.map((el) => el.items),

  datasets: [
    {
      label: "Prices",
      data: userdata.map((el) => el.cost),
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export function Dough() {
  return <Doughnut data={data} />;
}
