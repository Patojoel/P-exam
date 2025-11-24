"use client";
import {Label} from "@/components/ui/label.tsx";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import {Button} from "@/components/ui/button.tsx";
import {ChevronLeft, ChevronRight} from "lucide-react";
import * as React from "react";
import {twMerge} from "tailwind-merge";

interface PaginationProps {
    currentPage: number;
    pageSize: number;
    totalPages: number;
    setPageIndex: (page: number) => void;
    setPageSize: (page: number) => void;
    getRowCount: () => number;
    getCanPreviousPage: () => boolean;
    getCanNextPage: () => boolean;
    nextPage: () => void;
    maxVisiblePages?: number;
    className?: string;
    paginations ?:number[]
}
const maxVisiblePages = 3
export const Pagination: React.FC<PaginationProps> = ({
                                                   currentPage,
                                                   pageSize,
                                                   totalPages,
                                                   setPageIndex,
                                                   setPageSize,
                                                   getRowCount,
                                                   getCanPreviousPage,
                                                   getCanNextPage,
                                                   nextPage,
    className,
                                                    paginations=[5,10,25, 50]
                                               }) => {
    if (totalPages <= 1) return null;

    const getPageNumbers = () => {
        const pages = [];
        const halfVisible = Math.floor(maxVisiblePages / 2);
        let startPage = Math.max(1, currentPage - halfVisible);
        const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

        // Adjust if we're at the end
        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        // Always show first page
        if (startPage > 1) {
            pages.push(1);
            if (startPage > 2) {
                pages.push('...');
            }
        }

        // Visible pages
        for (let i = startPage; i <= endPage; i++) {
            if (i > 0 && i <= totalPages) {
                pages.push(i);
            }
        }

        // Always show last page
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                pages.push('...');
            }
            pages.push(totalPages);
        }

        return pages;
    };

    return (

        <div className={twMerge("flex bg-white sticky bottom-0 z-10 items-center justify-between px-4 py-3.5", className)}>
            <div className="hidden items-center gap-2 lg:flex">
                <Label htmlFor="rows-per-page" className="text-sm font-medium">
                    Afficher
                </Label>
                <Select
                    value={`${pageSize}`}
                    onValueChange={(value) => {
                        setPageSize(Number(value))
                    }}
                >
                    <SelectTrigger size="sm" className="w-18" id="rows-per-page">
                        <SelectValue
                            placeholder={pageSize}
                        />
                    </SelectTrigger>
                    <SelectContent side="top">
                        {paginations.map((pageSize) => (
                            <SelectItem key={pageSize} value={`${pageSize}`}>
                                {pageSize}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <Label htmlFor="rows-per-page" className="text-sm font-medium">
                    sur {getRowCount()}
                </Label>
            </div>
            <div className=" flex items-center gap-2 ">
                <Button
                    variant="outline"
                    size={"sm"}
                    className="p-0 h-7 flex text-sidebar-foreground border-border"
                    onClick={() => setPageIndex(0)}
                    disabled={!getCanPreviousPage()}
                >
                    <ChevronLeft />
                    <span>Retour</span>
                </Button>
                {
                    getPageNumbers().map((page, index)=> (
                        <span key={index}>
                            {
                                typeof page ==='number'? (
                                    <Button
                                        variant={currentPage === page? "default":"outline"}
                                        className={
                                        twMerge("w-7 h-7",
                                            currentPage !== page?
                                                " text-[#2A323D] border-border"
                                                :""
                                            )
                                        }
                                        size="sm"
                                        onClick={() => setPageIndex(page-1)}
                                        // disabled={!getCanPreviousPage()}
                                    >
                                        {page}
                                    </Button>
                                ):(
                                    <span>{page}</span>
                                )
                            }

                        </span>

                    ))
                }
                {/*<Button*/}
                {/*    variant="outline"*/}
                {/*    className="p-0 flex text-sidebar-foreground border-border"*/}
                {/*    size="sm"*/}
                {/*    onClick={() => previousPage()}*/}
                {/*    disabled={!getCanPreviousPage()}*/}
                {/*>*/}
                {/*    <span className="sr-only">Go to previous page</span>*/}
                {/*    <ChevronLeft />*/}
                {/*</Button>*/}
                {/*<Button*/}
                {/*    variant="outline"*/}
                {/*    className="p-0 flex text-sidebar-foreground border-border"*/}
                {/*    size="sm"*/}
                {/*    onClick={() => nextPage()}*/}
                {/*    disabled={!getCanNextPage()}*/}
                {/*>*/}
                {/*    <span className="sr-only">Go to next page</span>*/}
                {/*    /!*<IconChevronRight />*!/*/}
                {/*    <ChevronRight />*/}
                {/*</Button>*/}
                <Button
                    variant="outline"
                    className="p-0 h-7 flex text-sidebar-foreground border-border"
                    size="sm"
                    onClick={() => nextPage()}
                    disabled={!getCanNextPage()}
                >
                    <span>Suivant</span>
                    <ChevronRight />
                </Button>
            </div>
        </div>
    );
};