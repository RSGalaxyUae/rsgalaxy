/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, {  useState } from 'react'
import { type PaginateOptions } from 'prisma-pagination'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { api } from '@/utils/api';
import { nanoid } from 'nanoid';
import { formateDate } from '@/lib/utils';
import EnquiryTypeSelector from './EnquiryTypeSelector';
import TextCopyButton from '../shared/TextCopyButton';
import TablePagination from '../shared/TablePagination';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import ViewEnquirySidebar from './ViewEnquirySidebar';
import { MoreHorizontal } from 'lucide-react';
import { type Enquiry } from '@prisma/client';
import DeleteEnquiry from './DeleteEnquiry';
import { Input } from '../ui/input';
import { debounce } from 'lodash'


const EnquiryRowAction = ({
    enquiry
}: { enquiry: Enquiry }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <MoreHorizontal className='w-4 h-4' />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem className='cursor-pointer text-red-700'>
                    <DeleteEnquiry enquiry={enquiry}>Delete</DeleteEnquiry>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}



const EnquiryTable = () => {
    const [enquiryType, setEnquiryType] = useState();
    const [pagination, setPagination] = useState<PaginateOptions>();
    const [search, setSearch] = useState<string>()
    const { data: EnquiryData, isLoading } = api.enquiry.paginatedList.useQuery({ pagination, type: enquiryType, search });

    const searchEnquiry = debounce((q) => {
        setSearch(q)
    }, 2000);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        searchEnquiry(event.target.value)
    }

    return (
        <Card>
            <CardHeader>
                <div className="flex gap-3 items-center">
                    <div className="">
                        <Input placeholder='Search by name or email' onChange={handleSearch} />
                    </div>
                    <div className="max-w-[250px]">
                        <EnquiryTypeSelector onChange={value => {
                            setEnquiryType(value)
                        }} />
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="rounded-md border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead >Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Phone</TableHead>
                                <TableHead>Enquiry Type</TableHead>
                                <TableHead>Date</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                EnquiryData?.data.map(enquiry => {
                                    return (
                                        <TableRow key={nanoid()}>
                                            <TableCell className="font-medium w-max">
                                                <ViewEnquirySidebar enquiry={enquiry}>
                                                <span className='cursor-pointer p-1 block underline'  >{enquiry.name}</span>
                                                </ViewEnquirySidebar>
                                            </TableCell>
                                            <TableCell >
                                                <a href={`mailto:${enquiry.email}`}>{enquiry.email}</a>
                                                <TextCopyButton textToCopy={enquiry.email} />
                                            </TableCell>
                                            <TableCell  >
                                                <a href={`tel:${enquiry.phone}`}>{enquiry.phone}</a>
                                                <TextCopyButton textToCopy={enquiry.email} />
                                            </TableCell>
                                            <TableCell >{enquiry.type}</TableCell>
                                            <TableCell >{formateDate(enquiry.createdAt)}</TableCell>
                                            <TableCell>
                                                <EnquiryRowAction enquiry={enquiry} />
                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
            <CardFooter>
                <div className="flex w-full justify-end">
                    <TablePagination pagination={EnquiryData?.meta} onPaginate={(page) => {
                        setPagination({ page })
                    }} />
                </div>
            </CardFooter>
        </Card>
    )
}

export default EnquiryTable