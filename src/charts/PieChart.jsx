import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import data from "../db/data";
import { format } from "date-fns";

const PieCart = () => {
  const timestamps = data.map((entry) => new Date(entry.timestamp));
  const formattedTimestamps = data.map((entry) =>
    format(new Date(entry.timestamp), "dd MMM HH:mm:ss")
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

  const pieData = {
    labels: Object.keys(categoryCounts),
    datasets: [{
      data: Object.values(categoryCounts),
      backgroundColor: ['red', 'blue', 'green', 'orange', 'purple', 'yellow']
    }]
  };

  return (
    <div className="p-3 w-2/4" id="flexApp1">
      <Pie data={pieData}/>
    </div>
  );
};

export default PieCart;
