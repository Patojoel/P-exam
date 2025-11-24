"use client";

import {FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form.tsx";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Input} from "@/components/ui/input.tsx";
import {useState} from "react";
import {Calendar} from "@/components/ui/calendar.tsx";
import {twMerge} from "tailwind-merge";
import {formatDateToUTCYMDHMS} from "@/shared/helpers/format/formatDateToUTCYMDHMS.ts";
import {formatUtcYmdHmsToLocalDMY} from "@/shared/helpers/format/formatUtcYmdHmsToLocalDMY.ts";
import {formatLocalDMYtoUTCYMDHMS} from "@/shared/helpers/format/formatLocalDMYtoUTCYMDHMS.ts";
import {formatUtcYMDHMSToDate} from "@/shared/helpers/format/formatUtcYMDHMSToDate.ts";
import { CalendarIcon } from "@/components/icons/CalendarIcon";
import type { InputWithLabelProps } from "@/lib/type/InputWithLabelProps";


const InputDatePicker = ({
                             name,
                             defaultValue="",
                             clearErrors,
                             size="default",
                             control,
                             placeholder,
                         }:InputWithLabelProps) => {
    const [open, setOpen] = useState(false)
    const [month, setMonth] = useState<Date|undefined>(
        formatUtcYMDHMSToDate(defaultValue)??
        new Date())
    return (
        <FormField
            control={control}
            name={name||''}
            render={({ field , fieldState}) => {
                const date = formatUtcYMDHMSToDate(field.value)
                const value = formatUtcYmdHmsToLocalDMY(field.value)??field.value
                return (
                    <FormItem className={twMerge(size==="sm"?"gap-1":"",)}>
                        <FormControl>
                            <div className={"relative"}>
                                <div className={twMerge("relative flex items-center border border-gray-200 rounded-md",
                                    "h-10 w-full bg-white focus-within:bg-[#E6F5FF] focus-within:ring-2 focus-within:ring-primary",
                                    fieldState.error ? "border-destructive focus-within:ring-destructive focus-visible:ring-destructive" : "",
                                    size==="sm"?"h-9":"",
                                )}>
                                    <Input
                                        id="date"
                                        placeholder={placeholder}
                                        className={twMerge( size==="sm"?"h-9 md:text-xs":"",
                                            "bg-transparent pl-4 pr-10")}
                                        {...field}
                                        value={formatUtcYmdHmsToLocalDMY(field.value)??field.value}
                                        onKeyDown={(e) => {
                                            if (e.key === "ArrowDown") {
                                                e.preventDefault()
                                                setOpen(true)
                                            }
                                        }}
                                        onChange={(e)=>{
                                            const input = e.target.value;
                                            const cursorPos = e.target.selectionStart || 0;

                                            // 1. Extract all digits
                                            const digitsOnly = input.replace(/[^0-9]/g, '').slice(0, 8);

                                            // 2. Rebuild with slashes
                                            let formatted = '';
                                            for (let i = 0; i < digitsOnly.length; i++) {
                                                if (i === 2 || i === 4) formatted += '/';
                                                formatted += digitsOnly[i];
                                            }

                                            // 3. Calculate cursor position
                                            let newCursorPos = cursorPos;
                                            const digitCount = digitsOnly.length;

                                            if (input.length > value.length) { // Inserting
                                                if (cursorPos <= 2) newCursorPos = Math.min(digitCount, 2);
                                                else if (cursorPos <= 5) newCursorPos = Math.min(digitCount + 1, 5);
                                                else newCursorPos = Math.min(digitCount + 2, 10);

                                                // Special handling for mid-segment insertions
                                                if (cursorPos === 3 || cursorPos === 6) newCursorPos++;
                                            }

                                            // 4. Apply formatting
                                            formatted = formatted.slice(0, 10);
                                            field.onChange(formatted);

                                            // 5. Set cursor
                                            setTimeout(() => {
                                                e.target.selectionStart = newCursorPos;
                                                e.target.selectionEnd = newCursorPos;
                                            }, 0);

                                        }}
                                        onBlur={(e) => {
                                            const date = formatLocalDMYtoUTCYMDHMS(e.target.value)
                                            if(date) {
                                                field.onChange(date)
                                                setMonth(formatUtcYMDHMSToDate(date))
                                                return
                                            }
                                            field.onChange("")
                                            setMonth(new Date())

                                        }}
                                    />
                                </div>
                                <Popover open={open} onOpenChange={setOpen}>
                                    <PopoverTrigger asChild>
                                        <Button
                                            id="date-picker"
                                            variant="ghost"
                                            className={twMerge("absolute  top-1/2 right-2 size-6 -translate-y-1/2",
                                                size==="sm"?"[&_svg:not([class*='size-'])]:size-5":"",
                                                )}
                                        >
                                            <CalendarIcon/>
                                            <span className="sr-only">Select date</span>
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className={twMerge(
                                        "w-auto overflow-hidden p-0")} align="end">
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            captionLayout="dropdown"
                                            month={month}
                                            onMonthChange={(month)=>setMonth(month)}
                                            onSelect={(date) => {
                                                setMonth(date)
                                                field.onChange(
                                                    formatDateToUTCYMDHMS(date)
                                                )
                                                clearErrors?.(name)
                                                setOpen(false)
                                            }}
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )
            }}
        />

        // <FormField
        //     control={control}
        //     name={name|| ''}
        //     render={({ field, fieldState }) => (
        //         <FormItem className="flex flex-col">
        //             <VossouLabel
        //                 label={label}
        //                 required={required}
        //             />
        //             <Popover>
        //                 <PopoverTrigger asChild>
        //                     <FormControl>
        //                         <Button
        //                             variant={"outline"}
        //                             className={cn(
        //                                 " pl-3 text-left font-normal",
        //                                 "h-10 bg-white  hover:bg-white focus-within:bg-[#E6F5FF] focus-within:ring-2 focus-within:ring-primary",
        //                                 fieldState.error? "border-destructive focus-within:ring-destructive focus-visible:ring-destructive": "",
        //                                 !field.value && "text-muted-foreground"
        //                             )}
        //                         >
        //                             {field.value ? (
        //                                 ""
        //                                 // format(field.value, "PPP")
        //                             ) : (
        //                                 <span>Pick a date</span>
        //                             )}
        //                             <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
        //                         </Button>
        //                     </FormControl>
        //                 </PopoverTrigger>
        //                 <PopoverContent className="w-auto p-0" align="start">
        //                     <Calendar
        //                         mode="single"
        //                         selected={field.value}
        //                         onSelect={field.onChange}
        //                         disabled={(date) =>
        //                             date > new Date() || date < new Date("1900-01-01")
        //                         }
        //                         captionLayout="dropdown"
        //                     />
        //                 </PopoverContent>
        //             </Popover>
        //             <FormMessage />
        //         </FormItem>
        //     )}
        // />
    );
};

export default InputDatePicker;
