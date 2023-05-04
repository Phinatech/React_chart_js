// import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const myData: any[] = [];
const myitem: any[] = [];

//for the cost
const Rand = (max: any, min: any) => {
  return Math.floor(Math.random() * (max - min));
};

//for the price
const genLetter = "aaacbnhgfghjkkkkkkk";

Array.from({ length: 10 }, () => {
  myData.push({
    cost1: Rand(90, 10),
    cost2: Rand(90, 10),
    cost3: Rand(90, 10),
    cost4: Rand(90, 10),
    cost6: Rand(90, 10),
    cost7: Rand(90, 10),
  });

  myitem.push({
    items: genLetter[Math.floor(Math.random() * genLetter.length)],
  });
});

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

export const data = {
  labels: userdata.map((el) => el.items),

  datasets: [
    {
      label: "Prices",
      data: [
        myData.map((el) => el.cost1).reduce((a, b) => a + b),
        myData.map((el) => el.cost2).reduce((a, b) => a + b),
        myData.map((el) => el.cost3).reduce((a, b) => a + b),
        myData.map((el) => el.cost4).reduce((a, b) => a + b),
        myData.map((el) => el.cost5).reduce((a, b) => a + b),
        myData.map((el) => el.cost6).reduce((a, b) => a + b),
      ],
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
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Doughnut data={data} />
    </div>
  );
}
