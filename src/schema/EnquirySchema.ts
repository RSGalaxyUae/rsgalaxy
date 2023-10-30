import { z } from "zod";
import { WithPagination } from "./helpers/WithPagination";
import { WithSearch } from "./helpers/WithSearch";
import { WithSorting } from "./helpers/WithSorting";
import { serviceCodesArray } from "@/data/Services";

export const EnquiryTypesArray = [
    'GENERAL',
    'SERVICE'
]

export const EnquiryTypeEnumSchema = z.enum([
    'GENERAL',
    'SERVICE'
])

export type EnquiryTypes = z.TypeOf<typeof EnquiryTypeEnumSchema>;

export const GeneralEnquirySchema = z.object({
    subject: z.string(),
    message: z.string().optional()
})

export const ServiceEnquirySchema = z.object({
    serviceId: z.enum(serviceCodesArray),
    message: z.string().optional()
})

export const EnquiryFilterSchema = z.object({
    type: EnquiryTypeEnumSchema.optional(),
})

export const CreateEnquirySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    type: EnquiryTypeEnumSchema,
    phone: z.string().optional(),
    content: GeneralEnquirySchema
            .or(ServiceEnquirySchema)
})

export type CreateEnquiryInput = z.TypeOf<typeof CreateEnquirySchema>;


export const UpdateEnquirySchema = z.object({
    id: z.number()
}).merge(CreateEnquirySchema)

export type UpdateEnquiryInput = z.TypeOf<typeof UpdateEnquirySchema>;


export const DeleteEnquirySchema = z.object({
    id: z.number()
})


export const DeleteManyEnquirySchema = z.object({
    ids: z.array(z.number()).default([])
})

export const GetEnquiryByIdSchema = z.object({
    id: z.number()
})

export const PaginateEnquiryListSchema = WithPagination
                                        .merge(EnquiryFilterSchema)
                                        .merge(WithSearch)
                                        .merge(WithSorting)

export type PaginateEnquiryListInput = z.TypeOf<typeof PaginateEnquiryListSchema>;

