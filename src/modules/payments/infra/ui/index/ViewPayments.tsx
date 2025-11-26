import { FilterToolbar } from "@/components/generics/FilterToolbar";
import { StatCard } from "@/components/generics/StatCard";
import { DataTable } from "@/components/table/data-table";
import { usePayments } from "./hooks/usePayments";
import { formatCurrency } from "@/shared/helpers/format/formatCurrency";
import { PaymentColumns } from "./component/PaymentColumns";

export const ViewPayments = () => {
  const { listPartners, stats, handleCancel } = usePayments();
  const columns = PaymentColumns({ onCancel: handleCancel });

  return (
    <div className="flex flex-col gap-6 w-full h-screen ">
      <FilterToolbar />
      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard
            title="Montant total "
            amount={formatCurrency(stats.amountWithCommission)}
            className="flex-1"
          />
          <StatCard
            title="Montant total de commission"
            amount={formatCurrency(stats.amountWithoutCommission)}
            className="flex-1"
          />

        </div>
      )}

      <div className="bg-white rounded-[12px] overflow-hidden">
        <DataTable columns={columns} data={listPartners} />
      </div>
    </div>
  );
};
