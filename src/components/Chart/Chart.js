import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const Chart = () => {
  const data = [
    {
      name: "Assignment 1",
      marks: 58,
      quizMarks: 9,
    },
    {
      name: "Assignment 2",
      marks: 60,
      quizMarks: 8,
    },
    {
      name: "Assignment 3",
      marks: 60,
      quizMarks: 9,
    },
    {
      name: "Assignment 4",
      marks: 51,
      quizMarks: 9,
    },
    {
      name: "Assignment 5",
      marks: 60,
      quizMarks: 10,
    },
    {
      name: "Assignment 6",
      marks: 60,
      quizMarks: 10,
    },
    {
      name: "Assignment 7",
      marks: 60,
      quizMarks: 9,
    },
  ];
  return (
    <div>
      {/* <LineChart width={500} height={500} data={data}>
        <Tooltip></Tooltip>
        <XAxis dataKey="name"></XAxis>
        <YAxis dataKey="quizMarks"></YAxis>
        <Line
          type="monotone"
          dataKey="marks"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        ></Line>
      </LineChart> */}
      <LineChart
        width={900}
        height={500}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="marks"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="quizMarks" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default Chart;
