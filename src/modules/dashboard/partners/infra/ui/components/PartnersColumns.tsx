import type { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import ArrowSwapIcon from "@/components/icons/ArrowSwapIcon";
import type { PartnersEntity } from "@/modules/dashboard/partners/models/PartnersEntity";
import { formatCurrency } from "@/shared/helpers/format/formatCurrency";

interface PartnersColumnsProps {
  onCancel: (id: string) => void;
}

export const PartnersColumns = ({
  onCancel,
}: PartnersColumnsProps): ColumnDef<PartnersEntity>[] => [
  {
    accessorKey: "transactionNo",
    header: () => (
      <div className="flex items-center gap-2">
        <span className="font-bold text-white">N° transaction</span>
        <ArrowSwapIcon />
      </div>
    ),
    cell: ({ row }) => (
      <span className="font-medium text-[#1E1F25]">
        {row.original.transactionNo}
      </span>
    ),
  },
  {
    accessorKey: "paymentCode",
    header: () => (
      <div className="flex items-center gap-2">
        <span className="font-bold text-white">Code de paiement</span>
        <ArrowSwapIcon />
      </div>
    ),
    cell: ({ row }) => (
      <span className="font-medium text-[#1E1F25]">
        {row.original.paymentCode}
      </span>
    ),
  },
  {
    accessorKey: "date",
    header: () => (
      <div className="flex items-center gap-2">
        <span className="font-bold text-white">Date</span>
        <ArrowSwapIcon />
      </div>
    ),
    cell: ({ row }) => (
      <span className="font-medium text-[#1E1F25]">{row.original.date}</span>
    ),
  },
  {
    accessorKey: "amount",
    header: () => (
      <div className="flex items-center gap-2">
        <span className="font-bold text-white">Montant</span>
        <ArrowSwapIcon />
      </div>
    ),
    cell: ({ row }) => (
      <span className="font-bold text-[#1E1F25]">
        {formatCurrency(row.original.amount)}
      </span>
    ),
  },
  {
    accessorKey: "type",
    header: () => (
      <div className="flex items-center gap-2">
        <span className="font-bold text-white">Type de transaction</span>
        <ArrowSwapIcon />
      </div>
    ),
    cell: ({ row }) => (
      <span className="font-medium text-[#1E1F25]">{row.original.type}</span>
    ),
  },
  {
    accessorKey: "establishment",
    header: () => (
      <div className="flex items-center gap-2">
        <span className="font-bold text-white">Etablissement</span>
        <ArrowSwapIcon />
      </div>
    ),
    cell: ({ row }) => (
      <span className="font-medium text-[#1E1F25] uppercase">
        {row.original.establishment}
      </span>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <Button
        variant="ghost"
        className="text-[#0370ee] bg-[#E8F2FD] hover:bg-[#E8F2FD]/80 font-medium"
        onClick={() => onCancel(row.original.id)}
      >
        Annuler
      </Button>
    ),
  },
];
