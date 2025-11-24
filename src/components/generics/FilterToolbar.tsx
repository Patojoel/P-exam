import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import InputDatePicker from "@/components/generics/input/InpuDatePicker";
import { Search, Download } from "lucide-react";
import { useForm } from "react-hook-form";

interface FilterToolbarProps {
  onSearch?: (term: string) => void;
  onDateChange?: (start: string, end: string) => void;
  onExport?: () => void;
}

export const FilterToolbar = ({ onSearch, onExport }: FilterToolbarProps) => {
  const form = useForm();

  return (
    <Form {...form}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 w-full">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full md:w-auto">
          <div className="relative w-full md:w-[300px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Chercher un code de paiement"
              className="pl-9 bg-white border-gray-200"
              onChange={(e) => onSearch?.(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <span className="font-bold text-sm text-[#1E1F25]">De</span>
            <div className="w-[150px]">
              <InputDatePicker
                name="startDate"
                control={form.control}
                placeholder="00/00/0000"
              />
            </div>
            <span className="font-bold text-sm text-[#1E1F25]">À</span>
            <div className="w-[150px]">
              <InputDatePicker
                name="endDate"
                control={form.control}
                placeholder="00/00/0000"
              />
            </div>
          </div>
        </div>
        <Button
          variant="outline"
          className="text-blue border-blueText hover:bg-blue font-light min-h-[36px] gap-2"
          onClick={onExport}
        >
          <Download size={16} />
          Exporter
        </Button>
      </div>
    </Form>
  );
};
