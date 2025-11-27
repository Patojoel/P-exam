import React from "react";
import ReactECharts from "echarts-for-react";
import type { SecteurData } from "../../hooks/usePartners";
import { Info } from "lucide-react";

interface SecteurChartProps {
  data: SecteurData;
}

export const SecteurChart: React.FC<SecteurChartProps> = ({ data }) => {
  const option = {
    series: [
      {
        type: "pie",
        radius: ["70%", "90%"],
        center: ["50%", "70%"],
        startAngle: 180,
        endAngle: 0,
        silent: true,
        z: 0,
        label: { show: false },
        data: [{ value: 1, itemStyle: { color: "#F1F5F9" } }],
      },
      {
        name: "Secteur",
        type: "pie",
        radius: ["70%", "90%"],
        center: ["50%", "70%"],
        itemStyle: {
          borderColor: "#fff",
          borderWidth: 2,
        },
        startAngle: 180,
        endAngle: 0,
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: "center",
          formatter: () => `{value|${data.total}}\n{name|Demandes}`,
          rich: {
            value: {
              fontSize: 32,
              fontWeight: "bold",
              color: "#1E1F25",
              lineHeight: 40,
            },
            name: {
              fontSize: 14,
              color: "#64748B",
            },
          },
          offset: [0, -20],
        },
        labelLine: {
          show: false,
        },
        data: data.series.map((item) => ({
          value: item.value,
          name: item.name,
          itemStyle: { color: item.color },
        })),
      },
    ],
  };

  return (
    <div className="bg-white rounded-[12px] p-6 w-full h-full flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <h3 className="text-[#64748B] text-lg font-bold">Secteur</h3>
        <Info size={16} className="text-[#64748B]" />
      </div>

      <div className="relative h-[222px] w-full flex justify-center">
        <ReactECharts
          option={option}
          style={{ height: "100%", width: "100%" }}
          opts={{ renderer: "svg" }}
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        {data.series.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-[#64748B] text-sm">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
