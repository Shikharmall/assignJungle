import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import data from "../db/data";
import { format } from 'date-fns';

const LineCart = () => {
  const randomObjects = [
    {
      name: "Uttar Pradesh",
      value: 200,
      population: "199,812,341",
      temperature: 39.3,
      fundPerformance: [10000, 15000, 9000, 13000, 20000],
      assetAllocation: [
        { asset: "Domestic Equity", percentage: 30 },
        { asset: "International Equity", percentage: 20 },
        { asset: "Bonds", percentage: 30 },
        { asset: "Cash", percentage: 20 },
      ],
    },
    {
      name: "Maharashtra",
      value: 150,
      population: "112,374,333",
      temperature: 31.9,
      fundPerformance: [13000, 15000, 19000, 63000, 13000],
      assetAllocation: [
        { asset: "Domestic Equity", percentage: 40 },
        { asset: "International Equity", percentage: 20 },
        { asset: "Bonds", percentage: 25 },
        { asset: "Cash", percentage: 15 },
      ],
    },
    {
      name: "Madhya Pradesh",
      value: 120,
      population: "72,626,809",
      temperature: 36.9,
      fundPerformance: [20000, 35000, 9600, 13700, 25500],
      assetAllocation: [
        { asset: "Domestic Equity", percentage: 35 },
        { asset: "International Equity", percentage: 15 },
        { asset: "Bonds", percentage: 30 },
        { asset: "Cash", percentage: 20 },
      ],
    },
    {
      name: "Tamil Nadu",
      value: 100,
      population: "72,147,030",
      temperature: 37.3,
      fundPerformance: [30000, 23000, 98000, 25000, 65000],
      assetAllocation: [
        { asset: "Domestic Equity", percentage: 50 },
        { asset: "International Equity", percentage: 15 },
        { asset: "Bonds", percentage: 25 },
        { asset: "Cash", percentage: 10 },
      ],
    },
    {
      name: "Karnataka",
      value: 80,
      population: "61,095,297",
      temperature: 28.9,
      fundPerformance: [11500, 16500, 8900, 12800, 20500],
      assetAllocation: [
        { asset: "Domestic Equity", percentage: 45 },
        { asset: "International Equity", percentage: 20 },
        { asset: "Bonds", percentage: 25 },
        { asset: "Cash", percentage: 10 },
      ],
    },
    {
      name: "Gujarat",
      value: 70,
      population: "60,439,692",
      temperature: 20.1,
      fundPerformance: [12500, 17500, 9300, 13600, 19000],
      assetAllocation: [
        { asset: "Domestic Equity", percentage: 40 },
        { asset: "International Equity", percentage: 20 },
        { asset: "Bonds", percentage: 30 },
        { asset: "Cash", percentage: 10 },
      ],
    },
    {
      name: "Punjab",
      value: 60,
      population: "27,743,338",
      temperature: 24.3,
      fundPerformance: [13000, 14500, 9700, 15000, 22000],
      assetAllocation: [
        { asset: "Domestic Equity", percentage: 50 },
        { asset: "International Equity", percentage: 15 },
        { asset: "Bonds", percentage: 25 },
        { asset: "Cash", percentage: 10 },
      ],
    },
    {
      name: "Tripura",
      value: 50,
      population: "3,673,917",
      temperature: 25.1,
      fundPerformance: [10800, 15800, 9400, 13700, 20300],
      assetAllocation: [
        { asset: "Domestic Equity", percentage: 30 },
        { asset: "International Equity", percentage: 20 },
        { asset: "Bonds", percentage: 30 },
        { asset: "Cash", percentage: 20 },
      ],
    },
    {
      name: "Mizoram",
      value: 40,
      population: "1,097,206",
      temperature: 26.4,
      fundPerformance: [11200, 15200, 9100, 13400, 19700],
      assetAllocation: [
        { asset: "Domestic Equity", percentage: 35 },
        { asset: "International Equity", percentage: 15 },
        { asset: "Bonds", percentage: 30 },
        { asset: "Cash", percentage: 20 },
      ],
    },
    {
      name: "Ladakh",
      value: 30,
      population: "274,000",
      temperature: 21.1,
      fundPerformance: [11800, 16800, 8800, 14200, 21200],
      assetAllocation: [
        { asset: "Domestic Equity", percentage: 40 },
        { asset: "International Equity", percentage: 15 },
        { asset: "Bonds", percentage: 30 },
        { asset: "Cash", percentage: 15 },
      ],
    },
  ];
  const mainLabels = randomObjects.map((item) => item.name);

  const mainDatas1 = randomObjects[0]?.fundPerformance;
  const mainDatas2 = randomObjects[1]?.fundPerformance;
  const mainDatas3 = randomObjects[2]?.fundPerformance;
  const mainDatas4 = randomObjects[3]?.fundPerformance;
  const mainDatas5 = randomObjects[4]?.fundPerformance;

  const year = [2019, 2020, 2021, 2022, 2023];

  const data1 = {
    labels: year,
    datasets: [
      {
        label: mainLabels[0],
        data: mainDatas1,
        fill: false,
        borderColor: "red",
        borderWidth: 2,
      },
      {
        label: mainLabels[1],
        data: mainDatas2,
        fill: false,
        borderColor: "blue",
        borderWidth: 2,
      },
      {
        label: mainLabels[2],
        data: mainDatas3,
        fill: false,
        borderColor: "green",
        borderWidth: 2,
      },
      {
        label: mainLabels[3],
        data: mainDatas4,
        fill: false,
        borderColor: "yellow",
        borderWidth: 2,
      },
      {
        label: mainLabels[4],
        data: mainDatas5,
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
      },
    ],
  };

  const timestamps = data.map((entry) => new Date(entry.timestamp));
  const formattedTimestamps = data.map(entry =>
    format(new Date(entry.timestamp), 'dd MMM HH:mm:ss')
  );
  const flowIds = data.map((entry) => entry.flow_id);
  const srcPorts = data.map((entry) => entry.src_port);
  const destPorts = data.map((entry) => entry.dest_port);
  const signatureIds = data.map((entry) => entry.alert?.signature_id);
  const categories = data.map((entry) => entry.alert?.category);

  const categoryCounts = categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  const lineData = {
    labels: formattedTimestamps,
    datasets: [{
      label: 'Destination Port',
      data: destPorts,
      borderColor: 'green',
      fill: false,
      pointBackgroundColor: 'green',
      pointBorderColor: 'green'
    }]
  };

  return (
    <div className="p-3 w-100" id="flexApp1" >
      <Line data={lineData} />
    </div>
  );
};

export default LineCart;
