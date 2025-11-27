import React from "react";
import ReactECharts from "echarts-for-react";
import type { RecoursData } from "../../hooks/usePartners";
import { Info } from "lucide-react";

interface RecoursChartProps {
  data: RecoursData;
}

export const RecoursChart: React.FC<RecoursChartProps> = ({ data }) => {
  const option = {
    series: [
      {
        name: "Recours",
        type: "pie",
        radius: ["70%", "90%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 5,
        },
        label: {
          show: true,
          position: "center",
          formatter: () => `{value|${data.total}}\n{name|Refus}`,

          name: {
            fontSize: 14,
            color: "#64748B",
          },
          rich: {
            value: {
              fontSize: 24,
              fontWeight: "bold",
              color: "#1EF25",
              lineHeight: 32,
            },
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          {
            value: (data.total * data.percentage) / 100,
            name: "Recours gracieux",
            itemStyle: { color: "#93C5FD" },
          },
          { value: data.total, name: "Refus", itemStyle: { color: "#3F8CFF" } },
        ],
      },
    ],
  };

  return (
    <div className="bg-white rounded-[12px] p-6 h-full flex flex-col justify-between">
      <div className="flex items-center gap-2 mb-4">
        <h3 className="text-[#64748B] text-lg font-bold">Recours</h3>
        <Info size={16} className="text-[#64748B]" />
      </div>
      <div className="flex justify-start items-start  h-full">
        <div className="w-full  justify-start items-start h-[150px]">
          <ReactECharts
            option={option}
            style={{ height: "100%", width: "100%" }}
            opts={{ renderer: "svg" }}
          />
        </div>
        <div className="w-full flex justify-start">
          <div className="bg-[#F8FAFC] p-4 rounded-[12px] w-[140px]">
            <div className="w-3 h-3 rounded-full bg-[#3B82F6] mb-2"></div>
            <div className="text-[#1E1F25] text-2xl font-bold mb-1">
              {data.percentage}%
            </div>
            <div className="text-[#1E1F25] text-sm">{data.label}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
