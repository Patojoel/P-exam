import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form.tsx";
import { cn } from "@/lib/config/utils";
import type { Control } from "react-hook-form";

const ConfirmCGuCheckbox = ({
  className,
  control,
  name,
}: {
  className?: string;
  name?: string;
  control?: Control<any, any, any>;
}) => {
  return (
    <FormField
      control={control}
      name={name || ""}
      render={({ field }) => (
        <FormItem className={className}>
          <FormControl>
            <span className={cn("flex cursor-pointer w-full items-center")}>
              <div className={"bg-white size-4.5"}>
                <Checkbox
                  id={"confirm-cgu"}
                  {...field}
                  checked={field.value}
                  onCheckedChange={(e) => {
                    const value = { target: { value: e } };
                    field.onChange(value);
                  }}
                  className={"size-4.5 cursor-pointer"}
                />
              </div>
              <p className={"ml-2 text-sm  font-DMSans"}>
                <span
                  onClick={() => {
                    const value = { target: { value: !field.value } };
                    field.onChange(value);
                  }}
                >
                  J'accepte les
                </span>
                <span
                  className={
                    "text-primary font-medium hover:text-primary/80 cursor-pointer"
                  }
                >
                  {" "}
                  conditions générales{" "}
                </span>
                <span>et la</span>
                <span
                  className={
                    "text-primary font-medium hover:text-primary/80 cursor-pointer"
                  }
                >
                  {" "}
                  politique de confidentialité.
                </span>
              </p>
            </span>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default ConfirmCGuCheckbox;
