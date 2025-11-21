import { Input } from "@/components/ui/input";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { EyeIcon, EyeOffIcon, LockIcon } from "lucide-react";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form.tsx";
import PExamLabel from "./P_ExamLabel";
import type { InputWithLabelProps } from "@/lib/type/InputWithLabelProps";

export function InputPassword({
  required,
  name,
  placeholder,
  label,
  control,
}: InputWithLabelProps) {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <FormField
      control={control}
      name={name || ""}
      render={({ field, fieldState }) => (
        <FormItem>
          <PExamLabel label={label} required={required} />
          <FormControl>
            <div
              className={twMerge(
                "relative flex items-center border border-[#1E1F2533] rounded-[4px] ",
                "h-10 bg-white focus-within:bg-[#18227B]  focus-within:ring-[#18227B]",
                fieldState.error
                  ? "border-destructive focus-within:ring-destructive focus-visible:ring-destructive"
                  : ""
              )}
            >
              <LockIcon className="absolute ml-2  h-5 w-5 text-muted-foreground" />
              <LockIcon className="absolute ml-2  h-5 w-5 text-muted-foreground" />
              <Input
                type={showPassword ? "text" : "password"}
                {...field}
                placeholder={placeholder}
                className={twMerge("p-4 ", "pl-9")}
              />
              <button
                type={"button"}
                className={"absolute right-2"}
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <EyeOffIcon className=" h-5 w-5 text-muted-foreground" />
                ) : (
                  <EyeIcon className=" h-5  w-5 text-muted-foreground" />
                )}
              </button>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
