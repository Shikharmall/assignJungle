import React from "react";
import { Scatter } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import data from "../db/data";
import { format } from "date-fns";

const ScatterCart = () => {
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

  const scatterData = {
    datasets: [{
      label: 'Source vs Destination Port',
      data: srcPorts.map((srcPort, index) => ({
        x: srcPort,
        y: destPorts[index]
      })),
      backgroundColor: 'red'
    }]
  };
  return (
    <div className="p-3 w-100" id="flexApp1">
      <Scatter data={scatterData} />
    </div>
  );
};

export default ScatterCart;
