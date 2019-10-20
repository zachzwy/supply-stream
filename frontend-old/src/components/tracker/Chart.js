import React, { Component } from "react";
import CanvasJSReact from "../../assets/canvasjs.react";
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const dps = [
  { x: 1, y: 10 },
  { x: 2, y: 13 },
  { x: 3, y: 18 },
  { x: 4, y: 20 },
  { x: 5, y: 17 },
  { x: 6, y: 10 },
  { x: 7, y: 13 },
  { x: 8, y: 18 },
  { x: 9, y: 20 },
  { x: 10, y: 17 }
];
let xVal = dps.length + 1;
let yVal = 15;
const updateInterval = 1000;

class DynamicLineChart extends Component {
  constructor() {
    super();
    this.updateChart = this.updateChart.bind(this);
  }
  componentDidMount() {
    setInterval(this.updateChart, updateInterval);
  }
  updateChart() {
    yVal = yVal + Math.round(5 + Math.random() * (-5 - 5));
    dps.push({ x: xVal, y: yVal });
    xVal++;
    if (dps.length > 10) {
      // dps.shift();
    }
    this.chart.render();
  }
  render() {
    const options = {
      title: {
        text: this.props.title
      },
      data: [
        {
          type: "line",
          dataPoints: dps
        }
      ]
    };

    return (
      <CanvasJSChart options={options} onRef={ref => (this.chart = ref)} />
    );
  }
}

export default DynamicLineChart;

// {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
