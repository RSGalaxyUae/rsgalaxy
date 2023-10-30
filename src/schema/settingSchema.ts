/* eslint-disable @typescript-eslint/no-explicit-any */
import { Setting } from "@prisma/client";
import { z } from "zod";

export const SettingsTypeSchema = z.enum([
    'GENERAL_SETTING',
    'INTEGRATION'
])

export const GeneralSettingValueSchema = z.object({
    logoUrl: z.string().optional(),
    contact: z.object({
        address: z.string().optional(),
        city: z.string().optional(),
        country: z.string().optional(),
        pincode: z.string().optional(),
        phone: z.string().optional(),
        email: z.string().optional()
    }).optional(),
    socialLinks: z.object({
        facebook: z.string().optional(),
        linkedIn: z.string().optional(),
        twitter: z.string().optional(),
        instagram: z.string().optional()
    }).optional()
})

export const IntegrationSettingSchema = z.object({
    whatsapp: z.object({
        number: z.string()
    }).optional(),

    tawkto: z.object({
        propertyId: z.string(),
        widgetId: z.string(),
        enabled: z.boolean().default(false)
    }).optional()
})

const DefaultSetting = z.object({
    type: SettingsTypeSchema,
    lable: z.string(),
})









export const CreateIntegrationSettingSchema = DefaultSetting
                                            .merge(z.object({value: IntegrationSettingSchema}));

export type CreateIntegrationSettingInput = z.infer<typeof CreateIntegrationSettingSchema>;

export const UpdateIntegrationSchema = z.object({
    id: z.number(),
}).merge(CreateIntegrationSettingSchema);

export type UpdateIntegrationSettingInput = z.infer<typeof UpdateIntegrationSchema>;







export const CreateSettingSchema = z.object({
    type: SettingsTypeSchema,
    lable: z.string(),
    value: GeneralSettingValueSchema.or(IntegrationSettingSchema)
})

export type CreateSettingInput = z.TypeOf<typeof CreateSettingSchema>;


export const UpdateSettingSchema = z.object({
    id: z.number()
}).merge(CreateSettingSchema);


export type UpdateSettingInput = z.TypeOf<typeof UpdateSettingSchema>;

export const GetSettingSchema = z.object({
    id: z.number() 
})

export const GetSettingByType = z.object({
    type: SettingsTypeSchema
})

export const ListSettingSchema = z.object({
    type: SettingsTypeSchema
})


export type SettingOutput<T = any> = {
    id: number;
    type: string;
    lable: string;
    value: T;
}

export type IntegrationSettingOutput = SettingOutput<z.infer<typeof IntegrationSettingSchema>>
export type GeneralSettingOutput = SettingOutput<z.infer<typeof GeneralSettingValueSchema>>