import React from 'react'
import { PaginatedResult } from 'prisma-pagination'
import { Button } from '../ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export type PaginationMeta = {
    total: number;
    lastPage: number;
    currentPage: number;
    perPage: number;
    prev: number | null;
    next: number | null;
}

const TablePagination = ({
    pagination,
    onPaginate
}: {
    pagination?: PaginationMeta,
    onPaginate?: (page: number) => void
}) => {
    
    const next = () => {
        if(!pagination?.next) return;
        onPaginate?.(pagination.next)
    }

    const prev = () => {
        if(!pagination?.prev) return;
        onPaginate?.(pagination.prev)
    }

    return (
        <div className='flex items-center justify-between w-full'>
            <div className="md:block hidden ">
                <p>Total {pagination?.total} items</p>
            </div>
            <div className='flex items-center gap-3 md:justify-between'>
            <Button variant={'outline'} disabled={!pagination?.prev} onClick={() => prev()}>
                <ChevronLeft/>
                <span>Prev</span>
            </Button>
            <Button variant={'outline'} disabled={!pagination?.next} onClick={() => next()}>
                <span>Next</span>
                <ChevronRight/>
            </Button>
        </div>
        </div>
    )
}

export default TablePagination