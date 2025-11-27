import React from "react";
import ReactECharts from "echarts-for-react";
import type { ChartData } from "../../hooks/usePartners";
import { Info } from "lucide-react";

interface PartnerChartProps {
  data: ChartData[];
}

export const PartnerChart: React.FC<PartnerChartProps> = ({ data }) => {
  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      data: ["Demande reçue", "Visite"],
      right: 20,
      top: 20,
      icon: "circle",
      itemGap: 20,
      textStyle: {
        color: "#64748B",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: data.map((item) => item.year),
      axisLine: {
        show: true,
        lineStyle: {
          color: "#E2E8F0",
        },
      },
      axisTick: {
        show: false,
      },
      _axisLabel: {
        color: "#64748B",
        fontSize: 14,
        margin: 20,
      },
      get axisLabel() {
        return this._axisLabel;
      },
      set axisLabel(value) {
        this._axisLabel = value;
      },
    },
    yAxis: {
      type: "value",
      min: 0,
      max: 280,
      intervacrel: 40,
      splitLine: {
        lineStyle: {
          color: "#E2E8F0",
        },
      },
      _axisLabel: {
        color: "#64748B",
        fontSize: 14,
      },
      get axisLabel() {
        return this._axisLabel;
      },
      set axisLabel(value) {
        this._axisLabel = value;
      },
    },
    series: [
      {
        name: "Demande reçue",
        type: "bar",
        data: data.map((item) => item.requests),
        itemStyle: {
          color: "#0F3880",
          borderRadius: [10, 10, 10, 10],
        },
        barWidth: 35,
        barGap: "5%",
      },
      {
        name: "Visite",
        type: "bar",
        data: data.map((item) => item.visits),
        itemStyle: {
          color: "#4094F7",
          borderRadius: [10, 10, 10, 10],
        },
        barWidth: 35,
        barGap: "5%",
      },
    ],
  };

  return (
    <div className="bg-white rounded-[12px] p-6 min-w-[785px] h-full min-h-[500px]">
      <div className="flex items-center gap-2 mb-4">
        <h3 className="text-[#64748B] text-lg font-bold">Demande | Visite</h3>
        <Info size={16} color="#7D8592" />
      </div>
      <ReactECharts
        option={option}
        style={{ height: "450px", width: "100%" }}
      />
    </div>
  );
};
