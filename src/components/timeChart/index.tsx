import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Divide } from "lucide-react";

ChartJS.register(ArcElement, Tooltip, Legend);
interface Props {
  data: { activity: string; hours: number }[];
}
export default function TimeChart({ data }: Props) {
  const ChartData = {
    lables: data.map((d) => d.activity),
    datasets: [
      {
        label: "hours",
        data: data.map((d) => d.hours),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#C9CBCF",
          "#8DD17E",
          "#FF6F91",
          "#FFD700",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      {data && data.length > 0 ? (
        <Pie data={ChartData} />
      ) : (
        <div style={{ color: "#888", fontStyle: "italic", padding: "1rem" }}>
          No data available.
        </div>
      )}
    </div>
  );
}
