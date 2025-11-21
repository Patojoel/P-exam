"use client";
import { Input } from "@/components/ui/input";
import { twMerge } from "tailwind-merge";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form.tsx";
import PExamLabel from "./P_ExamLabel";
import type { InputWithLabelProps } from "@/lib/type/InputWithLabelProps";

export function InputWithLabel({
  required,
  type = "text",
  name,
  subLabel,
  clearErrors,
  size = "default",
  control,
  prefix,
  suffix,
  onBlur,
  onChange,
  placeholder,
  label,
  labelClassName,
  className,
  disabled,
  mask,
}: InputWithLabelProps) {
  return (
    <FormField
      control={control}
      name={name || ""}
      render={({ field, fieldState }) => (
        <FormItem className={twMerge(size === "sm" ? "gap-1" : "", className)}>
          <PExamLabel
            size={size}
            label={label}
            subLabel={subLabel}
            required={required}
            className={labelClassName}
          />
          <FormControl>
            <div
              className={twMerge(
                "relative flex items-center border border-[#1E1F2533] rounded-[4px] ",
                "h-10 bg-white ",
                fieldState.error
                  ? "border-destructive focus-within:ring-destructive focus-visible:ring-destructive"
                  : "",
                size === "sm" ? "h-9" : ""
              )}
            >
              {prefix && (
                <div className={"absolute ml-2 h-5 w-5 text-muted-foreground"}>
                  {prefix}
                </div>
              )}
              <Input
                type={type}
                {...field}
                onChange={(e) => {
                  const value = mask ? mask(e.target.value) : e.target.value;
                  field.onChange(value);
                  clearErrors?.(name);
                  onChange?.(e);
                }}
                onBlur={onBlur}
                placeholder={placeholder}
                className={twMerge(
                  "p-4",
                  size === "sm" ? "h-9 md:text-xs" : "",
                  prefix || type === "email" ? "pl-9" : ""
                )}
                disabled={disabled}
              />
              {suffix && (
                <div
                  className={"absolute right-2 h-5 w-5 text-muted-foreground"}
                >
                  {suffix}
                </div>
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
