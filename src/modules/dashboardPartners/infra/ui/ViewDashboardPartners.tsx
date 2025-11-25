import { FilterToolbar } from "@/components/generics/FilterToolbar";
import { StatCard } from "@/components/generics/StatCard";
import { DataTable } from "@/components/table/data-table";
import { formatCurrency } from "@/shared/helpers/format/formatCurrency";
import { PartnersColumns } from "@/modules/dashboard/partners/infra/ui/components/PartnersColumns";
import { usePartners } from "@/modules/dashboard/partners/infra/ui/hooks/usePartners";

export const ViewDashboardPartners = () => {
  const { listPartners, stats, handleCancel } = usePartners();
  const columns = PartnersColumns({ onCancel: handleCancel });

  return (
    <div className="flex overflow-y-auto  flex-col gap-6 w-full h-screen ">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <h1 className="text-[20px] font-bold text-[#1E1F25]">
            Express Union
          </h1>
          <span className="bg-[#E8F2FD] text-[#0370EE] text-xs font-bold px-3 py-1 rounded-full border border-[#0370EE]">
            6 000
          </span>
        </div>
      </div>

      <FilterToolbar />

      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <StatCard
            title="Montant total avec commission"
            amount={formatCurrency(stats.amountWithCommission)}
            className="flex-1"
          />
          <StatCard
            title="Commission partenaires de collecte"
            amount={formatCurrency(stats.amountWithoutCommission)}
            className="flex-1"
          />
          <StatCard
            title="Commission partenaires de collecte"
            amount={formatCurrency(stats.collectCommission)}
            className="flex-1"
          />
          <StatCard
            title="Commission partenaires technique"
            amount={formatCurrency(stats.collectCommission)}
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
