"use client";
import { Label } from "@/components/ui/label.tsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select.tsx";
import { Button } from "@/components/ui/button.tsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";
import { twMerge } from "tailwind-merge";

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
    previousPage: () => void;
    maxVisiblePages?: number;
    className?: string;
    paginations?: number[]
}

const maxVisiblePages = 5;

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
    previousPage,
    className,
    paginations = [10, 25, 50, 100]
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

        // Visible pages
        for (let i = startPage; i <= endPage; i++) {
            if (i > 0 && i <= totalPages) {
                pages.push(i);
            }
        }

        // Add ellipsis if needed
        if (endPage < totalPages) {
            pages.push('...');
        }

        return pages;
    };

    return (
        <div className={twMerge("flex items-center justify-between min-h-[28px]  px-4 py-4 mt-2 bg-white", className)}>
            {/* Left: Items per page */}
            <div className="flex h-[25px] items-center gap-2">
                <Label htmlFor="rows-per-page" className="text-sm font-normal text-[#A5A5A7] whitespace-nowrap">
                    Nombre d'éléments par page
                </Label>
                <Select
                    value={`${pageSize}`}
                    onValueChange={(value) => {
                        setPageSize(Number(value))
                    }}
                >
                    <SelectTrigger
                        className="w-[70px] flex items-center min-h-[28px] border-[#E6EAEFBD] bg-[#D2D2D3] "
                        id="rows-per-page"
                    >
                        <SelectValue placeholder={pageSize} />
                   <span className="font-semibold"> {getRowCount()}</span>
                    </SelectTrigger>
                    <SelectContent className="bg-[#D2D2D3] z-10" side="top">
                        
                        {paginations.map((size) => (
                            <SelectItem key={size} value={`${size}`}>
                                {size}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className="flex items-center gap-4">
                {/* Previous button */}
                <Button
                    variant="outline"
                    size="icon"
                    className="h-[28px] w-[28px] rounded bg-[#D2D2D3] border-[#E6EAEFBD] hover:bg-[#E6EAEFBD]"
                    onClick={() => previousPage()}
                    disabled={!getCanPreviousPage()}
                >
                    <ChevronLeft className="h-4 w-4 text-[#1E1F25]" />
                </Button>

                {/* Page numbers */}
                {getPageNumbers().map((page, index) => (
                    <span key={index}>
                        {typeof page === 'number' ? (
                            <Button
                                variant={currentPage === page ? "default" : "outline"}
                                className={twMerge(
                                    "h-[28px] w-[28px] rounded font-medium",
                                    currentPage === page
                                        ? "bg-[#0370EE] text-white hover:bg-[#0370EE]/90 border-[#0370EE]"
                                        : "bg-[#D2D2D3] text-[#1E1F25] border-[#E6EAEFBD] hover:bg-[#E6EAEFBD]"
                                )}
                                size="icon"
                                onClick={() => setPageIndex(page - 1)}
                            >
                                {page.toString().padStart(2, '0')}
                            </Button>
                        ) : (
                            <span className="px-2 text-[#A5A5A7]">{page}</span>
                        )}
                    </span>
                ))}

                {/* Next button */}
                <Button
                    variant="outline"
                    size="icon"
                    className="h-[28px] w-[28px] rounded bg-[#D2D2D3] border-[#E6EAEFBD] hover:bg-[#E6EAEFBD]"
                    onClick={() => nextPage()}
                    disabled={!getCanNextPage()}
                >
                    <ChevronRight className="h-4 w-4 text-[#1E1F25]" />
                </Button>
            </div>

            {/* Right: Page selector */}
            <div className="flex items-center gap-2">
                <Label htmlFor="page-selector" className="text-sm font-normal text-[#A5A5A7]">
                    Page
                </Label>
                <Select
                    value={`${currentPage}`}
                    onValueChange={(value) => {
                        setPageIndex(Number(value) - 1)
                    }}
                >
                    <SelectTrigger
                        className=" w-[60px] h-[28px]  border-[#E6EAEFBD] bg-[#D2D2D3]"
                        id="page-selector"
                    >
                        <SelectValue   placeholder={currentPage} />
                    </SelectTrigger>
                    <SelectContent className="bg-[#D2D2D3] " side="top">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <SelectItem key={page} value={`${page}`}>
                                {page}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};