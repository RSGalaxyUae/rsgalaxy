
import { CreateEnquirySchema, DeleteEnquirySchema, DeleteManyEnquirySchema, GetEnquiryByIdSchema, PaginateEnquiryListSchema, UpdateEnquirySchema } from './../../../schema/EnquirySchema';
import { createTRPCRouter, protectedProcedure, publicProcedure } from './../trpc';
import { TRPCError } from '@trpc/server';
import { type Enquiry, type Prisma } from '@prisma/client';
import { paginate } from '@/lib/utils';


export const EnquiryRouter = createTRPCRouter({
    create: publicProcedure.input(CreateEnquirySchema).mutation(async ({ctx, input}) =>{
        const isAlreadySubmitted = await ctx.db.enquiry.findFirst({
            where: {
                email: input.email,
                type: input.type
            }
        });

        if(isAlreadySubmitted){
            throw new TRPCError({message: 'Enquiry already submitted', code: 'BAD_REQUEST'})
        }

        const createdEnquiry = await ctx.db.enquiry.create({
            data: input
        })

        return createdEnquiry;
    }),

    update: protectedProcedure.input(UpdateEnquirySchema).mutation(async ({ctx, input}) => {
        const {id, ...rest} = input;
        return await ctx.db.enquiry.update({
            where: {id},
            data: rest
        })
    }),

    delete: protectedProcedure.input(DeleteEnquirySchema).mutation(async ({ctx, input}) => {
        return await ctx.db.enquiry.delete({where: {id: input.id}})
    }),

    deleteMany: protectedProcedure.input(DeleteManyEnquirySchema).mutation(async ({ctx, input}) => {
        return await ctx.db.$transaction(input.ids.map(id => {
            return ctx.db.enquiry.delete({
                where: {
                    id
                }
            })
        }))
    }),


    getById: publicProcedure.input(GetEnquiryByIdSchema).query(async ({ctx, input}) => {
        return await ctx.db.enquiry.findFirst({where: {id: input.id}})
    }),

    paginatedList: publicProcedure.input(PaginateEnquiryListSchema).query(async ({ctx, input}) => {
        const query: Prisma.EnquiryFindManyArgs = {
            where: {
                type: input.type,
                AND: (input.search && input.search !== '') ? {
                    OR: [
                        {email: {contains: input.search, mode: 'insensitive'}},
                        {name: {contains: input.search, mode: 'insensitive'}}
                    ]
                } : undefined
            },
            orderBy: input.sortBy ?? {createdAt: 'desc'}
        }
        return await paginate<Enquiry, Prisma.EnquiryFindManyArgs>(
            ctx.db.enquiry,
            query,
            input.pagination
        )
    })
})